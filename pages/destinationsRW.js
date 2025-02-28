import dynamic from "next/dynamic";
import CallToActions from "../components/common/CallToActions";
import Seo from "../components/common/Seo";
import DefaultHeader from "../components/header/default-header";
import DefaultFooter from "../components/footer/default";
import TopDestinations2 from "../components/destinations/TopDestinations2";
import Faq from "../components/faq/Faq";
import TestimonialLeftCol from "../components/home/home-1/TestimonialLeftCol";
import Testimonial from "../components/home/home-1/Testimonial";
import Link from "next/link";
import Slights from "../components/block/Slights";
import Blog from "../components/blog/Blog3";
import LocationTopBar from "../components/common/LocationTopBar";
import Banner from "../components/destinations/components/Banner";
import Categories from "../components/destinations/components/Categories";
import IntroTown from "../components/destinations/components/IntroTown";
import Weather from "../components/destinations/components/Weather";
import GeneralInfo from "../components/destinations/components/GeneralInfo";
import Cars from "../components/cars/Cars";
import Tours from "../components/tours/Tours";
import Activity from "../components/activity/Activity";
import Rentals from "../components/rentals/Rentals";
import Hotels from "../components/hotels/Hotels2";

const DestinationsRW = () => {
  return (
    <>
      <Seo pageTitle="Rwanda" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <LocationTopBar destination="Rwanda"/>
      {/* End location top bar section */}

      <section className="layout-pb-md">
        <div className="container">
          <div className="row">
            <Banner destination="Rwanda" />
          </div>
          {/* End .row */}

          {/* <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10">
            <Categories />
          </div> */}
          {/* End .row */}

          <div className="row y-gap-20 pt-40">
            <div className="col-auto">
              <h2>What to know before visiting Rwanda</h2>
            </div>
            {/* End .col-auto */}

            <div className="col-xl-8">
                <p className="text-15 text-dark-1">
                Known as the land of a thousand hills, Rwanda’s stunning scenery and warm, friendly people offer unique experiences in one of the most remarkable countries in the world. 
                It is blessed with extraordinary biodiversity, with incredible wildlife living throughout its volcanoes, montane rainforest and sweeping plains.
                Travellers come from far and wide to catch a glimpse of the magnificent gorillas, yet there is so much more to see and experience.
                Rwanda lies just south of the Equator, in the heart of Africa. 
                In the space of a week, it’s possible to experience an extraordinary range of wildlife and landscapes thanks to the country’s relatively small size and biodiversity.
                
                <br />
                <br />
                Visa and entry
                <br />
                Citizens of all countries can get a visa upon arrival without prior application at a fee of USD 30 per person. Please ensure you have USD notes printed in 2013 or later. 
                Depending on the traffic and number of guests arriving at any given moment, the immigration process can take 1 hour or more.
                <br/>
                <br/>
                Health information
                <br/>
                Visitors to East Africa arriving from any country with risk of yellow fever are required to carry proof of yellow fever vaccination. There is risk of malaria throughout the year so we advise that carry a good mosquito repellent and wear clothes that cover most parts of your body, especially if you are traveling during the rainy months.
                Visitors to Rwanda and Uganda who are going gorilla trekking should be aware that gorillas are susceptible to most human diseases. If you are suffering from a contagious disease (especially the flu), you must inform your guide and not join the trek for the safety of these endangered gorillas. 
                A standard trek is a strenuous and can last between one to four hours each way (two to three hours is usual in each direction). 
                Please note that children below 15 years of age are not permitted to go gorilla trekking.
                <br/>
                <br/>
                Currency and Cards
                <br/>
                In Rwanda, US dollars are the most accepted currency in larger cities although smaller shops will only accept local currency. 
                If you are carrying dollar bills, do make sure that they were printed in 2013 or later or you may be refused service. 
                International credit cards, mainly Visa and Mastercard, are accepted at most establishments. 
                Amex cards however, are not accepted in most areas.
                </p>
                {/* <a
                href="#"
                className="d-block text-14 fw-500 text-blue-1 underline mt-20"
                >
                Show More
                </a> */}
            </div>
            {/* End .col */}

            <div className="col-xl-4">
                <div className="relative d-flex ml-35 xl:ml-0">
                <img
                    src="/img/pages/destinations/Rwanda map.png"
                    alt="image"
                    className="col-12 rounded-4"
                />
                <div className="absolute d-flex justify-center items-end col-12 h-full z-1 px-35 py-20">
                    <button className="button h-50 px-25 -blue-1 bg-white text-dark-1 text-14 fw-500 col-12">
                    <i className="icon-eye text-18 mr-10" />
                    See popular activities on the map
                    </button>
                </div>
                </div>
            </div>
        </div>
          {/* End .row */}

        <div className="pt-30 mt-30 border-top-light" />
          <div className="row y-gap-20">
            <div className="col-12">
              <h2 className="text-22 fw-500">General info</h2>
            </div>
            {/* End .col */}
            <div className="col-xl-3 col-6">
                <div className="text-15">Time Zone</div>
                <div className="fw-500">GMT +02:00</div>
                <div className="text-15 text-light-1">2 hours behind</div>
            </div>
            {/* End .col */}

            <div className="col-xl-3 col-6">
                <div className="text-15">Currency</div>
                <div className="fw-500">Rwandan Franc</div>
                <div className="text-15 text-light-1">1USD = 1,404.04RWF</div>
            </div>
            {/* End .col */}

            <div className="col-xl-3 col-6">
                <div className="text-15">Best time to visit</div>
                <div className="row y-gap-20">
                <div className="col-auto">
                    <div className="fw-500">JUN</div>
                    <div className="text-15 text-light-1">
                    Kwita Izina Ceremony
                    </div>
                </div>
                {/* End .col */}

                <div className="col-auto">
                    <div className="fw-500">SEPT</div>
                    <div className="text-15 text-light-1">
                        Rwanda Film Festival
                    </div>
                </div>
                </div>
                {/* End .row */}
            </div>
          </div>
          {/* End .row */}
          <div className="mt-30 border-top-light" />
          {/* border separation */}
        </div>
        {/* End .container */}
    </section>
    {/* End Top Banner,categorie,intro,weather, generic info section */}

    <section className="layout-pt-sm layout-pb-xs">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Places to Visit</h2>
                {/* <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p> */}
              </div>
            </div>
            {/* End .col */}

            {/* <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div> */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <TopDestinations2 />
          </div>
          {/* End relative */}
        </div>
      </section>
      {/* End  Hotel sections */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-lg-4">
              <h2 className="text-30 fw-500">
                FAQs about
                <br />
                London
              </h2>
            </div>
            {/* End .col */}

            <div className="col-lg-8">
              <div className="accordion -simple row y-gap-20 js-accordion">
                <Faq />
              </div>
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Faq Section */}

      

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(DestinationsRW), { ssr: false });
