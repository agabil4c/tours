import Image from "next/image";

const ItineraryContent = ({itinerary}) => {
  return (
    <>
      {itinerary?.map((item, index) => (
        <div className="col-6" key={index}>
          <div className="accordion__item ">
            <div className="d-flex">
              <div className="accordion__icon size-40 flex-center bg-blue-2 text-blue-1 rounded-full">
                <div className="text-14 fw-500">{index++}</div>
              </div>
              {/* End item number */}

              <div className="ml-20">
                <div className="text-16 lh-15 fw-500">{item?.title}</div>
                
                <div className="pt-15 pb-15">
                    
                  <div className="text-14 lh-17 mt-15" dangerouslySetInnerHTML={{ __html: item?.desc }}/>
                </div>
                {/* End accordion conent */}

                
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItineraryContent;
