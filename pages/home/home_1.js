import dynamic from "next/dynamic";
import { useTranslation } from 'next-i18next';
import AddBanner from "../../components/add-banner/AddBanner";
import Seo from "../../components/common/Seo";
import PopularDestinations from "../../components/destinations/PopularDestinations";
import DefaultFooter from "../../components/footer/default";
import Header1 from "../../components/header/header-1";
import TopHeader from "../../components/header/header-9/top-header";
import Hero1 from "../../components/hero/hero-1";
import BlockGuide from "../../components/block/BlockGuide";
import Blog from "../../components/blog/Blog3";
import CallToActions from "../../components/common/CallToActions";
import Destinations from "../../components/home/home-1/Destinations";
import Testimonial from "../../components/home/home-1/Testimonial";
import TestimonialLeftCol from "../../components/home/home-1/TestimonialLeftCol";
import Hotels from "../../components/hotels/Hotels";
import SelectFilter from "../../components/hotels/filter-tabs/SelectFilter";
import TourCategories from "../../components/home/home-5/TourCategories";
import Tours from "../../components/tours/Tours";
import Tours2 from "../../components/tours/Tours2";
import Link from "next/link";

const Home_1 = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Seo pageTitle="Riverwide Trekkers Safaris" />
      {/* End Page Title */}

      <TopHeader />
      {/* End Header top Banner */}

      <Header1 />
      {/* End Header 1 */}
      

      <Hero1 />
      {/* End Hero 1 */}

      <section className="layout-pt-md layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{t('popularDestinations')}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                {t('startVisitsHere')}
                </p>
              </div>
            </div>
            {/* End col-auto */}

            <div className="col-auto md:d-none">
              <a
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                {t('viewAllDestinations')}
                
                <div className="icon-arrow-top-right ml-15" />
              </a>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}

          <div className="relative pt-40 sm:pt-20">
            <PopularDestinations />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End Popular Destinations */}

      <section className="layout-pt-sm layout-pb-sm">
        <div className="container">
          <div className="row y-gap-20">
            <AddBanner/>
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End AddBanner */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-10 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{t('recommendedPackages')}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {t('startTourHere')}
                  
                </p>
              </div>
            </div>
            {/* <div className="col-sm-auto">
              <SelectFilter />
            </div> */}
            <div className="col-auto md:d-none">
              <Link
                href="/tour/tour-list-v2/east africa-safaris"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                {t('viewAllPackages')}
                
                <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>
          {/* End .row */}

          <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30">
            <Tours />
          </div>
          {/* End relative */}
        </div>
      </section>
      {/* Recommended Properties */}

      {/* <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <TestimonialLeftCol />
            </div>
            

            <div className="col-lg-6">
              <div
                className="overflow-hidden js-testimonials-slider-3"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Testimonial />
              </div>
            </div>
          </div>
          
        </div>
        
      </section> */}
      {/* End testimonial Section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between">
            <BlockGuide />
          </div>
        </div>
      </section>
      {/* Block Guide Section */}

      {/* <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get inspiration for your next trip
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div>
          <div className="row y-gap-30 pt-40">
            <Blog />
          </div>
         
        </div>
        
      </section> */}
      {/* End blog Section */}

      

      {/* <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Destinations we love</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
          </div>
          
          <div className="tabs -pills pt-40 js-tabs">
            <Destinations />
          </div>
        </div>
      </section> */}
      {/* End Destination we love Section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home_1), { ssr: false });
