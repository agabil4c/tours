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

const DestinationsKE = () => {
    return (
        <>
          <Seo pageTitle="Kenya" />
          {/* End Page Title */}
    
          <div className="header-margin"></div>
          {/* header top margin */}
    
          <DefaultHeader />
          {/* End Header 1 */}
    
          <LocationTopBar destination="Kenya"/>
          {/* End location top bar section */}
    
          <section className="layout-pb-md">
            <div className="container">
              <div className="row">
                <Banner destination="Kenya" />
              </div>
              {/* End .row */}
    
              {/* <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10">
                <Categories />
              </div> */}
              {/* End .row */}
    
              <div className="row y-gap-20 pt-40">
                <div className="col-auto">
                  <h2>What to know before visiting Kenya</h2>
                </div>
                {/* End .col-auto */}
    
                <div className="col-xl-8">
                    <p className="text-15 text-dark-1">
                    Lying at the heart of a region from which modern humans emerged some 150 000 years ago, Kenya’s history has been shaped not only by indigenous and migrating African ethnic groups but by European and Arabian traders, missionaries and colonisers as well. 
                    Jomo Kenyatta was the first leader of independent, post-colonial Kenya and his conciliatory rallying cry harambee – all pull together – became the national motto.
                    Today, Kenya boasts the largest and most advanced economy in East Africa. Agriculture accounts for 75% of the work force but it is the service industry, dominated by tourism, which contributes nearly two thirds of Kenya’s GDP.
                    <br />
                    <br />
                    Visa and entry
                    <br />
                    Visas are required by most visitors to Kenya including British, American, Canadian, European, Australian and New Zealand passport holders. 
                    Citizens from some smaller Commonwealth countries are exempt.
                    Visas are valid for three months from the date of entry and can be purchased upon arrival at Jomo Kenyatta International Airport. 
                    Visitors can pay for their visas in local currency and they must possess a passport that is valid until six months after the initial date of travel.
                    If you plan on travelling onwards from Kenya, visas for other East African countries such as Tanzania and Uganda can generally be obtained in Nairobi for around US$50 each.
                    
                    <br/>
                    <br/>
                    People & Culture
                    <br/>
                    Kenya’s predominantly young population (nearly 75% of Kenyans are under 30) is made up of many ethnic groups that include the famous Maasai. English and Swahili are the official languages (any attempts to speak Swahili will be warmly received by locals!) and the vast majority of Kenyans consider themselves Christian. 
                    About 10% of the population are Muslim, the majority living on Kenya’s Indian Ocean coast.
                    <br/>
                    <br/>
                    Currency
                    <br/>
                    Kenya’s national currency is the Kenyan Shilling and although foreign currencies such as US Dollars are widely accepted (and indeed the currency required for activities like hot-air balloon safaris) 
                    we’d recommend using local currency to pay for bar bills, souvenirs and meals not included in your itinerary.
                    Please note that due to the number of fake notes in circulation, no US Dollar bills printed before 2003 are accepted in Kenya and, in fact, your safest bet is to carry notes printed after 2006.
                    
                    
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
                        src="/img/pages/destinations/Kenya-map.gif"
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
                    <div className="fw-500">GMT +03:00</div>
                    <div className="text-15 text-light-1">3 hours behind</div>
                </div>
                {/* End .col */}
    
                <div className="col-xl-3 col-6">
                    <div className="text-15">Currency</div>
                    <div className="fw-500">Kenyan Shilling</div>
                    <div className="text-15 text-light-1">1USD = 129.10KES</div>
                </div>
                {/* End .col */}
    
                <div className="col-xl-3 col-6">
                    <div className="text-15">Best time to visit</div>
                    <div className="row y-gap-20">
                    <div className="col-auto">
                        <div className="fw-500">July to September</div>
                        <div className="text-15 text-light-1">
                            Great Migration of wildebeest and zebra
                        </div>
                    </div>
                    {/* End .col */}
    
                    <div className="col-auto">
                        <div className="fw-500">January to February</div>
                        <div className="text-15 text-light-1">
                            wildlife Safaris
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

export default dynamic(() => Promise.resolve(DestinationsKE), { ssr: false });
