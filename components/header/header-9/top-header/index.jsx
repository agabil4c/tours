import Link from "next/link";
import CurrenctyMegaMenu from "../../CurrenctyMegaMenu";
import ContactInfo from "./ContactInfo";
import LanguageMegaMenu from "../../LanguageMegaMenu";

const HeaderBanner = () => {
  return (
    <section className="header-banner py-5 bg-dark-3">
      <div className="container">
        <div className="row items-center justify-between">
          <div className="col-auto">
            <ContactInfo />
            {/* End .row */}
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="row x-gap-15 items-center jusify-between">
              
              {/* End .col-auto */}
              <div className="col-auto md:d-none">
                {/* <Link href="/others-pages/login" className="text-12 text-white">
                  Become An Expert
                </Link> */}
                <LanguageMegaMenu textClass="text-white" />
              </div>
              
              {/* End .col-auto */}
            </div>
            {/* End .row */}
          </div>
          {/* End .col-auto */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default HeaderBanner;
