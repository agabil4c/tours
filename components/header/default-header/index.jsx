import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import MainMenu from "../MainMenu";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

// Keep CurrenctyMegaMenu and LanguageMegaMenu if needed elsewhere, 
// or import them here if they are integrated into this header layout.

const MobileMenu = dynamic(() => import("../MobileMenu"), { ssr: false });

const Header1 = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [navbar, setNavbar] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const isHome = router.pathname === "/";

  useEffect(() => {
    // Prevent scroll logic from firing on route changes if window isn't defined
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state triggers slightly earlier for UI responsiveness
      if (currentScrollY > 10) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }

      // Auto-hide on scroll down, reveal on scroll up
      if (currentScrollY > 150) {
        const scrollDelta = currentScrollY - lastScrollY.current;
        // Avoid jitter by checking for a minimum threshold scroll (e.g., 8px)
        if (Math.abs(scrollDelta) > 8) {
          if (scrollDelta > 0) {
            setShowHeader(false); // scrolling down -> hide
          } else {
            setShowHeader(true); // scrolling up -> reveal
          }
        }
      } else {
        // Always show the header at the top
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = navbar;

  // 1. Force the white logo logic ONLY on the homepage. 
  // On individual pages, we want the colored logo to always show for visibility.
  const isWhiteLogo = isHome && !isScrolled;

  // 2. Adjust text styles dynamically
  const menuStyle = isHome && !isScrolled ? "text-white" : "text-emerald";

  return (
    <>
      <header
        className={`header ${isHome && !isScrolled ? 'bg-transparent' : 'bg-white'} ${isScrolled ? 'is-sticky' : ''}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          // Shrinks slightly when scrolled OR when on non-homepages
          height: isScrolled || !isHome ? "72px" : "110px",
          display: "flex",
          alignItems: "center",
          zIndex: 1000,
          transition: "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), height 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
          transform: showHeader ? "translateY(0)" : "translateY(-100%)",
          backgroundColor: isHome && !isScrolled ? "transparent" : "#ffffff",
          // Soft shadow is applied only when page is scrolled OR on individual pages
          boxShadow: isHome && !isScrolled ? "none" : "0 4px 20px rgba(0, 0, 0, 0.04)"
        }}
      >
        <div className="header__container w-100 px-30 sm:px-20">
          <div className="row justify-between items-center w-100">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-50" style={{ display: 'block' }}>
                  <Image
                    src="/img/general/riverwide_logo.png"
                    alt="Riverwide Safaris Logo"
                    width={200}
                    height={60}
                    className="transition-all duration-300"
                    priority // Ensures the logo loads immediately (good for SEO/LCP)
                    style={{
                      // Turns black logo into white if conditions match
                      filter: isWhiteLogo ? 'brightness(0) invert(1)' : 'none',
                      // Scale down logo dynamically when header shrinks
                      transform: isScrolled || !isHome ? 'scale(0.85)' : 'scale(1)',
                      transformOrigin: 'left center',
                      objectFit: 'contain'
                    }}
                  />
                </Link>
              </div>
            </div>

            <div className="col-auto pr-60 xl:pr-100">
              <div className="d-flex items-center">
                <nav className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style={menuStyle} />
                  </div>
                </nav>

                {/* Mobile hamburger icon wrapper */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-20" style={{ color: isHome && !isScrolled ? '#ffffff' : 'var(--color-blue-1)' }}>
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-label="Toggle Navigation Menu"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header1;