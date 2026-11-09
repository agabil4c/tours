import dynamic from "next/dynamic";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ModalVideo from "react-modal-video";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import toursData, { kenyaSafaris, rwandaSafaris, ugandaSafaris, EASafaris } from "../../../data/tours";
import Seo, { stripHtml } from "../../../components/common/Seo";
import DefaultHeader from "../../../components/header/default-header";
import Overview from "../../../components/tour-single/Overview";
import TourSnapShot from "../../../components/tour-single/TourSnapShot";
import TopBreadCrumb from "../../../components/tour-single/TopBreadCrumb";
import SidebarRight from "../../../components/tour-single/SidebarRight";
import ReviewProgress2 from "../../../components/tour-single/guest-reviews/ReviewProgress2";
import DetailsReview2 from "../../../components/tour-single/guest-reviews/DetailsReview2";
import ReplyForm from "../../../components/tour-single/ReplyForm";
import ReplyFormReview2 from "../../../components/tour-single/ReplyFormReview2";
import CallToActions from "../../../components/common/CallToActions";
import DefaultFooter from "../../../components/footer/default";
import Tours from "../../../components/tours/Tours";
import Faq from "../../../components/faq/Faq";
import Link from "next/link";
import Itinerary from "../../../components/tour-single/itinerary";
import ImportantInfo from "../../../components/tour-single/ImportantInfo";
import Image from "next/image";
import Header1 from "../../../components/header/header-11";

const TourSingleV1Dynamic = ({ tour, tourName, SafariName }) => {
  const [isOpen, setOpen] = useState(false);

  if (!tour) return <h1>Not Found</h1>;

  const canonicalCategory =
    (tourName || "").toLowerCase() === "east africa-safaris"
      ? "east-africa-safaris"
      : (tourName || "uganda-safaris").toLowerCase();
  const safariSlug =
    SafariName || tour?.title?.toLowerCase().replace(/\s+/g, "-");
  const canonicalUrl = `https://www.riverwidesafaris.com/safaris/${canonicalCategory}/${safariSlug}`;
  const cleanDesc =
    stripHtml(tour?.description || "").slice(0, 160) ||
    `Book the ${tour?.title} in ${tour?.location} with Riverwide Trekkers Safaris. Includes guided 4x4 safari transport, accommodation, and wildlife experiences.`;
  const primaryImage = tour?.slideImg?.[0] || "/img/tours/bwindi.jpg";
  const seoKeywords = [
    tour?.title,
    tour?.location,
    `${tour?.location} safari`,
    canonicalCategory.replace(/-/g, " "),
    ...(Array.isArray(tour?.higlights) ? tour.higlights : []),
    "Riverwide Trekkers Safaris",
  ]
    .filter(Boolean)
    .join(", ");

  const tourStructuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour?.title,
    description: stripHtml(tour?.description || cleanDesc),
    image: (tour?.slideImg || []).map((img) =>
      img.startsWith("http") ? img : `https://www.riverwidesafaris.com${img}`
    ),
    url: canonicalUrl,
    touristType: ["Safari Travelers", "Wildlife Enthusiasts", "Adventure Travelers"],
    provider: {
      "@type": "TravelAgency",
      name: "Riverwide Trekkers Safaris",
      url: "https://www.riverwidesafaris.com",
    },
    ...(Array.isArray(tour?.itinerary) && tour.itinerary.length > 0
      ? {
          itinerary: {
            "@type": "ItemList",
            numberOfItems: tour.itinerary.length,
            itemListElement: tour.itinerary.map((step, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              item: {
                "@type": "TouristAttraction",
                name: step.title,
                description: stripHtml(step.desc),
              },
            })),
          },
        }
      : {}),
  };

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
      />

      <Seo
        pageTitle={`${tour?.title} | ${tour?.location || "East Africa Safari"}`}
        description={cleanDesc}
        keywords={seoKeywords}
        url={canonicalUrl}
        image={primaryImage}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Safaris", url: "/safaris" },
          {
            name: canonicalCategory
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" "),
            url: `/safaris/${canonicalCategory}`,
          },
          { name: tour?.title, url: `/safaris/${canonicalCategory}/${safariSlug}` },
        ]}
        structuredData={tourStructuredData}
      />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <TopBreadCrumb tour={tour} tourName={tourName} />
      {/* End top breadcrumb */}

      <section className="pt-40">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <h1 className="text-30 fw-600">{tour?.title}</h1>
              <div className="row x-gap-20 y-gap-20 items-center pt-10">
                <div className="col-auto">
                  <div className="row x-gap-10 items-center">
                    <div className="col-auto">
                      <div className="d-flex x-gap-5 items-center">
                        <i className="icon-placeholder text-16 text-light-1"></i>
                        <div className="text-15 text-light-1">
                          {tour?.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-40 js-pin-container">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-8">
              <div className="relative d-flex justify-center overflow-hidden js-section-slider">
                <Swiper
                  modules={[Navigation]}
                  loop={true}
                  navigation={{
                    nextEl: ".js-img-next",
                    prevEl: ".js-img-prev",
                  }}
                >
                  {tour?.slideImg?.map((slide, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        width={451}
                        height={450}
                        priority
                        src={slide}
                        alt={`${tour?.title || "Safari Tour"} - ${tour?.location || "East Africa"}`}
                        style={{ height: "501px" }}
                        className="rounded-4 col-12 cover object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Gallery>
                  {tour?.slideImg?.map((slide, i) => (
                    <div
                      className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end z-2 bottom-0 end-0"
                      key={i}
                    >
                      <Item
                        original={slide}
                        thumbnail={slide}
                        width={451}
                        height={450}
                      >
                        {({ ref, open }) => (
                          <div
                            className="button -blue-1 px-24 py-15 bg-white text-dark-1 js-gallery"
                            ref={ref}
                            onClick={open}
                            role="button"
                          >
                            See All Photos
                          </div>
                        )}
                      </Item>
                    </div>
                  ))}
                </Gallery>

                <div className="absolute h-full col-11">
                  <button className="section-slider-nav -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-img-prev">
                    <i className="icon icon-chevron-left text-12" />
                  </button>
                  <button className="section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-img-next">
                    <i className="icon icon-chevron-right text-12" />
                  </button>
                </div>
              </div>
              
              {tour?.description?.trim() && (
                <div>
                  <div className="border-top-light mt-40 mb-40"></div>
                  <Overview tour={tour} />
                </div>
              )}

              {tour?.inclusions?.length > 0 && (
                <div className="border-top-light mt-40 pt-40">
                  <h3 className="text-22 fw-500 mb-20">Important information</h3>
                  <ImportantInfo tour={tour} />
                </div>
              )}

              <div className="border-top-light mt-40 pt-40">
                <h3 className="text-22 fw-500 mb-20">Itinerary</h3>
                <Itinerary tour={tour} />
              </div>
            </div>

            <div className="col-xl-4" style={{ position: 'sticky', top: '100px', height: 'fit-content', zIndex: 10 }}>
              <SidebarRight tour={tour} />
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-lg layout-pb-lg mt-50 border-top-light">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
              </div>
            </div>

            <div className="col-auto">
              <Link
                href={`/safaris/${canonicalCategory}`}
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours />
          </div>
        </div>
      </section>

      <CallToActions />

      <DefaultFooter />
    </>
  );
};

export async function getStaticPaths() {
  const locales = ['en', 'fr', 'de'];
  const tourData = {
    'kenya-safaris': kenyaSafaris,
    'uganda-safaris': ugandaSafaris,
    'rwanda-safaris': rwandaSafaris,
    'east-africa-safaris': EASafaris,
    'east africa-safaris': EASafaris,
  };

  const paths = [];

  for (const locale of locales) {
    for (const [tourKey, safaris] of Object.entries(tourData)) {
      for (const safari of safaris) {
        const slug = safari.title.toLowerCase().replace(/\s+/g, '-');
        paths.push({
          params: {
            tourName: tourKey,
            SafariName: slug,
          },
          locale,
        });
      }
    }
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const { tourName, SafariName } = params;

  let data = [];
  switch (tourName.toLowerCase()) {
    case 'kenya-safaris':
      data = kenyaSafaris;
      break;
    case 'uganda-safaris':
      data = ugandaSafaris;
      break;
    case 'rwanda-safaris':
      data = rwandaSafaris;
      break;
    case 'east-africa-safaris':
    case 'east africa-safaris':
      data = EASafaris;
      break;
    default:
      data = [];
      break;
  }

  const tour = data.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, '-') === SafariName
  );

  if (!tour) {
    return { notFound: true };
  }

  return {
    props: {
      tour,
      tourName,
      SafariName,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default TourSingleV1Dynamic;
