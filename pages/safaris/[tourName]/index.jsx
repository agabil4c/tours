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

const SAFARI_CATEGORY_META = {
  "uganda-safaris": {
    country: "Uganda",
    title: "Uganda Safari Packages & Gorilla Trekking Tours",
    description:
      "Explore top-rated Uganda safari packages including Bwindi mountain gorilla trekking, Kibale chimpanzee tracking, Murchison Falls boat cruises, Queen Elizabeth tree-climbing lions, and Kidepo Valley wilderness tours.",
    keywords:
      "Uganda safaris, Uganda gorilla trekking packages, Bwindi gorilla tour, Murchison Falls safari, Queen Elizabeth National Park tour, Kibale chimpanzee safari, Kidepo Valley tour, Riverwide Trekkers Safaris",
  },
  "kenya-safaris": {
    country: "Kenya",
    title: "Kenya Wildlife Safari Packages & Masai Mara Tours",
    description:
      "Book unforgettable Kenya wildlife safaris covering the Masai Mara Great Migration, Amboseli elephant herds, Lake Nakuru, Samburu,Tsavo, and Diani Beach holidays with Riverwide Trekkers Safaris.",
    keywords:
      "Kenya safaris, Masai Mara safari packages, Amboseli National Park tour, Lake Nakuru safari, Diani beach and bush safari, Big Five safari Kenya, Riverwide Trekkers Safaris",
  },
  "rwanda-safaris": {
    country: "Rwanda",
    title: "Rwanda Gorilla Trekking & Wildlife Safari Packages",
    description:
      "Discover Rwanda gorilla trekking safaris in Volcanoes National Park, chimpanzee tracking in Nyungwe Forest, Big Five game drives in Akagera, and cross-border Kigali to Bwindi gorilla tours.",
    keywords:
      "Rwanda safaris, Rwanda gorilla trekking packages, Volcanoes National Park tour, Kigali to Bwindi gorilla safari, Nyungwe chimpanzee tour, Akagera safari, Riverwide Trekkers Safaris",
  },
  "east-africa-safaris": {
    country: "East Africa",
    title: "East Africa Combined Safari Packages (Uganda, Rwanda, Kenya & Tanzania)",
    description:
      "Experience multi-country East Africa safaris combining Uganda & Rwanda gorilla trekking with Kenya Masai Mara, Serengeti, Ngorongoro Crater, and Mount Kilimanjaro climbing.",
    keywords:
      "East Africa safaris, combined Uganda Rwanda Kenya safari, Masai Mara and Gorilla safari, Kilimanjaro and safari packages, Tanzania wildlife safari, Riverwide Trekkers Safaris",
  },
};

const Safari = ({ tourName: propTourName }) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const rawTourName = propTourName || router.query.tourName || "east-africa-safaris";
  const normalizedKey =
    rawTourName.toLowerCase() === "east africa-safaris"
      ? "east-africa-safaris"
      : rawTourName.toLowerCase();
  const meta = SAFARI_CATEGORY_META[normalizedKey] || {
    country: rawTourName.split("-")[0] || "East Africa",
    title: "East Africa Safari Packages & Wildlife Tours",
    description:
      "Explore tailor-made safari packages across Uganda, Kenya, Rwanda, and Tanzania with Riverwide Trekkers Safaris.",
    keywords: "East Africa safaris, Uganda safaris, Kenya safaris, Rwanda gorilla trekking",
  };
  const countryName = meta.country;

  return (
    <>
      <Seo
        pageTitle={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        url={`https://www.riverwidesafaris.com/safaris/${normalizedKey}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Safaris", url: "/safaris" },
          { name: `${countryName} Safaris`, url: `/safaris/${normalizedKey}` },
        ]}
      />
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
                <TourProperties tours = {normalizedKey} />
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
  const items = [
    'uganda-safaris',
    'kenya-safaris',
    'rwanda-safaris',
    'east-africa-safaris',
    'east africa-safaris',
  ];
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

export async function getStaticProps({ params, locale }) {
  return {
    props: {
      tourName: params?.tourName || "east-africa-safaris",
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Safari;
