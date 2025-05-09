const PropertyHighlights2 = ({ place }) => {
  

  return (
    <div className="px-30 py-30 border-light rounded-4 mt-30">
      <div className="text-18 fw-500 pb-30">Destination highlights</div>

      {place?.highlight?.map((text, index) => (
        <div className="row x-gap-20 y-gap-20" key={index}>
          <div className="col-auto text-12 text-blue-1">✔️</div>          
          <div className="col-auto">
            <div className="text-15 ">{text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyHighlights2;
