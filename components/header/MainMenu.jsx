import Link from "next/link";
import { useTranslation } from 'next-i18next';

import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  PackagesItems,
  destinationsItems,
  activityItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const MainMenu = ({ style = "" }) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        
        <li className={router.pathname === "/" ? "current" : ""}>
          <Link href="/">{t('home')}</Link>
        </li>
        
        <li
          className={`${
            isActiveParentChaild(destinationsItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">{t('destinations')}</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {destinationsItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(`/destination/${menu.name}`, router.asPath) ? "current" : ""
                }
              >
                <Link href={`/destination/${menu.name}`}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        
        
        <li
          className={`${
            isActiveParentChaild(PackagesItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">{t('safaris')}</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {PackagesItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(`/tour/tour-list-v2/${menu.name.replace(/\s+/g, '-').toLowerCase()}`, router.asPath) ? "current" : ""
                }
              >
                <Link href={`/tour/tour-list-v2/${menu.name.replace(/\s+/g, '-').toLowerCase()}`}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        
        <li className={router.pathname === "/others-pages/about" ? "current" : ""}>
          <Link href="/others-pages/about">{t('aboutUs')}</Link>
        </li>
        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">{t('contact')}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
