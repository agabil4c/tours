import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const Index = () => {
  const { t } = useTranslation("common");

  const slides = [
    {
      id: 1,
      bgImage: "/img/backgrounds/bg2.jpg",
      bgAlt: "Murchison Falls Nile Boat Cruise - Elephant",
      subtitle: t("subtitle1"),
      title: t("title1"),
      titleBreak: t("title11"),
      description:
        "Tailor-made gorilla trekking, Big Five game drives, and luxury eco-safaris across Uganda, Rwanda, Kenya & Tanzania.",
      primaryHref: "/safaris/east-africa-safaris",
      primaryText: "Explore Safari Packages",
    },
    {
      id: 2,
      bgImage:
        "/img/destinations/3/rwanda/mountain-gorillas-gorilla-beringei-beringei.jpg",
      bgAlt: "Mountain Gorilla Trekking in Bwindi Forest",
      subtitle: "ONCE-IN-A-LIFETIME PRIMATE ENCOUNTERS",
      title: "Trek Mountain Gorillas",
      titleBreak: "in Bwindi & Volcanoes",
      description:
        "Encounter endangered mountain gorillas in Bwindi Impenetrable Forest and Volcanoes National Park with expert local guides.",
      primaryHref: "/safaris/gorilla-treks",
      primaryText: "View Gorilla Treks",
    },
    {
      id: 3,
      bgImage: "/img/destinations/3/uganda/elephant-savanna.jpg",
      bgAlt: "Big Five Wildlife Safari in Masai Mara and Murchison Falls",
      subtitle: "ICONIC EAST AFRICA WILDLIFE",
      title: "Witness the Great Savannah",
      titleBreak: "& Big Five Safaris",
      description:
        "From the thundering waters of Murchison Falls to the endless plains of the Masai Mara, experience Africa at its wildest.",
      primaryHref: "/destination/Uganda",
      primaryText: "Explore Destinations",
    },
  ];

  return (
    <section className="masthead -type-9">
      <div className="masthead-slider js-masthead-slider-9">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".hero9-next-active",
            prevEl: ".hero9-prev-active",
          }}
          className="h-100"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              {/* Background Wrap */}
              <div
                className="masthead__bg bg-dark-3"
                role="img"
                aria-label={slide.bgAlt}
                style={{
                  backgroundImage: `url("${slide.bgImage}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(180deg, rgba(11, 28, 51, 0.35) 0%, rgba(11, 28, 51, 0.68) 100%)",
                    zIndex: 1,
                  }}
                />
              </div>

              {/* Text Content Container */}
              <div
                className="container"
                style={{ position: "relative", zIndex: 2 }}
              >
                <div className="row justify-center">
                  <div className="col-xl-9 col-lg-10">
                    <div className="text-center">
                      <div
                        className="d-inline-block text-13 fw-600 uppercase mb-15 rounded-100"
                        style={{
                          padding: "6px 18px",
                          letterSpacing: "2.5px",
                          color: "#b8e0f8",
                          backgroundColor: "rgba(13, 40, 87, 0.6)",
                          border: "1px solid rgba(184, 224, 248, 0.45)",
                          backdropFilter: "blur(6px)",
                        }}
                      >
                        {slide.subtitle}
                      </div>

                      <h1
                        className="text-60 lg:text-40 md:text-30 text-white fw-700"
                        style={{
                          textShadow: "0 4px 18px rgba(0,0,0,0.45)",
                          lineHeight: "1.18",
                        }}
                      >
                        {slide.title}
                        {slide.titleBreak && (
                          <>
                            <br className="md:d-none" /> {slide.titleBreak}
                          </>
                        )}
                      </h1>

                      <p
                        className="text-white text-18 md:text-15 mt-15 mx-auto"
                        style={{
                          maxWidth: "660px",
                          opacity: 0.92,
                          lineHeight: "1.6",
                          textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                        }}
                      >
                        {slide.description}
                      </p>

                      <div
                        className="d-flex justify-center items-center flex-wrap mt-30"
                        style={{ gap: "20px" }}
                      >
                        <Link
                          href={slide.primaryHref}
                          className="button h-50 px-30 rounded-100 text-15 fw-600 d-inline-flex items-center"
                          style={{
                            backgroundColor: "var(--color-blue-1)",
                            color: "#ffffff",
                            boxShadow: "0 8px 24px rgba(13, 40, 87, 0.35)",
                          }}
                        >
                          {slide.primaryText}
                          <i className="icon-arrow-top-right ml-10 text-12" />
                        </Link>
                        <Link
                          href="/contact"
                          className="button h-50 px-30 rounded-100 text-15 fw-600 text-white d-inline-flex items-center"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.14)",
                            border: "1px solid rgba(255, 255, 255, 0.5)",
                            backdropFilter: "blur(6px)",
                          }}
                        >
                          Tailor-Make Your Trip
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dynamic Nav Buttons */}
        <div className="masthead-slider__nav -prev">
          <button
            className="button size-50 rounded-full flex-center hero9-prev-active"
            aria-label="Previous Slide"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.35)",
              backdropFilter: "blur(6px)",
            }}
          >
            <i className="icon-chevron-left text-14 text-white" />
          </button>
        </div>

        <div className="masthead-slider__nav -next">
          <button
            className="button size-50 rounded-full flex-center hero9-next-active"
            aria-label="Next Slide"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.35)",
              backdropFilter: "blur(6px)",
            }}
          >
            <i className="icon-chevron-right text-14 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;