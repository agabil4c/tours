import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import { destinations2 } from "../../data/desinations";

const getDestinationHref = (city = "") => {
  const normalized = city.toLowerCase();
  if (normalized.includes("murchison"))
    return "/destination/uganda/murchison-falls-n.p";
  if (normalized.includes("kidepo"))
    return "/destination/uganda/kidepo-valley-n.p";
  if (normalized.includes("mara"))
    return "/destination/kenya/maasai-mara-national-reserve";
  if (normalized.includes("queen elizabeth"))
    return "/destination/uganda/queen-elizabeth-n.p";
  return "/destination/Uganda";
};

const getDestinationCountry = (city = "") => {
  const normalized = city.toLowerCase();
  if (normalized.includes("mara")) return "Kenya";
  return "Uganda";
};

const PopularDestinations = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Swiper
        spaceBetween={30}
        className="overflow-visible"
        scrollbar={{
          el: ".js-popular-destination-scrollbar",
          draggable: true,
        }}
        modules={[Scrollbar, Navigation]}
        navigation={{
          nextEl: ".js-destination-next",
          prevEl: ".js-destination-prev",
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
        {destinations2.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href={item.link || getDestinationHref(item.city)}
              className="citiesCard -type-1 d-block rounded-16 overflow-hidden"
              key={item.id}
            >
              <div className="citiesCard__image ratio ratio-3:4">
                <Image
                  width={300}
                  height={400}
                  src={item.img}
                  alt={item.city}
                  className="js-lazy"
                />
              </div>
              <div className="citiesCard__content d-flex flex-column justify-between text-center pt-20 pb-20 px-20">
                <div className="citiesCard__bg" />
                <div className="citiesCard__top d-flex justify-start">
                  <div
                    className="py-5 px-15 rounded-100 text-12 fw-600 text-white"
                    style={{
                      backgroundColor: "rgba(13, 40, 87, 0.75)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {getDestinationCountry(item.city)}
                  </div>
                </div>
                <div className="citiesCard__bottom">
                  <h4 className="text-24 md:text-20 lh-13 text-white mb-5">
                    {item.city}
                  </h4>
                  <div className="text-14 text-white opacity-85 mb-15">
                    {item.hoverText}
                  </div>
                  <button
                    className="button col-12 h-50 rounded-8 text-14 fw-600"
                    style={{
                      backgroundColor: "var(--color-blue-1)",
                      color: "#ffffff",
                    }}
                  >
                    {t("discover")}
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <button
          aria-label="Previous destination"
          className="section-slider-nav -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-destination-prev"
        >
          <i className="icon icon-chevron-left text-12" />
        </button>
        <button
          aria-label="Next destination"
          className="section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-destination-next"
        >
          <i className="icon icon-chevron-right text-12" />
        </button>
        <div className="slider-scrollbar bg-light-2 mt-40 js-popular-destination-scrollbar" />
      </div>
    </>
  );
};

export default PopularDestinations;
