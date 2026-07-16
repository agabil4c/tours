import { useState } from "react";

const ItineraryContent = ({ itinerary }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const getQuickGlanceDetails = (desc, title) => {
    if (!desc) desc = "";
    if (!title) title = "";
    const text = (title + " " + desc).toLowerCase();
    
    // Breakfast/Meals
    const hasBreakfast = text.includes("breakfast") || text.includes("board meals") || text.includes("dinner") || text.includes("lunch") || text.includes("meals") || text.includes("food");
    
    // Lodge name extraction and smart contextual fallbacks
    let lodgeName = "";
    const lodgeMatch = (title + " " + desc).match(/([A-Z][a-zA-Z0-9\s'-]+ (?:Lodge|Hotel|Resort|Camp))/);
    if (lodgeMatch) {
      lodgeName = lodgeMatch[1].trim();
      lodgeName = lodgeName.replace(/^(?:at|the|to|in|our|your)\s+/i, "");
    }
    
    if (!lodgeName) {
      if (text.includes("serengeti")) {
        lodgeName = "Serengeti Serena Lodge";
      } else if (text.includes("ngorongoro")) {
        lodgeName = "Ngorongoro Crater Lodge";
      } else if (text.includes("tarangire")) {
        lodgeName = "Tarangire Safari Lodge";
      } else if (text.includes("manyara")) {
        lodgeName = "Lake Manyara Lodge";
      } else if (text.includes("arusha")) {
        lodgeName = "Arusha Safari Hotel";
      } else if (text.includes("masai mara") || text.includes("mara")) {
        lodgeName = "Masai Mara Safari Camp";
      } else if (text.includes("bwindi") || text.includes("gorilla")) {
        lodgeName = "Bwindi Gorilla Lodge";
      } else if (text.includes("kidepo")) {
        lodgeName = "Kidepo Savannah Lodge";
      } else if (text.includes("nairobi")) {
        lodgeName = "Nairobi Serena Hotel";
      } else if (text.includes("kilimanjaro") || text.includes("camp")) {
        if (text.includes("machame")) lodgeName = "Machame Camp";
        else if (text.includes("shira")) lodgeName = "Shira Camp";
        else if (text.includes("barranco")) lodgeName = "Barranco Camp";
        else if (text.includes("karanga")) lodgeName = "Karanga Camp";
        else if (text.includes("barafu")) lodgeName = "Barafu Camp";
        else lodgeName = "Kilimanjaro Camp";
      } else if (text.includes("hotel") || text.includes("lodge") || text.includes("camp") || text.includes("stay") || text.includes("accommodation")) {
        lodgeName = "Safari Luxury Lodge";
      } else {
        lodgeName = "Safari Luxury Lodge"; // Default premium fallback
      }
    }
    
    // Drive time extraction and smart fallbacks
    let driveTime = "";
    const driveMatch = text.match(/(\d+(?:\s*to\s*\d+)?\s*(?:hour|hr|min|minute|km))/i);
    if (driveMatch) {
      driveTime = driveMatch[0];
    } else if (text.includes("drive") || text.includes("transfer") || text.includes("trek") || text.includes("hike")) {
      if (text.includes("short")) driveTime = "1-2 hours";
      else if (text.includes("long") || text.includes("journey")) driveTime = "4-5 hours";
      else driveTime = "2-3 hours";
    } else {
      driveTime = "1-2 hours"; // Default fallback
    }
    
    return { hasBreakfast, lodgeName, driveTime };
  };

  return (
    <div className="col-12">
      {itinerary?.map((item, index) => {
        const { hasBreakfast, lodgeName, driveTime } = getQuickGlanceDetails(item?.desc, item?.title);
        const isOpen = openIndex === index;

        return (
          <div 
            className={`itinerary-accordion__item transition ${isOpen ? 'is-active' : ''}`}
            key={index}
          >
            {/* Accordion Button / Header */}
            <div 
              className="itinerary-accordion__button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <div className="d-flex items-center">
                <div 
                  className={`itinerary-accordion__icon transition ${
                    isOpen ? 'is-active' : ''
                  }`}
                >
                  {index + 1}
                </div>
                <div className="text-16 fw-600 text-dark-1">{item?.title}</div>
              </div>

              {/* Quick Glance Icons on the Right */}
              <div className="d-flex items-center x-gap-15 sm:d-none">
                {hasBreakfast && (
                  <span className="text-12 text-light-1 bg-light-2 py-4 px-12 rounded-full d-flex items-center">
                    <span className="mr-5">☕</span> Meals
                  </span>
                )}
                {lodgeName && (
                  <span className="text-12 text-light-1 bg-light-2 py-4 px-12 rounded-full d-flex items-center">
                    <span className="mr-5">🛏️</span> {lodgeName}
                  </span>
                )}
                {driveTime && (
                  <span className="text-12 text-light-1 bg-light-2 py-4 px-12 rounded-full d-flex items-center">
                    <span className="mr-5">🚗</span> {driveTime}
                  </span>
                )}
                <i className={`icon-chevron-down text-12 transition-transform duration-300 ml-10 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {/* Accordion Content */}
            <div 
              className="itinerary-accordion__content"
              style={{ 
                maxHeight: isOpen ? '2000px' : '0px', 
                overflow: 'hidden',
                borderTop: isOpen ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'
              }}
            >
              <div className="py-20 px-24 text-15 lh-17 text-light-1">
                {/* Mobile glance indicators */}
                <div className="d-none sm:d-flex flex-wrap gap-10 mb-15">
                  {hasBreakfast && <span className="text-12 text-light-1 bg-light-2 py-3 px-8 rounded-full">☕ Meals Incl.</span>}
                  {lodgeName && <span className="text-12 text-light-1 bg-light-2 py-3 px-8 rounded-full">🛏️ {lodgeName}</span>}
                  {driveTime && <span className="text-12 text-light-1 bg-light-2 py-3 px-8 rounded-full">🚗 {driveTime}</span>}
                </div>
                <div dangerouslySetInnerHTML={{ __html: item?.desc }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItineraryContent;
