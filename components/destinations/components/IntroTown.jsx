import Image from "../../image/image";

const IntroTown = () => {
  return (
    <>
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
          <Image
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
    </>
  );
};

export default IntroTown;
