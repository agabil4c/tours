import Link from "next/link";
import { useTranslation } from 'next-i18next';
import Image from "next/image";
import { PackagesItems } from "../../data/mainMenuData";
import { isActiveLink, isActiveParentChaild } from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const MainMenu = ({ style = "" }) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  // Determine active parent state for the Destinations mega-menu
  const isDestinationsActive = router.pathname.startsWith("/destination");

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>

        {/* Home */}
        <li className={router.pathname === "/" ? "current" : ""}>
          <Link href="/">{t('home')}</Link>
        </li>

        {/* Destinations Mega Menu */}
        <li className={`menu-item-has-children -has-mega-menu ${isDestinationsActive ? "current" : ""}`}>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <span className="mr-10">{t('destinations')}</span>
            <i className="icon icon-chevron-sm-down text-10" />
          </a>

          {/* Upgraded Mega Menu: Expanded width to 850px for a visual promo card */}
          <div className="mega bg-white rounded-12 shadow-4 py-30 px-30" style={{ width: '850px', left: '-300px' }}>
            <div className="row x-gap-30 y-gap-30">

              {/* Column 1: Uganda */}
              <div className="col-3 text-left">
                <h5 className="text-14 fw-700 text-emerald uppercase mb-15 pb-5 border-bottom-light" style={{ color: 'var(--color-blue-1)', letterSpacing: '1px' }}>
                  Uganda
                </h5>
                <div className="d-flex flex-column y-gap-12 pt-5">
                  {/* Fixed leading slash here */}
                  <Link href="/destination/uganda/bwindi-impenetrable-n.p" className="text-13 text-light-1 hover-emerald">
                    Bwindi Impenetrable Forest
                  </Link>
                  <Link href="/destination/uganda/murchison-falls-n.p" className="text-13 text-light-1 hover-emerald">
                    Murchison Falls
                  </Link>
                  <Link href="/destination/uganda/queen-elizabeth-n.p" className="text-13 text-light-1 hover-emerald">
                    Queen Elizabeth N.P.
                  </Link>
                  <Link href="/destination/Uganda" className="text-12 fw-700 mt-10 d-inline-block transition-all" style={{ color: 'var(--color-yellow-1)' }}>
                    See all Uganda Destinations →
                  </Link>
                </div>
              </div>

              {/* Column 2: Rwanda */}
              <div className="col-3 text-left">
                <h5 className="text-14 fw-700 text-emerald uppercase mb-15 pb-5 border-bottom-light" style={{ color: 'var(--color-blue-1)', letterSpacing: '1px' }}>
                  Rwanda
                </h5>
                <div className="d-flex flex-column y-gap-12 pt-5">
                  <Link href="/destination/rwanda/volcanoes-n.p" className="text-13 text-light-1 hover-emerald">
                    Volcanoes National Park
                  </Link>
                  <Link href="/destination/rwanda/nyungwe-forest-n.p" className="text-13 text-light-1 hover-emerald">
                    Nyungwe Forest
                  </Link>
                  <Link href="/destination/Rwanda" className="text-12 fw-700 mt-10 d-inline-block transition-all" style={{ color: 'var(--color-yellow-1)' }}>
                    See all Rwanda Destinations →
                  </Link>
                </div>
              </div>

              {/* Column 3: Kenya */}
              <div className="col-3 text-left">
                <h5 className="text-14 fw-700 text-emerald uppercase mb-15 pb-5 border-bottom-light" style={{ color: 'var(--color-blue-1)', letterSpacing: '1px' }}>
                  Kenya
                </h5>
                <div className="d-flex flex-column y-gap-12 pt-5">
                  <Link href="/destination/kenya/maasai-mara-national-reserve" className="text-13 text-light-1 hover-emerald">
                    Maasai Mara
                  </Link>
                  <Link href="/destination/kenya/amboseli-n.p" className="text-13 text-light-1 hover-emerald">
                    Amboseli N.P.
                  </Link>
                  <Link href="/destination/Kenya" className="text-12 fw-700 mt-10 d-inline-block transition-all" style={{ color: 'var(--color-yellow-1)' }}>
                    See all Kenya Destinations →
                  </Link>
                </div>
              </div>

              {/* Column 4: Immersive Gorilla Trekking Promo Card */}
              <div className="col-3">
                <div className="bg-light-2 rounded-8 p-15 text-left h-100 d-flex flex-column justify-between relative overflow-hidden" style={{ minHeight: '180px' }}>
                  {/* <div className="relative z-2">
                    <span className="text-10 uppercase fw-600 px-8 py-4 bg-emerald text-white rounded-4">Must See</span>
                    <h4 className="text-14 fw-700 text-white mt-10 shadow-text">Gorilla Trekking Safaris</h4>
                    <p className="text-11 text-white opacity-80 mt-5 leading-sm">Experience life-changing encounters in Bwindi & Volcanoes.</p>
                  </div>
                  <Link href="/safaris/gorilla-trekking" className="text-11 fw-700 text-white underline z-2 mt-15">
                    View Gorilla Safaris
                  </Link> */}
                  {/* Backdrop gorilla overlay to give the menu visual depth */}
                  <div className="absolute-full-cover" style={{ zIndex: 1 }}>
                    <div className="absolute-full-cover bg-dark-1 opacity-40" /> {/* Dimming layer */}
                    <Image
                      src="/img/tours/bwindi.jpg" // Ensure you add a high-quality small landscape image here
                      alt="Gorilla"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-8"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </li>

        {/* Safaris Dropdown */}
        <li className={`${isActiveParentChaild(PackagesItems, router.asPath) ? "current" : ""} menu-item-has-children`}>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <span className="mr-10">{t('safaris')}</span>
            <i className="icon icon-chevron-sm-down text-10" />
          </a>
          <ul className="subnav">
            {PackagesItems.map((menu, i) => {
              const menuPath = `/safaris/${menu.name.replace(/\s+/g, '-').toLowerCase()}`;
              return (
                <li key={i} className={isActiveLink(menuPath, router.asPath) ? "current" : ""}>
                  <Link href={menuPath}>{menu.name}</Link>
                </li>
              );
            })}
          </ul>
        </li>

        {/* About Us */}
        <li className={router.pathname === "/about-us" ? "current" : ""}>
          <Link href="/about-us">{t('aboutUs')}</Link>
        </li>

        {/* Contact */}
        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">{t('contact')}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;