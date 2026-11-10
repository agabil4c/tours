import Image from "next/image";
import { useTranslation } from "next-i18next";

const BlockGuide = () => {
  const { t } = useTranslation("common");
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/2.svg",
      title: "sustainability",
      text: "sustainability_desc",
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/3.svg",
      title: "communityEmpowerment",
      text: "communityEmpowerment_desc",
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/1.svg",
      title: "excellence",
      text: "excellence_desc",
      delayAnim: "300",
    },
    {
      id: 4,
      icon: "/img/featureIcons/2/1.svg",
      title: "responsibility",
      text: "responsibility_desc",
      delayAnim: "400",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div
            className="featureIcon -type-1 h-full"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(43, 114, 184, 0.12)",
              boxShadow: "0 10px 30px rgba(13, 40, 87, 0.05)",
            }}
          >
            <div className="d-flex justify-center">
              <div
                className="size-70 rounded-full flex-center"
                style={{ backgroundColor: "rgba(43, 114, 184, 0.12)" }}
              >
                <Image
                  src={item.icon}
                  width={40}
                  height={40}
                  alt={t(item.title)}
                  className="js-lazy"
                />
              </div>
            </div>
            <div className="text-center mt-24">
              <h4 className="text-18 fw-600 text-dark-1">{t(item.title)}</h4>
              <p className="text-15 text-light-1 mt-10 lh-16">{t(item.text)}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
