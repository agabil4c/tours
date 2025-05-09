import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const AddBanner = () => {
  const { t } = useTranslation('common');
  // const addContent = [
  //   {
  //     id: 1,
  //     img: "/img/backgrounds/12.jpg",
  //     title: (
  //       <>
  //         Things To Do On
  //         <br /> Your Trip
  //       </>
  //     ),
  //     meta: "",
  //     routerPath: "/",
  //     delayAnimation: "0",
  //   },
    
  // ];

  const addContent = [
    {
      id: 1,
      img: "/img/destinations/3/rwanda/mountain-gorillas-gorilla-beringei-beringei.jpg",
      title: "Visit Rwanda",
      meta: "",
      routerPath: "/destination/Rwanda",
      delayAnimation: "100",
    },
    {
      id: 2,
      img: "/img/destinations/3/uganda/trekking.jpg",
      title: "Explore Uganda",
      meta: "",
      routerPath: "/destination/Uganda",
      delayAnimation: "200",
    },
    {
      id: 3,
      img: "/img/destinations/3/kenya/giraffe-wild.jpg",
      title: "Visit Kenya",
      meta: "Enjoy Summer Deals",
      routerPath: "/destination/Kenya",
      delayAnimation: "300",
    },
    {
      id: 3,
      img: "/img/destinations/3/kenya/tz.jpg",
      title: "Visit Tanzania",
      meta: "Enjoy Summer Deals",
      routerPath: "/",
      delayAnimation: "300",
    },
  ];

  return (
    <>
      <div
        className="col-md-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="ctaCard -type-1 rounded-4 ">
          <div className="ctaCard__image ratio ratio-63:55">
            <Image
              width={636}
              height={555}
              className="img-ratio js-lazy loaded"
              src="/img/backgrounds/12.jpg"
              alt="image"
            />
          </div>
          <div className="ctaCard__content py-70 px-70 lg:py-30 lg:px-30">
              <h4 className="text-30 lg:text-26 text-white">
              {t('line1')} 
              </h4>

              <div className="mt-30">
                <p className="text-20 lg:text-24 text-white mb-2">{t('line2')}</p>
                <p className="text-20 lg:text-24 text-white mb-2">{t('line3')}</p>
                <p className="text-20 lg:text-24 text-white">{t('line4')}</p>
              </div>
            </div>
        </div>
      </div>
      <div
        className="col-md-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row y-gap-20">
          {addContent.map((item) => (
            <div
              className="col-lg-6 col-sm-6"
              data-aos="fade"
              data-aos-delay={item.delayAnimation}
              key={item.id}
            >
              <div className="ctaCard -type-1 rounded-4 -no-overlay">
                <div className="ctaCard__image ratio ratio-41:35">
                  <Image
                    width={410}
                    height={455}
                    className="js-lazy img-ratio"
                    src={item.img}
                    alt="image"
                  />
                </div>
                <div className="ctaCard__content py-50 px-50 xl:py-30 xl:px-30">
                  

                  <h4 className="text-20 xl:text-24 text-white">{item.title}</h4>
                  <div className="d-inline-block mt-30">
                    {/* <Link
                      href={item.routerPath}
                      className="button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1"
                    >
                      See more
                    </Link> */}
                    <a class="button h-50 px-24 -dark-1 bg-blue-1 text-white" href={item.routerPath}>{t('seeMore')} <div class="icon-arrow-top-right ml-15"></div></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddBanner;
