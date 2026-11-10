import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const AddBanner = () => {
  const { t } = useTranslation("common");

  const addContent = [
    {
      id: 1,
      img: "/img/destinations/3/rwanda/mountain-gorillas-gorilla-beringei-beringei.jpg",
      title: "Visit Rwanda",
      subtitle: "Land of a Thousand Hills",
      routerPath: "/destination/Rwanda",
      delayAnimation: "100",
    },
    {
      id: 2,
      img: "/img/destinations/3/uganda/trekking.jpg",
      title: "Explore Uganda",
      subtitle: "The Pearl of Africa",
      routerPath: "/destination/Uganda",
      delayAnimation: "200",
    },
    {
      id: 3,
      img: "/img/destinations/3/kenya/giraffe-wild.jpg",
      title: "Visit Kenya",
      subtitle: "Home of the Masai Mara",
      routerPath: "/destination/Kenya",
      delayAnimation: "300",
    },
    {
      id: 4,
      img: "/img/destinations/3/kenya/tz.jpg",
      title: "Visit Tanzania",
      subtitle: "Serengeti & Ngorongoro",
      routerPath: "/safaris/east-africa-safaris",
      delayAnimation: "300",
    },
  ];

  return (
    <>
      <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div className="ctaCard -type-1 rounded-16 overflow-hidden">
          <div className="ctaCard__image ratio ratio-63:55">
            <Image
              width={636}
              height={555}
              className="img-ratio js-lazy loaded"
              src="/img/backgrounds/12.jpg"
              alt="Eco-tourism and sustainable wildlife safaris in East Africa"
            />
          </div>
          <div
            className="ctaCard__content d-flex flex-column justify-end py-50 px-50 lg:py-30 lg:px-30"
            style={{
              background:
                "linear-gradient(180deg, rgba(11, 28, 51, 0.15) 0%, rgba(11, 28, 51, 0.88) 100%)",
            }}
          >
            <div
              className="d-inline-block text-12 fw-600 uppercase mb-10"
              style={{
                letterSpacing: "2px",
                color: "#8ec5ff",
              }}
            >
              Eco-Conscious Adventures
            </div>
            <h3 className="text-30 lg:text-24 text-white fw-600 lh-13">
              {t("line1")}
            </h3>

            <div className="mt-15">
              <p className="text-16 lg:text-15 text-white opacity-90 lh-16">
                {t("line2")} {t("line3")} {t("line4")}
              </p>
            </div>

            <div className="mt-24">
              <Link
                href="/about-us"
                className="button h-50 px-24 rounded-100 text-14 fw-600 d-inline-flex items-center"
                style={{
                  backgroundColor: "var(--color-blue-1)",
                  color: "#ffffff",
                }}
              >
                Our Conservation Story
                <div className="icon-arrow-top-right ml-10 text-12" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6" data-aos="fade-up" data-aos-delay="150">
        <div className="row y-gap-20">
          {addContent.map((item) => (
            <div
              className="col-lg-6 col-sm-6"
              data-aos="fade"
              data-aos-delay={item.delayAnimation}
              key={item.id}
            >
              <div className="ctaCard -type-1 rounded-16 overflow-hidden -no-overlay">
                <div className="ctaCard__image ratio ratio-41:35">
                  <Image
                    width={410}
                    height={350}
                    className="js-lazy img-ratio"
                    src={item.img}
                    alt={`${item.title} - Riverwide Trekkers Safaris`}
                  />
                </div>
                <div
                  className="ctaCard__content d-flex flex-column justify-end py-30 px-30 xl:py-24 xl:px-24"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(11, 28, 51, 0.08) 0%, rgba(11, 28, 51, 0.84) 100%)",
                  }}
                >
                  <div
                    className="text-12 fw-500 uppercase mb-4"
                    style={{
                      letterSpacing: "1.2px",
                      color: "#8ec5ff",
                    }}
                  >
                    {item.subtitle}
                  </div>
                  <h4 className="text-22 xl:text-20 text-white fw-600">
                    {item.title}
                  </h4>
                  <div className="d-inline-block mt-15">
                    <Link
                      className="button h-40 px-20 rounded-100 text-13 fw-600 d-inline-flex items-center"
                      href={item.routerPath}
                      style={{
                        backgroundColor: "var(--color-blue-1)",
                        color: "#ffffff",
                      }}
                    >
                      {t("seeMore")}
                      <div className="icon-arrow-top-right ml-10 text-11" />
                    </Link>
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
