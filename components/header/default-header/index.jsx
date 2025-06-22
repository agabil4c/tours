import Link from "next/link";
import { useEffect, useState } from "react";
import MainMenu from "../MainMenu";
import CurrenctyMegaMenu from "../CurrenctyMegaMenu";
import LanguageMegaMenu from "../LanguageMegaMenu";

import MobileMenu from "../MobileMenu";
import Image from "next/image";

const Header1 = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <header className={`header bg-white ${navbar ? "is-sticky" : ""}`}>
        <div className="header__container px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-50" >
                  <Image src="/img/general/riverwide_logo.png"  alt="logo icon" width={250} height={300}/>
                  <Image src="/img/general/riverwide_logo.png"  alt="logo icon" width={250} height={300}/>
                </Link>
                {/* End logo */}
              </div>
            </div>
            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-dark-1" />
                  </div>
                </div>
                
                <div className="d-none xl:d-flex x-gap-20 items-center pl-20 text-white">
                  {/* <div>
                    <Link
                      href="/others-pages/login"
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div> */}
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
    </>
  );
};

export default Header1;
