import { useTranslation } from 'next-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Parallax } from 'react-parallax';

const Index = () => {
  const { t } = useTranslation('common');

  // 1. Centralized dynamic slide data to keep code clean and maintainable
  const slides = [
    {
      id: 1,
      bgImage: "/img/backgrounds/bg2.jpg",
      bgAlt: "Murchison Falls Nile Boat Cruise - Elephant",
      subtitle: t('subtitle1'),
      title: t('title1'),
      titleBreak: t('title11'),
    },
    {
      id: 2,
      // Updated with a representative gorilla path to showcase diversity immediately
      bgImage: "/img/new_pics/gorilla_hero.jpeg",
      bgAlt: "Mountain Gorilla Trekking in Bwindi Forest",
      subtitle: t('subtitle2'),
      title: t('title2'),
      titleBreak: t('title22'), // Ensure you have this translation or falls back nicely
    }
  ];

  return (
    <section className="masthead -type-9">
      <div className="masthead-slider js-masthead-slider-9">
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={{
            nextEl: ".hero9-next-active",
            prevEl: ".hero9-prev-active",
          }}
          className="h-100"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              {/* Background Wrap */}
              <div className="masthead__bg bg-dark-3">
                <Parallax
                  strength={300}
                  bgImage={slide.bgImage}
                  bgImageAlt={slide.bgAlt}
                  bgClassName="object-fit-cover"
                  style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, height: '100%', width: '100%' }}
                />
                {/* Visual Overlay Gradient: 
                  Reduces glare, making text readable even on very bright background images
                */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.6) 100%)',
                  zIndex: 1
                }} />
              </div>

              {/* Text Content Container */}
              <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row justify-center">
                  <div className="col-xl-9">
                    <div className="text-center">
                      <div
                        className="text-white fw-600 uppercase mb-10"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        style={{ letterSpacing: "3px", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
                      >
                        {slide.subtitle}
                      </div>
                      <h1
                        className="text-60 lg:text-40 md:text-30 text-white fw-700"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        style={{ textShadow: "0 4px 15px rgba(0,0,0,0.5)", lineHeight: "1.2" }}
                      >
                        {slide.title}
                        {slide.titleBreak && (
                          <>
                            <br className="md:d-none" /> {slide.titleBreak}
                          </>
                        )}
                      </h1>
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
            className="button py-10 hero9-prev-active"
            aria-label="Previous Slide"
          >
            <span className="h-1 w-48 bg-white transition-all"></span>
          </button>
        </div>

        <div className="masthead-slider__nav -next">
          <button
            className="button py-10 hero9-next-active"
            aria-label="Next Slide"
          >
            <span className="h-1 w-48 bg-white transition-all"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;