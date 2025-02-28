const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/2.svg ",
      title: "Wide range of safaris",
      text: `Choose from a variety of tailor-made safari packages.`,
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/3.svg",
      title: "Experienced safari guides",
      text: `Our guides offer precise and excellence memorable service.`,
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/1.svg",
      title: "Safety and responsible tourism practices",
      text: `Your safety is our priority as you enjoy your adventures.`,
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
              <img src={item.icon} alt="image" className="js-lazy" />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
