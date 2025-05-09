const TopBreadCrumb = ({place, destination}) => {
  return (
    <section className="d-flex items-center py-15 border-top-light">
      <div className="container">
        <div className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
              <div className="col-auto">Home</div>
              {/* End .col-auto */}
              <div className="col-auto">&gt;</div>
              {/* End .col-auto */}
              <div className="col-auto">{destination}</div>
              {/* End .col-auto */}
              <div className="col-auto">&gt;</div>
              {/* End .col-auto */}
              <div className="col-auto">
                <div className="text-dark-1">
                  {place}
                </div>
              </div>
              {/* End .col-auto */}
            </div>
            {/* End .row */}
          </div>
          {/* End .col-auto */}

          {/* <div className="col-auto">
            <a href="#" className="text-14 text-blue-1 underline">
              All Hotel in London
            </a>
          </div> */}
          {/* End col-auto */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default TopBreadCrumb;
