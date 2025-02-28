import dynamic from "next/dynamic";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import TopDestinations2 from "../../components/destinations/TopDestinations2";
import Faq from "../../components/faq/Faq";
import TestimonialLeftCol from "../../components/home/home-1/TestimonialLeftCol";
import Testimonial from "../../components/home/home-1/Testimonial";
import Link from "next/link";
import Slights from "../../components/block/Slights";
import Blog from "../../components/blog/Blog3";
import LocationTopBar from "../../components/common/LocationTopBar";
import Banner from "../../components/destinations/components/Banner";
import kenyaMap from "./../../public/img/pages/destinations/Kenya map.gif";
import ugandaMap from "./../../public/img/pages/destinations/Uganda map.jpg";
import rwandaMap from "./../../public/img/pages/destinations/Rwanda map.png";
import { useRouter } from "next/router";
import { kenyaInfo, rwandaInfo, ugandaInfo } from "../../data/desinations";
import { useEffect, useState } from "react";

const destination = () => {
  const router = useRouter();
  const { destinationName } = router.query; 
  const [destinationData, setDestinationData] = useState([]);
  const [destinationMap, setDestinationMap] = useState("");
  useEffect(() => {
    if (destinationName) {
      // Handle the tour data based on the tourName
      switch (destinationName.toLowerCase()) {
        case 'uganda':
          setDestinationData(ugandaInfo);
          setDestinationMap("Uganda map.jpg");
          break;
        case 'kenya':
          setDestinationData(kenyaInfo);
          setDestinationMap("Kenya map.gif");
          break;
        case 'rwanda':
          setDestinationData(rwandaInfo);
          setDestinationMap("Rwanda map.png");
          break;
        default:
          setDestinationData([]); // Or handle a fallback
          break;
      }
    }
  }, [destinationName]);

    return (
        <>
          <Seo pageTitle={destinationName} />
          {/* End Page Title */}
    
          <div className="header-margin"></div>
          {/* header top margin */}
    
          <DefaultHeader />
          {/* End Header 1 */}
    
          <LocationTopBar destination={destinationName}/>
          {/* End location top bar section */}
    
          <section className="layout-pb-md">
            <div className="container">
              <div className="row">
                <Banner destination={destinationName} />
              </div>
              {/* End .row */}
    
              {/* <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10">
                <Categories />
              </div> */}
              {/* End .row */}
    
              <div className="row y-gap-20 pt-40">
                <div className="col-auto">
                  <h2>What to know before visiting {destinationName}</h2>
                </div>
                {/* End .col-auto */}
                
                <div className="col-xl-8">
                    
                  {destinationData.map((item, index) => (
                    <p
                      key={index}
                      className="text-15 text-dark-1"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  ))}
              
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
                          src={`/img/pages/destinations/${destinationMap}`}
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
              {destinationData.map((item, index) => (
              
              <>         
              <div className="pt-30 mt-30 border-top-light" />
                <div className="row y-gap-20">
                  <div className="col-12">
                    <h2 className="text-22 fw-500">General info</h2>
                  </div>
                  {/* End .col */}
                  {/* <div className="col-xl-3 col-6">
                      <div className="text-15">Time Zone</div>
                      <div className="fw-500">GMT +03:00</div>
                      <div className="text-15 text-light-1">3 hours behind</div>
                  </div> */}
                  {item.timeZone?.map((zone, i) => (
                    <div key={i} className="col-xl-3 col-6">
                      <div className="text-15">Time Zone</div>
                      <div className="fw-500">{zone.zone}</div>
                      <div className="text-15 text-light-1">{zone.time}</div>
                    </div>
                  ))}
                  {/* End .col */}
                  {item.currency?.map((cur, i) => (
                    <div key={i} className="col-xl-3 col-6">
                      <div className="text-15">Currency</div>
                      <div className="fw-500">{cur.currency}</div>
                      <div className="text-15 text-light-1">{cur.conversion}</div>
                    </div>
                  ))}
                  {/* End .col */}
                  {item.visit?.length > 0 && (
                    <div className="col-xl-3 col-6">
                      <div className="text-15">Best time to visit</div>
                      <div className="row y-gap-20">
                        {item.visit.map((visitInfo, i) => (
                          <div key={i} className="col-auto">
                            <div className="fw-500">{visitInfo.time}</div>
                            <div className="text-15 text-light-1">{visitInfo.activity}</div>
                          </div>
                        ))}
                      </div>
                      {/* End .row */}
                    </div>
                  )}
                </div>
                {/* End .row */}
                <div className="mt-30 border-top-light" />
                {/* border separation */}
              </>  
              ))}
              </div>
              
            {/* End .container */}
        </section>
        {/* End Top Banner,categorie,intro,weather, generic info section */}
    
        <section className="layout-pt-xs layout-pb-md">
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
                <TopDestinations2 destination={destinationName} />
              </div>
              {/* End relative */}
            </div>
          </section>
          {/* End  Hotel sections */}
    
          <CallToActions />
          {/* End Call To Actions Section */}
    
          <DefaultFooter />
          {/* End Call To Actions Section */}
        </>
      );
};

export default dynamic(() => Promise.resolve(destination), { ssr: false });
