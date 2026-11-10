import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { EASafaris } from "../../data/tours";

const Tours = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {EASafaris.slice(0, 6).map((item) => {
          const durationMatch = item?.title?.match(/(\d+)\s*[- ]\s*Day/i);
          const daysText = durationMatch ? `${durationMatch[1]} Days` : "7 Days";
          const coverImage = item?.slideImg?.[0] || "/img/backgrounds/bg2.jpg";

          return (
            <div key={item?.id}>
              <Link
                href={`/safaris/east-africa-safaris/${item?.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="tourCard -type-1 hover-inside-slider"
              >
                <div className="tourCard__image position-relative">
                  <div className="inside-slider">
                    <div className="cardImage ratio ratio-1:1">
                      <div className="cardImage__content">
                        <Image
                          width={350}
                          height={350}
                          className="col-12 js-lazy"
                          src={coverImage}
                          alt={`${item?.title || "East Africa Safari"} - ${
                            item?.location || "Safari Tour"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="cardImage__leftBadge">
                      <div
                        className="py-5 px-15 rounded-right-4 text-11 lh-16 fw-600 uppercase"
                        style={{
                          letterSpacing: "1px",
                          backgroundColor: "var(--color-blue-1)",
                          color: "#ffffff",
                        }}
                      >
                        {item?.tourType || "Safari Tour"}
                      </div>
                    </div>

                    <div className="tourCard__overlay-content">
                      <div className="d-flex items-center justify-between mb-5">
                        <div className="text-12 text-light-2 fw-500">
                          {item?.location}
                        </div>
                        <div
                          className="d-flex items-center"
                          style={{ color: "#8ec5ff" }}
                        >
                          <i className="icon-star text-10 mr-5" />
                          <span className="text-12 fw-600 text-white">4.9</span>
                          <span className="text-12 text-light-2 ml-5">
                            ({item?.numberOfReviews || "20"})
                          </span>
                        </div>
                      </div>

                      <h4
                        className="tourCard__title text-white text-16 lh-15 fw-600 mb-10"
                        style={{
                          minHeight: "48px",
                          display: "-webkit-box",
                          WebkitLineClamp: "2",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        <span>{item?.title}</span>
                      </h4>

                      <div className="d-flex justify-between items-center pt-10 border-top-light-trans">
                        <div className="d-flex items-center text-12 text-light-2">
                          <i
                            className="icon-clock text-13 mr-5"
                            style={{ color: "#8ec5ff" }}
                          />
                          <span>{daysText}</span>
                        </div>
                        <div
                          className="d-flex items-center text-12 fw-600"
                          style={{ color: "#8ec5ff" }}
                        >
                          <span>View Itinerary</span>
                          <i className="icon-arrow-top-right text-10 ml-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Tours;
