import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import DefaultHeader from "../../../components/header/default-header";
import DefaultFooter from "../../../components/footer/default";
import StepperBooking from "../../../components/booking-page/stepper-booking";
import { useRouter } from 'next/router';
import { useTranslation } from "react-i18next";

const HotelBookingPage = () => {

  const router = useRouter();
  const bookingData = {
    tour: router.query.tour ? JSON.parse(router.query.tour) : null,
    dates: router.query.dates ? JSON.parse(router.query.dates) : null,
    guests: router.query.guests ? JSON.parse(router.query.guests) : null
  };

  return (
    <>
      <Seo pageTitle="Hotel Booking Page" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="pt-40 layout-pb-md">
        <div className="container">
          <StepperBooking data={bookingData}/>
        </div>
        {/* End container */}
      </section>
      {/* End stepper */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default HotelBookingPage;
