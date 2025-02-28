import AccordionContent from "./ItineraryContent";
import MapPropertyFinder from "./MapPropertyFinder";

const index = ({tour}) => {
  return (
    <div className="row y-gap-30">
      <div className="col-lg-12">
        <div className="relative">
          <div className="border-test" />
          <div className="accordion -map row y-gap-20" id="itineraryContent">
            <AccordionContent itinerary = {tour?.itinerary} />
          </div>
        </div>
      </div>
      {/* End col-lg-4 */}
      {/* End col-lg-8 */}
    </div>
  );
};

export default index;
