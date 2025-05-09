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
import toursData, { kenyaSafaris, rwandaSafaris, ugandaSafaris, EASafaris } from "../../../../data/tours";
import Seo from "../../../../components/common/Seo";
import DefaultHeader from "../../../../components/header/default-header";
import Overview from "../../../../components/tour-single/Overview";
import TourSnapShot from "../../../../components/tour-single/TourSnapShot";
import TopBreadCrumb from "../../../../components/tour-single/TopBreadCrumb";
import SidebarRight from "../../../../components/tour-single/SidebarRight";
import ReviewProgress2 from "../../../../components/tour-single/guest-reviews/ReviewProgress2";
import DetailsReview2 from "../../../../components/tour-single/guest-reviews/DetailsReview2";
import ReplyForm from "../../../../components/tour-single/ReplyForm";
import ReplyFormReview2 from "../../../../components/tour-single/ReplyFormReview2";
import CallToActions from "../../../../components/common/CallToActions";
import DefaultFooter from "../../../../components/footer/default";
import Tours from "../../../../components/tours/Tours";
import Faq from "../../../../components/faq/Faq";
import Link from "next/link";
import Itinerary from "../../../../components/tour-single/itinerary";
import ImportantInfo from "../../../../components/tour-single/ImportantInfo";
import Image from "next/image";
import Header1 from "../../../../components/header/header-11";

const TourSingleV1Dynamic = ({ tour }) => {
  const [isOpen, setOpen] = useState(false);
  //const router = useRouter();
  //const {SafariName} = router.query;

  if (!tour) return <h1>Not Found</h1>;

  // useEffect(() => {
  //   let data;
  //   if (tourName) {
  //     // Handle the tour data based on the tourName
      
  //     switch (tourName.toLowerCase()) {
  //       case 'kenya-safaris':
  //         data = kenyaSafaris;
  //         break;
  //       case 'uganda-safaris':
  //         data = ugandaSafaris;
  //         break;
  //       case 'rwanda-safaris':
  //         data = rwandaSafaris;
  //         break;
  //       case 'east africa-safaris':
  //         data = EASafaris;
  //         break;
  //       default:
  //         data = []; // Or handle a fallback
  //         break;
  //     }
  //   }
  //   if (!SafariName) <h1>Loading...</h1>;

  //   else setTour(data.find((item) => item.title.toLowerCase().replace(/\s+/g, "-") === SafariName));

  //   return () => {};
  // }, [tourName, SafariName]);

  return (
    
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
      />

      <Seo pageTitle="Tour Single" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      {/* <TopBreadCrumb /> */}
      {/* End top breadcrumb */}

      <section className="pt-40">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <h1 className="text-30 fw-600">{tour?.title}</h1>
              <div className="row x-gap-20 y-gap-20 items-center pt-10">
                {/* <div className="col-auto">
                  <div className="d-flex items-center">
                    <div className="d-flex x-gap-5 items-center">
                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>
                    </div>

                    <div className="text-14 text-light-1 ml-10">
                      {tour?.numberOfReviews} reviews
                    </div>
                  </div>
                </div> */}

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
            {/* End .col */}

            
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End gallery grid wrapper */}

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
                        alt="image"
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
                {/* End prev nav button wrapper */}
              </div>
              {/* End relative */}

              {/* slider gallery */}

              {/* <h3 className="text-22 fw-500 mt-40">Tour snapshot</h3>
              <TourSnapShot /> */}
              {/* End toursnapshot */}
              
              {tour?.description?.trim() && (
                <div>
                  <div className="border-top-light mt-40 mb-40"></div>
                  <Overview tour={tour} />
                </div>
              )}
              {/* End  Overview */}
            </div>
            {/* End .col-xl-8 */}

            <div className="col-xl-4">
              <SidebarRight tour={tour} />
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End single page content */}
      {tour?.inclusions?.length > 0 && tour?.inclusions?.length > 0  && (          
        <section className="pt-40">
          <div className="container">
            <div className="pt-40 border-top-light">
              <div className="row x-gap-40 y-gap-40">
                <div className="col-auto">
                  <h3 className="text-22 fw-500">Important information</h3>
                </div>
              </div>
              {/* End row */}
              <ImportantInfo tour={tour} />
            </div>
            {/* End pt-40 */}
          </div>
          {/* End .container */}
        </section>
      )}
      <section className="border-top-light  mt-40 pt-40">
        <div className="container">
          <h3 className="text-22 fw-500 mb-20">Itinerary</h3>
          <Itinerary tour={tour} />
        </div>
      </section>
      {/* End Itinerary */}

      <section className="layout-pt-lg layout-pb-lg mt-50 border-top-light">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Tours Sections */}

      <CallToActions />
      {/* End Call To Actions Section */}

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
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default TourSingleV1Dynamic;
