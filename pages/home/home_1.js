import dynamic from "next/dynamic";
import { useTranslation } from 'next-i18next';
import AddBanner from "../../components/add-banner/AddBanner";
import Seo from "../../components/common/Seo";
import PopularDestinations from "../../components/destinations/PopularDestinations";
import DefaultFooter from "../../components/footer/default";
import DefaultHeader from "../../components/header/default-header";
import Hero1 from "../../components/hero/hero-1";
import BlockGuide from "../../components/block/BlockGuide";
import Blog from "../../components/blog/Blog3";
import CallToActions from "../../components/common/CallToActions";
import Destinations from "../../components/home/home-1/Destinations";
import Testimonial from "../../components/home/home-1/Testimonial";
import TestimonialLeftCol from "../../components/home/home-1/TestimonialLeftCol";
import TourCategories from "../../components/home/home-5/TourCategories";
import Tours from "../../components/tours/Tours";
import Tours2 from "../../components/tours/Tours2";
import Link from "next/link";

const HOME_STRUCTURED_DATA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the best destinations for gorilla trekking in East Africa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bwindi Impenetrable National Park and Mgahinga Gorilla National Park in Uganda, as well as Volcanoes National Park in Rwanda, are the premier destinations for mountain gorilla trekking in East Africa.",
        },
      },
      {
        "@type": "Question",
        name: "When is the best time to visit Uganda, Rwanda, and Kenya for a safari?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The dry seasons from June to October and December to February offer the best conditions for gorilla trekking, chimpanzee tracking, and Big Five wildlife viewing across Uganda, Rwanda, and Kenya, including the Great Migration in the Masai Mara.",
        },
      },
      {
        "@type": "Question",
        name: "Does Riverwide Trekkers Safaris offer tailor-made East Africa safari packages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Riverwide Trekkers Safaris specializes in custom and scheduled safari packages across Uganda, Kenya, Rwanda, and Tanzania, including airport transfers, 4x4 safari vehicles, permits, and lodge bookings.",
        },
      },
    ],
  },
];

const Home_1 = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Seo
        pageTitle="Uganda, Rwanda & Kenya Safari Tours | Gorilla Trekking"
        description="Experience unforgettable East Africa safaris with Riverwide Trekkers Safaris. Book mountain gorilla trekking in Bwindi & Volcanoes National Park, Big Five wildlife tours in Murchison Falls, Queen Elizabeth & Masai Mara."
        keywords="Riverwide Trekkers Safaris, Riverwide Safaris, Uganda safaris, Rwanda gorilla trekking, Kenya wildlife safaris, Bwindi gorilla trekking, Murchison Falls National Park, Queen Elizabeth National Park, Masai Mara safari, Kibale chimpanzee tracking, Kidepo Valley safari, East Africa tour operator"
        url="https://www.riverwidesafaris.com"
        image="/img/new_pics/gorilla_hero.jpeg"
        structuredData={HOME_STRUCTURED_DATA}
      />
      {/* End Page Title */}

      <DefaultHeader />
      {/* End Default Header */}


      <Hero1 />
      {/* End Hero 1 */}


      <section className="layout-pt-md layout-pb-sm">
        <div className="container">
          <div className="row y-gap-20">
            <AddBanner />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End AddBanner */}

      <section className="layout-pt-sm layout-pb-sm" data-aos="fade-up">
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
              <Link
                href="/destination/Uganda"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                {t('viewAllDestinations')}

                <div className="icon-arrow-top-right ml-15" />
              </Link>
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

      <section className="layout-pt-sm layout-pb-md">
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
                href="/safaris/east-africa-safaris"
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

export default Home_1;
