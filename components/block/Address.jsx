const Address = () => {
  const addressContent = [
    {
      id: 1,
      colClass: "col-12",
      title: "Office Address",
      content: <>Namugongo, Nsawo Estate Road, Wakiso, Uganda</>,
    },
    {
      id: 2,
      colClass: "col-sm-6",
      title: "Phone / WhatsApp",
      content: (
        <>
          <a
            href="tel:+256702791899"
            style={{ color: "var(--color-blue-1)" }}
          >
            +(256) 702 791899
          </a>
        </>
      ),
    },
    {
      id: 3,
      colClass: "col-sm-6",
      title: "Email Support",
      content: (
        <>
          <a
            href="mailto:info@riverwidesafaris.com"
            style={{ color: "var(--color-blue-1)" }}
          >
            info@riverwidesafaris.com
          </a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div className={`${item.colClass}`} key={item.id}>
          <div className="text-13 text-light-1">{item.title}</div>
          <div className="text-15 fw-600 text-dark-1 mt-4">{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default Address;
