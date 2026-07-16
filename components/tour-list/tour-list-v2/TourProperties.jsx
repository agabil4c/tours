import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { EASafaris, kenyaSafaris, rwandaSafaris, ugandaSafaris } from "../../../data/tours";
import isTextMatched from "../../../utils/isTextMatched";
import { useEffect, useState } from "react";

const TourProperties = ({ tours }) => {
  const [tourData, setTourData] = useState(null);

  useEffect(() => {
    if (tours) {
      // Handle the tour data based on the tourName
      switch (tours.toLowerCase()) {
        case 'kenya-safaris':
          setTourData(kenyaSafaris);
          break;
        case 'uganda-safaris':
          setTourData(ugandaSafaris);
          break;
        case 'rwanda-safaris':
          setTourData(rwandaSafaris);
          break;
        case 'east africa-safaris':
          setTourData(EASafaris);
          break;
        default:
          setTourData([]); // Or handle a fallback
          break;
      }
    }
  }, [tours]);

  return (
    <>
      {tourData && tourData.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item?.delayAnimation}
        >
          <Link
            href={`/safaris/${tours?.toLowerCase()}/${item?.title?.toLowerCase().replace(/\s+/g, "-")}`}
            className="tourCard -type-1 hover-inside-slider"
          >
            <div className="tourCard__image position-relative">
              <div className="inside-slider">
                <Swiper
                  className="mySwiper"
                  modules={[Pagination, Navigation]}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                >
                  {item?.slideImg?.map((slide, i) => (
                    <SwiperSlide key={i}>
                      <div className="cardImage ratio ratio-1:1">
                        <div className="cardImage__content">
                          <Image
                            width={300}
                            height={300}
                            className="rounded-4 col-12 js-lazy"
                            src={slide}
                            alt="image"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="cardImage__leftBadge">
                  <div className="py-5 px-15 rounded-right-4 text-11 lh-16 fw-600 uppercase bg-yellow-1 text-dark-1" style={{ letterSpacing: '1px' }}>
                    {item?.tourType || 'Safari Tour'}
                  </div>
                </div>

                <div className="tourCard__overlay-content">
                  <div className="d-flex items-center justify-between mb-5">
                    <div className="text-12 text-light-2 fw-500">
                      {item?.location}
                    </div>
                    <div className="d-flex items-center text-yellow-1">
                      <i className="icon-star text-10 mr-5" />
                      <span className="text-12 fw-600 text-white">4.9</span>
                      <span className="text-12 text-light-2 ml-5">({item?.numberOfReviews || '20'})</span>
                    </div>
                  </div>
                  
                  <h4 className="tourCard__title text-white text-16 lh-15 fw-600 mb-10" style={{ minHeight: '48px', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    <span>{item?.title}</span>
                  </h4>
                  
                  <div className="d-flex justify-between items-center pt-8 border-top-light-trans">
                    <div className="d-flex items-center text-12 text-light-2">
                      <i className="icon-clock text-13 mr-5 text-yellow-1" />
                      <span>
                        {item?.title.match(/(\d+)\s*[- ]\s*Day/i) 
                          ? `${item.title.match(/(\d+)\s*[- ]\s*Day/i)[1]} Days` 
                          : '7 Days'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TourProperties;
