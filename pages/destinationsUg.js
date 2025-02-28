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
import TopDestinations from "../components/destinations/TopDestinations";

const DestinationsUG = () => {
    return (
        <>
          <Seo pageTitle="Uganda" />
          {/* End Page Title */}
    
          <div className="header-margin"></div>
          {/* header top margin */}
    
          <DefaultHeader />
          {/* End Header 1 */}
    
          <LocationTopBar destination="Uganda"/>
          {/* End location top bar section */}
    
          <section className="layout-pb-md">
            <div className="container">
              <div className="row">
                <Banner destination="Uganda" />
              </div>
              {/* End .row */}
    
              {/* <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10">
                <Categories />
              </div> */}
              {/* End .row */}
    
              <div className="row y-gap-20 pt-40">
                <div className="col-auto">
                  <h2>What to know before visiting Uganda</h2>
                </div>
                {/* End .col-auto */}
    
                <div className="col-xl-8">
                    <p className="text-15 text-dark-1">
                    Winston Churchill referred to Uganda as the ‘Pearl of Africa’. 
                    The nickname neatly sums up the East African country’s rich beauty in three simple words, encapsulating everything from its vibrant colours and lush vegetation to the magnificent wildlife that roams its plains. 
                    Today, the moniker is as valid as ever, as Uganda has grown into one of Africa’s most coveted travel sojourns.

                    Uganda is home to the highest density of primates and gorillas in the world. 
                    The expansive rainforest jungles of this landlocked country in East Africa are home to 20 species of primates, including mountain gorillas, chimpanzees and golden monkeys.
                    <br />
                    <br />
                    Visa and entry
                    <br />
                    A Single Entry Visa is $50 for most nationalities. 
                    It is advised to get in advance from the Uganda eVisa website. 
                    You can also get a Multi-Entry Visa and the East Africa Tourist Visa (definitely apply in advance for these). 
                    
                    <br/>
                    <br/>
                    People & Culture
                    <br/>
                    Uganda’s 34 million people are concentrated in the country’s better watered south and west with the Kampala-based Baganda the largest of the country’s many ethnic groups. 
                    Some 40 regional languages exist but Swahili and English are Uganda’s official languages. 
                    Religious belief is overwhelmingly Christian-based though Islam is strong in Uganda’s Asian communities. 
                    It should be noted that Ugandans hold their ancestry in high regard.
                    Uganda is a conservative country and visitors would do well to adhere to local rules of behaviour. 
                    That said, visitors often remark on the friendliness and politeness of the locals: greetings are an elaborate affair and may include inquiries as to the health of your family – perfunctory greetings and a demand for immediate action are somewhat frowned upon!
                    <br/>
                    <br/>
                    Languages
                    <br/>
                    Uganda is a multilingual nation with English as the official langauge and Swahili as the natural language. 
                    However, thre are over 40 languages spoken across the country, reflecting its ethnic diversity. Luganda, spoken by the Baganda people, is widely spoken in the central region and is often used in business and daily transactions. 
                    Other prominent languages include Runyankole in the west, Lusoga in the east, and Acholi in the north. 
                    
                    
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
                        src="/img/pages/destinations/Uganda map.jpg"
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
                    <div className="fw-500">Ugandan Shilling (UGX)</div>
                    <div className="text-15 text-light-1">1USD = 3680UGX</div>
                </div>
                {/* End .col */}
    
                <div className="col-xl-3 col-6">
                    <div className="text-15">Best time to visit</div>
                    <div className="row y-gap-20">
                    <div className="col-auto">
                        <div className="fw-500">June to August</div>
                        <div className="text-15 text-light-1">
                        Gorilla trekking
                        </div>
                    </div>
                    {/* End .col */}
    
                    <div className="col-auto">
                        <div className="fw-500">December to February</div>
                        <div className="text-15 text-light-1">
                            Birdwatching and general outdoor activities
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

export default dynamic(() => Promise.resolve(DestinationsUG), { ssr: false });
