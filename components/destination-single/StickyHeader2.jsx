import { useEffect, useState } from "react";

const StickyHeader2 = ({ place }) => {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={`singleMenu js-singleMenu ${header ? "-is-active" : ""}`}>
      <div className="col-12">       
        <div className="singleMenu__content">
          <div className="container">
            <div className="row y-gap-20 justify-between items-center">
              <div className="col-auto">
                <div className="singleMenu__links row x-gap-30 y-gap-10">
                  <div className="col-auto">
                    <a href="#overview">Overview</a>
                  </div>
                  <div className="col-auto">
                    <a href="#attractions">Attractions</a>
                  </div>
                  <div className="col-auto">
                    <a href="#transport">How to get there</a>
                  </div>
                  <div className="col-auto">
                    <a href="#facilities">Safaris</a>
                  </div>
                  <div className="col-auto">
                    <a href="#faq">Faq</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader2;
