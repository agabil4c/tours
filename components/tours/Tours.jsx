import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import isTextMatched from "../../utils/isTextMatched";
import { EASafaris, toursData } from "../../data/tours";

const Tours = () => {
  var settings = {
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

  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
  function Arrow(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      <Slider {...settings}>
        {EASafaris.slice(0, 4).map((item) => (
          <div
            key={item?.id}
            data-aos="fade"
            data-aos-delay={item?.delayAnimation}
          >
            <Link
              href={`/safaris/east-africa-safaris/${item?.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="tourCard -type-1 hover-inside-slider"
            >
              <div className="tourCard__image position-relative">
                <div className="inside-slider">
                  <Slider
                    {...itemSettings}
                    arrows={true}
                    nextArrow={<Arrow type="next" />}
                    prevArrow={<Arrow type="prev" />}
                  >
                    {item?.slideImg?.map((slide, i) => (
                      <div className="cardImage ratio ratio-1:1" key={i}>
                        <div className="cardImage__content ">
                          <Image
                            width={300}
                            height={300}
                            className="col-12 js-lazy"
                            src={slide}
                            alt="image"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>

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
      </Slider>
    </>
  );
};

export default Tours;
