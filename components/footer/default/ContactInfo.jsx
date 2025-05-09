const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Find us at",
      action: "",
      text: "Namugongo, Nsawo estate road, Wakiso Uganda",
    },
    {
      id: 2,
      title: "Call us to Book",
      action: "tel:+(256) 702 791899",
      text: "+(256) 702 791899",
    },
    {
      id: 3,
      title: "Send us an email",
      action: "mailto:info@riverwidesafaris.com",
      text: "info@riverwidesafaris.com",
    },
    
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-15" key={item.id}>
          <div className={"text-14 mt-15"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-blue-1 mt-5">
            {item.text}
          </a>
        </div>
        
      ))}
    </>
  );
};

export default ContactInfo;
