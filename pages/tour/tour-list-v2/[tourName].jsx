import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import DefaultFooter from "../../../components/footer/default";
import TopHeaderFilter from "../../../components/tour-list/tour-list-v2/TopHeaderFilter";
import TourProperties from "../../../components/tour-list/tour-list-v2/TourProperties";
import Pagination from "../../../components/tour-list/common/Pagination";
import Sidebar from "../../../components/tour-list/tour-list-v2/Sidebar";
import { useRouter } from "next/router";
import Header1 from "../../../components/header/header-11";
import DefaultHeader from "../../../components/header/default-header";

const Safari = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { tourName } = router.query;  // Extract the tourName from the URL
  const countryName = tourName ? tourName.split('-')[0] : '';
  return (
    <>
      <Seo pageTitle={`${countryName.charAt(0).toUpperCase() + countryName.slice(1)} Safaris`}/>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            
            {/* End col */}

            <div className="col-xl-12 ">
              <TopHeaderFilter country = {countryName}/>
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30 item_gap-x30">
                <TourProperties tours = {tourName} />
              </div>
              {/* End .row */}
              {/* <Pagination /> */}
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export async function getStaticPaths() {
  const items = ['uganda-safaris', 'kenya-safaris', 'rwanda-safaris'];
  const locales = ['en', 'de', 'fr'];
  const paths = [];

  for (const locale of locales) {
    for (const item of items) {
      paths.push({
        params: { tourName: item },
        locale,
      });
    }
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Safari;
