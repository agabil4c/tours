const ImportantInfo = ({tour}) => {
  return (
    <div className="row x-gap-40 y-gap-40 justify-between pt-20">
      {tour?.inclusions?.length > 0 && (
        <div className="col-lg-4 col-md-6">
          <div className="fw-500 mb-10">Inclusions</div>
          {tour?.inclusions?.map((item, index) => (
            <ul key={index} className="list-disc">
              <li key={index}>{item}</li>
              
            </ul>
          ))}
        </div>
      )}

      {tour?.inclusions?.length > 0 && (
        <div className="col-lg-4 col-md-6">
          <div className="fw-500 mb-10">Exclusions</div>
          {tour?.exclusions?.map((item, index) => (
            <ul key={index} className="list-disc">
              <li key={index}>{item}</li>
              
            </ul>
          ))}
        </div>
      )}
      
      <div className="col-lg-4 col-md-6">
        <div className="fw-500 mb-10">Additional information</div>
        <ul className="list-disc">
          <li>Confirmation will be received at time of booking</li>
          
          <li>Please note: the tour itinerary and order may change</li>
        </ul>
      </div>

      {/* <div className="col-lg-4 col-md-6">
        <div className="fw-500 mb-10">Exclusions</div>
        <ul className="list-disc">
          <li>Hotel pick-up and drop-off</li>
          <li>Gratuities</li>
          <li>Lunch</li>
        </ul>
      </div> */}

      {/* <div className="col-12">
        <div className="fw-500 mb-10">Additional information</div>
        <ul className="list-disc">
          <li>Confirmation will be received at time of booking</li>
          
          <li>Please note: the tour itinerary and order may change</li>
        </ul>
      </div> */}
    </div>
  );
};

export default ImportantInfo;
