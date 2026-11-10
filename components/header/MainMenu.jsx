import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { PackagesItems } from "../../data/mainMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const MainMenu = ({ style = "" }) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const isDestinationsActive = router.pathname.startsWith("/destination");
  const isSafarisActive = router.pathname.startsWith("/safaris");

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        {/* Home */}
        <li className={router.pathname === "/" ? "current" : ""}>
          <Link href="/">{t("home")}</Link>
        </li>

        {/* Destinations Mega Menu */}
        <li
          className={`menu-item-has-children -has-mega-menu ${isDestinationsActive ? "current" : ""
            }`}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
            <span className="mr-10">{t("destinations")}</span>
            <i className="icon icon-chevron-sm-down text-10" />
          </a>

          <div
            className="mega bg-white rounded-16 py-28 px-28"
            style={{
              width: "820px",
              right: "-160px",
              left: "auto",
              backgroundColor: "#ffffff",
            }}
          >
            {/* Mega Menu Top Header */}
            <div className="d-flex items-center justify-between pb-15 mb-20 border-bottom-light">
              <div>
                <div
                  className="text-11 fw-700 uppercase"
                  style={{
                    letterSpacing: "1.5px",
                    color: "var(--color-blue-1)",
                  }}
                >
                  Where To Go
                </div>
                <div className="text-16 fw-600 text-dark-1">
                  Iconic East Africa Safari Destinations
                </div>
              </div>
              <Link
                href="/safaris/east-africa-safaris"
                className="text-13 fw-600"
                style={{ color: "var(--color-blue-1)" }}
              >
                Multi-Country Tours →
              </Link>
            </div>

            <div className="row x-gap-30 y-gap-20">
              {/* Column 1: Uganda */}
              <div className="col-3 text-left">
                <Link
                  href="/destination/Uganda"
                  className="d-inline-block text-14 fw-700 uppercase mb-10"
                  style={{
                    color: "var(--color-blue-1)",
                    letterSpacing: "0.8px",
                  }}
                >
                  Uganda
                </Link>
                <div className="d-flex flex-column y-gap-10">
                  <Link
                    href="/destination/uganda/bwindi-impenetrable-n.p"
                    className="text-14 hover-emerald"
                  >
                    Bwindi Impenetrable N.P.
                  </Link>
                  <Link
                    href="/destination/uganda/murchison-falls-n.p"
                    className="text-14 hover-emerald"
                  >
                    Murchison Falls N.P.
                  </Link>
                  <Link
                    href="/destination/uganda/queen-elizabeth-n.p"
                    className="text-14 hover-emerald"
                  >
                    Queen Elizabeth N.P.
                  </Link>
                  <Link
                    href="/destination/uganda/kidepo-valley-n.p"
                    className="text-14 hover-emerald"
                  >
                    Kidepo Valley N.P.
                  </Link>
                  <Link
                    href="/destination/Uganda"
                    className="text-13 fw-600 mt-5 d-inline-block"
                    style={{ color: "var(--color-blue-1)" }}
                  >
                    Explore Uganda →
                  </Link>
                </div>
              </div>

              {/* Column 2: Rwanda */}
              <div className="col-3 text-left">
                <Link
                  href="/destination/Rwanda"
                  className="d-inline-block text-14 fw-700 uppercase mb-10"
                  style={{
                    color: "var(--color-blue-1)",
                    letterSpacing: "0.8px",
                  }}
                >
                  Rwanda
                </Link>
                <div className="d-flex flex-column y-gap-10">
                  <Link
                    href="/destination/rwanda/volcanoes-n.p"
                    className="text-14 hover-emerald"
                  >
                    Volcanoes National Park
                  </Link>
                  <Link
                    href="/destination/rwanda/nyungwe-forest-n.p"
                    className="text-14 hover-emerald"
                  >
                    Nyungwe Forest N.P.
                  </Link>
                  <Link
                    href="/destination/rwanda/akagera-n.p"
                    className="text-14 hover-emerald"
                  >
                    Akagera National Park
                  </Link>
                  <Link
                    href="/destination/rwanda/lake-kivu"
                    className="text-14 hover-emerald"
                  >
                    Lake Kivu
                  </Link>
                  <Link
                    href="/destination/Rwanda"
                    className="text-13 fw-600 mt-5 d-inline-block"
                    style={{ color: "var(--color-blue-1)" }}
                  >
                    Explore Rwanda →
                  </Link>
                </div>
              </div>

              {/* Column 3: Kenya */}
              <div className="col-3 text-left">
                <Link
                  href="/destination/Kenya"
                  className="d-inline-block text-14 fw-700 uppercase mb-10"
                  style={{
                    color: "var(--color-blue-1)",
                    letterSpacing: "0.8px",
                  }}
                >
                  Kenya
                </Link>
                <div className="d-flex flex-column y-gap-10">
                  <Link
                    href="/destination/kenya/maasai-mara-national-reserve"
                    className="text-14 hover-emerald"
                  >
                    Maasai Mara Reserve
                  </Link>
                  <Link
                    href="/destination/kenya/amboseli-n.p"
                    className="text-14 hover-emerald"
                  >
                    Amboseli National Park
                  </Link>
                  <Link
                    href="/destination/kenya/diani-beach"
                    className="text-14 hover-emerald"
                  >
                    Diani Beach
                  </Link>
                  <Link
                    href="/destination/kenya/samburu-national-reserve"
                    className="text-14 hover-emerald"
                  >
                    Samburu Reserve
                  </Link>
                  <Link
                    href="/destination/Kenya"
                    className="text-13 fw-600 mt-5 d-inline-block"
                    style={{ color: "var(--color-blue-1)" }}
                  >
                    Explore Kenya →
                  </Link>
                </div>
              </div>

              {/* Column 4: Featured Gorilla Trekking Card */}
              <div className="col-3">
                <div
                  className="rounded-16 py-20 px-20 text-left h-full d-flex flex-column justify-between relative overflow-hidden"
                  style={{ minHeight: "200px" }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 1,
                    }}
                  >
                    <Image
                      src="/img/tours/bwindi.jpg"
                      alt="Gorilla Trekking"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-16"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(180deg, rgba(11, 28, 51, 0.35) 0%, rgba(11, 28, 51, 0.9) 100%)",
                      }}
                    />
                  </div>

                  <div className="relative" style={{ zIndex: 2 }}>
                    <span
                      className="text-10 uppercase fw-700 px-10 py-4 rounded-100 d-inline-block"
                      style={{
                        backgroundColor: "var(--color-blue-1)",
                        color: "#ffffff",
                      }}
                    >
                      Signature Trek
                    </span>
                    <h4 className="text-15 fw-700 text-white mt-10 lh-13">
                      Gorilla Trekking Safaris
                    </h4>
                    <p
                      className="text-12 text-white mt-5 lh-14"
                      style={{ opacity: 0.9 }}
                    >
                      Unforgettable primate encounters in Bwindi &amp;
                      Volcanoes.
                    </p>
                  </div>

                  {/* <Link
                    href="/safaris/gorilla-treks"
                    className="text-12 fw-700 relative mt-15 d-inline-block"
                    style={{ zIndex: 2, color: "#8ec5ff" }}
                  >
                    View Gorilla Treks →
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* Safaris Dropdown */}
        <li
          className={`menu-item-has-children ${isSafarisActive ? "current" : ""
            }`}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
            <span className="mr-10">{t("safaris")}</span>
            <i className="icon icon-chevron-sm-down text-10" />
          </a>
          <ul className="subnav" style={{ backgroundColor: "#ffffff" }}>
            {PackagesItems.map((menu, i) => {
              const menuPath =
                menu.routePath ||
                `/safaris/${menu.name.replace(/\s+/g, "-").toLowerCase()}`;
              const active = isActiveLink(menuPath, router.asPath);
              return (
                <li key={i} className={active ? "current" : ""}>
                  <Link href={menuPath}>
                    <div>
                      <div
                        className="text-14 fw-600"
                        style={{
                          color: active
                            ? "var(--color-blue-1)"
                            : "var(--color-dark-1)",
                        }}
                      >
                        {menu.name}
                      </div>
                      {menu.subtitle && (
                        <div className="text-12 text-light-1 mt-4">
                          {menu.subtitle}
                        </div>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
            {/* <li className="border-top-light mt-10 pt-10">
              <Link
                href="/safaris"
                className="text-13 fw-600"
                style={{ color: "var(--color-blue-1)" }}
              >
                Browse All Safari Packages →
              </Link>
            </li> */}
          </ul>
        </li>

        {/* About Us */}
        <li className={router.pathname === "/about-us" ? "current" : ""}>
          <Link href="/about-us">{t("aboutUs")}</Link>
        </li>

        {/* Contact */}
        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">{t("contact")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
