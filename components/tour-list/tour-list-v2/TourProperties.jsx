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
      {tourData && tourData?.slice(0, 9).map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item?.delayAnimation}
        >
          <Link
            href={`/tour/tour-single/${tours?.toLowerCase()}/${item?.title?.toLowerCase().replace(/\s+/g, "-")}`}
            className="tourCard -type-1 rounded-4 position-relative"
          >
            <div className="tourCard__image">
              <div className="cardImage ratio ratio-1:1">
                <div className="cardImage__content">
                  <div className="cardImage-slider rounded-4 overflow-hidden custom_inside-slider">
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
                          <Image
                            width={300}
                            height={300}
                            className="rounded-4 col-12 js-lazy"
                            src={slide}
                            alt="image"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="cardImage__leftBadge">
                <div
                  className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
                    isTextMatched(item?.tag, "likely to sell out*")
                      ? "bg-dark-1 text-white"
                      : ""
                  } ${
                    isTextMatched(item?.tag, "best seller")
                      ? "bg-blue-1 text-white"
                      : ""
                  }  ${
                    isTextMatched(item?.tag, "top rated")
                      ? "bg-yellow-1 text-dark-1"
                      : ""
                  }`}
                >
                  {item.tag}
                </div>
              </div>
            </div>
            {/* End .tourCard__image */}

            <div className="tourCard__content mt-2">
              <div className="d-flex items-center lh-14 mb-5">
                <div className="text-14 text-light-1">
                  {item?.duration}+ hours
                </div>
                <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" />
                <div className="text-14 text-light-1">{item?.tourType}</div>
              </div>
              <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                <span>{item?.title}</span>
              </h4>
              <p className="text-light-1 lh-14 text-14 mt-5">
                {item?.location}
              </p>

              {/* <div className="row justify-between items-center pt-15">
                <div className="col-auto">
                  <div className="d-flex items-center">
                    <div className="d-flex items-center x-gap-5">
                      <div className="icon-star text-yellow-1 text-10" />
                      <div className="icon-star text-yellow-1 text-10" />
                      <div className="icon-star text-yellow-1 text-10" />
                      <div className="icon-star text-yellow-1 text-10" />
                      <div className="icon-star text-yellow-1 text-10" />
                    </div>
                    
                    <div className="text-14 text-light-1 ml-10">
                      {item?.numberOfReviews} reviews
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="text-14 text-light-1">
                    From
                    <span className="text-16 fw-500 text-dark-1">
                      {" "}
                      US${item.price}
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TourProperties;
