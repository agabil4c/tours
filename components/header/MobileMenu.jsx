"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  categorieMobileItems,
  destinationsItems,
  PackagesItems,
  activityItems,
} from "../../data/mainMenuData";
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";

const MobileMenu = () => {
  const router = useRouter();

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <img src="/img/general/riverwide_logo.png" alt="brand" style={{width: '150px'}}/>
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <ProSidebarProvider>
        <Sidebar width="400" backgroundColor="#fff">
          <Menu>
            {/* <SubMenu label="Home">
              {homeItems.map((item, i) => (
                <MenuItem
                  key={i}
                  component={
                    <Link
                      href={item.routePath}
                      className={
                        isActiveLink(item.routePath, router.asPath)
                          ? "menu-active-link"
                          : ""
                      }
                    />
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu> */}
            <MenuItem
              component={
                <Link
                  href="/"
                  className={router.pathname === "/" ? "current" : ""}
                />
              }
            >
              Home
            </MenuItem>
            {/* End  All Home Menu */}

            <SubMenu label="Destinations">
              {destinationsItems.map((menu, i) => (
                <MenuItem
                  key={i}
                  component={
                    <Link
                      href={menu.routePath}
                      className={
                        isActiveLink(menu.routePath, router.asPath)
                          ? "menu-active-link"
                          : ""
                      }
                    />
                  }
                >
                  {menu.name}
                </MenuItem>
              ))}
            </SubMenu>
            {/* End  All Categories Menu */}

            <SubMenu label="Safaris">
              {PackagesItems.map((item, i) => (
                <MenuItem
                  key={i}
                  component={
                    <Link
                      href={`/tour/tour-list-v2/${item.name.replace(/\s+/g, '-').toLowerCase()}`}
                      className={
                        isActiveLink(`/tour/tour-list-v2/${item.name.replace(/\s+/g, '-').toLowerCase()}`, router.asPath) ? "current" : ""
                      }
                    />
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu>
            {/* End  All Blog Menu */}

            <SubMenu label="Activities">
              {activityItems.map((item, i) => (
                <MenuItem
                  key={i}
                  component={
                    <Link
                      href={item.routePath}
                      className={
                        isActiveLink(item.routePath, router.asPath)
                          ? "menu-active-link"
                          : ""
                      }
                    />
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu>
            
            <MenuItem
              component={
                <Link
                  href="/others-pages/about"
                  className={
                    router.pathname === "/others-pages/about" ? "menu-active-link" : ""
                  }
                />
              }
            >
              About Us
            </MenuItem>

            <MenuItem
              component={
                <Link
                  href="/contact"
                  className={
                    router.pathname === "/contact" ? "menu-active-link" : ""
                  }
                />
              }
            >
              Contact
            </MenuItem>
            {/* End Contact  Menu */}
          </Menu>
        </Sidebar>
      </ProSidebarProvider>

      {/* <div className="mobile-footer px-20 py-5 border-top-light"></div>

       <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
        <div className="mt-20">
          <Link
            className=" button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white"
            href="/others-pages/login"
          >
            Become An Expert
          </Link>
        </div>
      </div> */}
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
