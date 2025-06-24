import dynamic from "next/dynamic";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { hotelsData } from "../../../data/hotels";
import Seo from "../../../components/common/Seo";
import DefaultHeader from "../../../components/header/default-header";
import Overview from "../../../components/hotel-single/Overview";
import TopBreadCrumb from "../../../components/hotel-single/TopBreadCrumb";
import SidebarRight2 from "../../../components/hotel-single/SidebarRight2";
import ReplyForm from "../../../components/hotel-single/ReplyForm";
import CallToActions from "../../../components/common/CallToActions";
import DefaultFooter from "../../../components/footer/default";
import StickyHeader2 from "../../../components/hotel-single/StickyHeader2";
import PropertyHighlights2 from "../../../components/hotel-single/PropertyHighlights2";
import Image from "next/image";
import { destinations6, kenya, rwanda, uganda } from "../../../data/desinations";
import Tours2 from "../../../components/tours/Tours2";

const HotelSingleV1Dynamic = ({ place }) => {
  const { t } = useTranslation('common');
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const { destinationName } = router.query;
  if (!place) return <h1>Not Found</h1>;
  // useEffect(() => {
  //   let data;
  //   if (destinationName) {
  //     // Handle the tour data based on the tourName
  //     switch (destinationName.toLowerCase()) {
  //       case 'uganda':
  //         data = uganda;
  //         break;
  //       case 'kenya':
  //         data = kenya;
  //         break;
  //       case 'rwanda':
  //         data = rwanda;
  //         break;
  //       default:
  //         data = [];
  //         break;
  //     }
  //     // switch (tourName.toLowerCase()) {
  //     //   case 'kenya-safaris':
  //     //     data = kenyaSafaris;
  //     //     break;
  //     //   case 'uganda-safaris':
  //     //     data = ugandaSafaris;
  //     //     break;
  //     //   case 'rwanda-safaris':
  //     //     data = rwandaSafaris;
  //     //     break;
  //     //   case 'east africa-safaris':
  //     //     data = EASafaris;
  //     //     break;
  //     //   default:
  //     //     data = []; // Or handle a fallback
  //     //     break;
  //     // }
  //   }
  //   if (!placeName) <h1>Loading...</h1>;

  //   else setPlace(data.find((item) => item?.location?.toLowerCase().replace(/\s+/g, "-") === placeName));

  //   return () => {};
  // }, [destinationName, placeName]);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
      />

      <Seo pageTitle={place?.location?.slice(0, 30)} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End DefaultHeader */}

      <StickyHeader2 place={place} />

      <TopBreadCrumb place={place?.location?.slice(0, 30)} destination={destinationName} />
      {/* End top breadcrumb */}
      <section className="layout-pb-md">
        <div className="container">
          <div className="hotelSingleGrid">
            <div>
              <Gallery>
                <div className="galleryGrid -type-2">
                  <div className="galleryGrid__item relative d-flex justify-end">
                    <Item
                      original={place?.img}
                      thumbnail={place?.img}
                      width={660}
                      height={660}
                    >
                      {({ ref, open }) => (
                        <Image
                          src={place?.img}
                          ref={ref}
                          onClick={open}
                          alt="image"
                          role="button"
                          className="rounded-4"
                          width={660}
                          height={660}
                        />
                      )}
                    </Item>
                    
                  </div>
                  {/* End .galleryGrid__item */}
                  {place?.slideImg?.slice(0, 2).map((img, index) => (
                    <div className="galleryGrid__item" key={index}>
                      <Item
                        original={img}
                        thumbnail={img}
                        width={450}
                        height={375}
                      >
                        {({ ref, open }) => (
                          <Image
                            ref={ref}
                            onClick={open}
                            src={img}
                            alt={`image ${index + 1}`}
                            className="rounded-4"
                            width={450}
                            height={375}
                            role="button"
                          />
                        )}
                      </Item>
                    </div>
                  ))}
                  
                  {place?.slideImg?.length >= 3 && (
                    <div className="galleryGrid__item relative d-flex justify-end items-end">
                      <Image
                        src={place.slideImg[2]}
                        alt="image 3"
                        className="rounded-4"
                        width={362}
                        height={302}
                      />
                      <div className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end">
                        <Item
                          original={place.slideImg[2]}
                          thumbnail={place.slideImg[2]}
                          width={362}
                          height={302}
                        >
                          {({ ref, open }) => (
                            <Image
                              ref={ref}
                              onClick={open}
                              src={place.slideImg[2]}
                              width={362}
                              height={302}
                              alt={`image ${index + 1}`}
                              className="rounded-4"
                              role="button"
                            />
                          )}
                        </Item>
                      </div>
                    </div>
                  )}
                  {/* End .galleryGrid__item */}
                </div>
              </Gallery>
              {/* End gallery grid */}

              <div className="row justify-between items-end pt-40">
                <div className="col-auto">
                  <div className="row x-gap-20  items-center">
                    <div className="col-auto">
                      <h1 className="text-30 sm:text-25 fw-600">
                        {place?.location?.slice(0, 30)}
                      </h1>
                    </div>
                    {/* End .col */}
                    <div className="col-auto">
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="row x-gap-20 y-gap-20 items-center">
                    <div className="col-auto">
                      <div className="d-flex items-center text-15 text-light-1">
                        <i className="icon-location-2 text-16 mr-5" />
                        {destinationName}
                      </div>
                    </div>
                    {/* <div className="col-auto">
                      <button
                        data-x-click="mapFilter"
                        className="text-blue-1 text-15 underline"
                      >
                        Show on map
                      </button>
                    </div> */}
                  </div>
                  {/* End .row */}
                </div>
                {/* End .col */}

                {/* <div className="col-auto">
                  <div className="text-14 text-md-end">
                    From{" "}
                    <span className="text-22 text-dark-1 fw-500">
                      US${place?.price}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Select Room <div className="icon-arrow-top-right ml-15" />
                  </a>
                </div> */}
                {/* End .col */}
              </div>
              {/* End .row */}

              <div id="overview" className="row y-gap-40 pt-40 ">
                <div className="col-12">
                  <Overview  place={place}/>
                </div>
                {/* End col-12 */}
                
                {/* <div className="col-12">
                  <h3 className="text-22 fw-500 pt-40 border-top-light">
                    Attractions
                  </h3>
                  <div className="row y-gap-10 pt-20">
                    <PopularFacilities />
                  </div>
                </div> */}
                {/* End .col-12  */}
              </div>
              {/* End .col-12  Overview */}
            </div>
            {/* End left hotel galler  */}
            {/* <div className="container mt-40 mb-20">
              <div className="border-top-light"></div>
            </div> */}

            <div>
              <SidebarRight2 place={place} />
              {/* <RatingBox place={place} /> */}
              <PropertyHighlights2 place={place} />
            </div>
            {/* End right content */}
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End gallery grid wrapper */}

      <section className="mt-20" id="attractions">
        <div className="container">
          <div className="row x-gap-40 y-gap-40">
            <div className="col-12">
              <h3 className="text-22 fw-500">Attractions</h3>
              <div className="row x-gap-40 y-gap-40 pt-20">
              <p className="text-dark-1 text-15 mt-20"  dangerouslySetInnerHTML={{ __html: place?.attractions }}/>
        
                {/* <Facilities /> */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End facilites section */}

      <div className="container mt-40 mb-20">
        <div className="border-top-light"></div>
      </div>

      <section className="mt-20" id="transport">
        <div className="container">
          <div className="row x-gap-40 y-gap-40">
            <div className="col-12">
              <h3 className="text-22 fw-500">How to get there</h3>
              <div className="row x-gap-40 y-gap-40 pt-20">
              <p className="text-dark-1 text-15 mt-20"  dangerouslySetInnerHTML={{ __html: place?.transport }}/>
        
                {/* <Facilities /> */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End facilites section */}

      <div className="container mt-40 mb-20">
        <div className="border-top-light"></div>
      </div>

      

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Popular Safaris in {destinationName}
                </h2>
                {/* <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p> */}
              </div>
              {/* End sectionTitle */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="pt-40 sm:pt-20 item_gap-x30">
            <Tours2 destination={destinationName}/>
          </div>
          {/* End slide hotel */}
        </div>
        {/* End .container */}
      </section>
      {/* End similar hotel */}

      <section className="mb-40">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-xl-3">
              <div className="row">
                <div className="col-auto">
                  <h3 className="text-22 fw-500">Leave a Reply</h3>
                  <p className="text-15 text-dark-1 mt-5">
                    Your email address will not be published.
                  </p>
                </div>
              </div>
              {/* End .row */}

            </div>
            {/* End .col-xl-3 */}

            <div className="col-xl-8">
              <ReplyForm />
            </div>
            {/* End .col-xl-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Reply Comment box section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};


export async function getStaticPaths({ locales }) {
  const destinations = ['uganda', 'kenya', 'rwanda'];
  const data = {
    uganda,
    kenya,
    rwanda,
  };

  const paths = [];

  for (const locale of locales) {
    for (const dest of destinations) {
      for (const place of data[dest]) {
        const slug = place.location.toLowerCase().replace(/\s+/g, '-');
        paths.push({
          params: {
            destinationName: dest,
            placeName: slug,
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
  const { destinationName, placeName } = params;

  let data = [];
  switch (destinationName.toLowerCase()) {
    case 'uganda':
      data = uganda;
      break;
    case 'kenya':
      data = kenya;
      break;
    case 'rwanda':
      data = rwanda;
      break;
    default:
      data = [];
  }

  const place = data.find(
    (item) =>
      item?.location?.toLowerCase().replace(/\s+/g, '-') === placeName
  );

  if (!place) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      place,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}


export default HotelSingleV1Dynamic;