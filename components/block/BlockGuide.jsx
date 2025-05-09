import Image from "next/image";
import { useTranslation } from 'next-i18next';

const BlockGuide = () => {
  const { t } = useTranslation('common');
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/2.svg ",
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
      icon: "/img/featureIcons/1/1.svg",
      title: "responsibility",
      text: "responsibility_desc",
      delayAnim: "300",
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
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
              <Image src={item.icon} alt="image" className="js-lazy" />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{t(item.title)}</h4>
              <p className="text-15 mt-10">{t(item.text)}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
