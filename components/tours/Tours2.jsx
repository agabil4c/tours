import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { kenyaSafaris, rwandaSafaris, ugandaSafaris } from "../../data/tours";
import { useEffect, useState } from "react";
import isTextMatched from "../../utils/isTextMatched";

const Tours2 = ({ destination }) => {
  const [tourData, setTourData] = useState(null);
  console.log(destination)
    useEffect(() => {
      if (destination) {
        // Handle the tour data based on the tourName
        switch (destination?.toLowerCase()) {
          case 'kenya':
            setTourData(kenyaSafaris);
            break;
          case 'uganda':
            setTourData(ugandaSafaris);
            break;
          case 'rwanda':
            setTourData(rwandaSafaris);
            break;
          
          default:
            setTourData([]); // Or handle a fallback
            break;
        }
      }
    }, [destination]);
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-populars-tour-next",
          prevEl: ".js-populars-tour-prev",
        }}
        pagination={{
          el: ".js-tour-pag_active",
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {tourData?.slice(0, 6).map((item) => (
          <SwiperSlide key={item.id}>
            <div
              key={item?.id}
              data-aos="fade"
              data-aos-delay={item?.delayAnimation}
            >
              <Link
                href={`/safaris/${destination?.toLowerCase()}-safaris/${item?.title.toLowerCase().replace(/\s+/g, "-")}`}
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
                          <span>{item?.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-left-hover js-populars-tour-prev">
            <i className="icon icon-arrow-left" />
          </button>
        </div>
        {/* End arrow prev */}

        <div className="col-auto">
          <div className="pagination -dots text-border js-tour-pag_active" />
        </div>
        {/* End arrow pagination */}

        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover js-populars-tour-next">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
        {/* End arrow next */}
      </div>
    </>
  );
};

export default Tours2;
