import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { hotelsData } from "../../data/hotels";
import isTextMatched from "../../utils/isTextMatched";
import { destinations6, kenya, rwanda, uganda } from "../../data/desinations";
import { useEffect, useState } from "react";

const TopDestinations2 = ({destination}) => {
  const [destinationData, setDestinationData] = useState(null);
  
    useEffect(() => {
      if (destination) {
        // Handle the tour data based on the tourName
        switch (destination.toLowerCase()) {
          case 'uganda':
            setDestinationData(uganda);
            break;
          case 'kenya':
            setDestinationData(kenya);
            break;
          case 'rwanda':
            setDestinationData(rwanda);
            break;
          default:
            setDestinationData([]); // Or handle a fallback
            break;
        }
      }
    }, [destination]);

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
  function ArrowSlick(props) {
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
      {destinationData && destinationData.map((item) => (
        <div
          className="col-xl-2 col-lg-2 col-sm-4"
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href={`/destination/${destination?.toLowerCase()}/${item?.location?.toLowerCase().replace(/\s+/g, "-")}`}
            className="hotelsCard -type-1 hover-inside-slider"
          >
            <div className="hotelsCard__image">
              <div className="cardImage inside-slider">
                {/* <Slider
                  {...itemSettings}
                  arrows={true}
                  nextArrow={<ArrowSlick type="next" />}
                  prevArrow={<ArrowSlick type="prev" />}
                >
                  {item?.img?.map((slide, i) => (
                    
                  ))}
                </Slider> */}
                <div className="cardImage ratio ratio-1:1">
                  <div className="cardImage__content ">
                    <Image
                      width={300}
                      height={300}
                      className="rounded-4 col-12 js-lazy"
                      src={item.img}
                      alt="image"
                    />
                  </div>
                </div>

                {/* <div className="cardImage__wishlist">
                  <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                    <i className="icon-heart text-12" />
                  </button>
                </div> */}

                <div className="cardImage__leftBadge">
                  <div
                    className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
                      isTextMatched(item?.tag, "breakfast included")
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
                    {item?.tag}
                  </div>
                </div>
              </div>
            </div>
            <div className="hotelsCard__content mt-10">
              <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                <span>{item?.location}</span>
              </h4>
              {/* <p className="text-light-1 lh-14 text-14 mt-5">
                {item?.properties} properties
              </p> */}
              
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TopDestinations2;
