import Image from "next/image";
import AppButton from "./AppButton";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";
import Social from "../../common/social/Social";

const index = () => {
  return (
    <footer className="footer -type-1">
      <div className="container">
        <div className="pt-60 pb-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-2 col-lg-3 col-sm-6">
              
              <Image src="/img/general/riverwide_logo.png"  alt="image" />
              <div className="mt-60">
                <h5 className="text-16 fw-500 mb-10">
                  Follow us on social media
                </h5>
                <div className="d-flex x-gap-20 items-center">
                  <Social />
                </div>
              </div>
            </div>
            {/* End col */}

            <div className="col-xl-2 col-lg-3 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Contact Us</h5>
              <ContactInfo />
            </div>

            <FooterContent />
          </div>
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-light">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
