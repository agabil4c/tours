import { useTranslation } from 'next-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import MainFilterSearchBox from "./MainFilterSearchBox";
import Image from "next/image";
import { Parallax } from 'react-parallax';


const Index = () => {
  const { t } = useTranslation('common');
  
  return (
    <section className="masthead -type-9">
      
      {/* <div className="masthead__bg">
        <Image src="/img/masthead/1/bg5.jpg" alt="image"  className="js-lazy" />
      </div> */}
      {/* <div className="masthead-slider js-masthead-slider-7">
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={{
            nextEl: ".hero7-next-active",
            prevEl: ".hero7-prev-active",
          }}
        >
          <SwiperSlide>
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="masthead__content">
                  <div className="masthead__bg">
                    <Image src="/img/masthead/1/bg5.jpg"  alt="image"/>
                  </div>
                  <div
                    className="text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {t('subtitle1')}
                    
                  </div>
                  <h1
                    className="text-60 lg:text-40 md:text-30 text-white"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {t('title1')}
                    <br className="md:d-none" /> {t('title11')}
                    
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="masthead__content">
                  <div className="masthead__bg">
                    <Image src="/img/masthead/1/bg3.jpg"  alt="image"/>
                  </div>
                  <div
                    className="text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {t('subtitle2')}
                    
                  </div>
                  <h1
                    className="text-60 lg:text-40 md:text-30 text-white"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {t('title2')}
                    
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="masthead-slider__nav -prev js-prev">
          <button className="button -outline-white size-50 flex-center text-white rounded-full hero7-prev-active">
            <i className="icon-arrow-left" />
          </button>
        </div>
        

        <div className="masthead-slider__nav -next js-next">
          <button className="button -outline-white size-50 flex-center text-white rounded-full hero7-next-active">
            <i className="icon-arrow-right" />
          </button>
        </div>
        
      </div> */}
      <div className="masthead-slider js-masthead-slider-9">
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={{
            nextEl: ".hero9-next-active",
            prevEl: ".hero9-prev-active",
          }}
        >
          <SwiperSlide>
            <div className="masthead__bg bg-dark-3">
              <Parallax
                strength={300}
                bgImage="/img/masthead/1/bg5.jpg"
                bgImageAlt="amazing place"
                bgClassName="object-fit-cover"
                className="h-100"
              ></Parallax>
            </div>
            {/* End .masthead__bg */}

            <div className="container">
              <div className="row justify-center">
                <div className="col-xl-9">
                  <div className="text-center">
                    <div
                      className="text-white fw-500 uppercase mb-10"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      {t('subtitle1')}
                    </div>
                    <h1
                      className="text-60 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      {t('title1')}
                      <br className="md:d-none" /> {t('title11')}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* End .container */}
          </SwiperSlide>
          <SwiperSlide>
            <div className="masthead__bg bg-dark-3">
              <Parallax
                strength={300}
                bgImage="/img/masthead/1/bg3.jpg"
                bgImageAlt="amazing place"
                bgClassName="object-fit-cover"
                className="h-100"
              ></Parallax>
            </div>
            {/* End .masthead__bg */}

            <div className="container">
              <div className="row justify-center">
                <div className="col-xl-9">
                  <div className="text-center">
                    <div
                      className="text-white fw-500 uppercase mb-10"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      {t('subtitle1')}
                    </div>
                    <h1
                      className="text-60 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      {t('title1')}
                      <br className="md:d-none" /> {t('title11')}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* End .container */}
          </SwiperSlide>
        </Swiper>

        <div className="masthead-slider__nav -prev">
          <button className="button py-10 hero9-prev-active">
            <span className="h-1 w-48 bg-white"></span>
          </button>
        </div>

        <div className="masthead-slider__nav -next">
          <button className="button py-10 hero9-next-active">
            <span className="h-1 w-48 bg-white"></span>
          </button>
        </div>
      </div>
      {/*  */}
      {/* <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center">
              <h1
                className="text-60 lg:text-40 md:text-30 text-white"
                data-aos="fade-up"
              >
                We are your Adventure Companion
              </h1>
              <p
                className="text-white mt-6 md:mt-10"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Discover amazing places at exclusive deals
              </p>
            </div>
           
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Index;
