import dynamic from "next/dynamic";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import CallToActions from "../components/common/CallToActions";
import Seo from "../components/common/Seo";
import DefaultHeader from "../components/header/default-header";
import TopHeader from "../components/header/header-9/top-header";
import DefaultFooter from "../components/footer/default";
import WhyChoose from "../components/block/BlockGuide";
import Address from "../components/block/Address";
import Social from "../components/common/social/Social";
import ContactForm from "../components/common/ContactForm";
import LocationTopBar from "../components/common/LocationTopBar";

const Contact = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Seo
        pageTitle="Contact Us - Book Your Uganda, Rwanda & Kenya Safari"
        description="Contact Riverwide Trekkers Safaris in Wakiso, Kampala, Uganda to plan your custom East Africa wildlife safari, gorilla trekking permit, or Masai Mara tour. Call +(256) 702 791899 or email info@riverwidesafaris.com."
        keywords="Contact Riverwide Trekkers Safaris, book Uganda safari, gorilla trekking inquiry, Kampala safari operator contact"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact Us", url: "/contact" },
        ]}
      />
      {/* End Page Title */}

      {/* <TopHeader /> */}
      {/* End Header top Banner */}
      <div className="header-margin"></div>
      {/* header top margin */}

      

      <DefaultHeader />
      {/* End Header 1 */}

      <LocationTopBar />
      {/* End location top bar section */}

      <section
        className="layout-pt-md layout-pb-lg"
        style={{ backgroundColor: "#f6f9fd" }}
      >
        <div className="container">
          <div className="row x-gap-40 y-gap-30 justify-between items-start">
            {/* Left Column: Safari Planning Guide & Direct Contact Info */}
            <div className="col-xl-5 col-lg-5">
              <div
                className="d-inline-block text-12 fw-600 uppercase mb-10 rounded-100"
                style={{
                  padding: "6px 16px",
                  letterSpacing: "2px",
                  color: "var(--color-blue-1)",
                  backgroundColor: "var(--color-blue-2)",
                }}
              >
                Tailor-Made East Africa Safaris
              </div>

              <h1 className="text-30 sm:text-24 fw-700 text-dark-1 lh-13">
                Inquire &amp; Plan Your Dream Safari
              </h1>

              <p className="text-15 text-light-1 mt-15 lh-16">
                Whether you want to trek mountain gorillas in Bwindi and
                Volcanoes National Park, witness the Big Five in Murchison Falls
                and Masai Mara, or craft a custom multi-country itinerary, our
                local safari specialists are ready to design every detail around
                your dates and budget.
              </p>

              {/* How It Works Box */}
              <div
                className="bg-white rounded-16 py-24 px-24 mt-30"
                style={{
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 8px 24px rgba(13, 40, 87, 0.04)",
                }}
              >
                <h3 className="text-16 fw-600 text-dark-1 mb-15">
                  How Trip Planning Works
                </h3>
                <div className="d-flex flex-column y-gap-15">
                  <div className="d-flex items-start">
                    <div
                      className="size-30 rounded-full flex-center text-13 fw-700 text-white mr-15"
                      style={{ backgroundColor: "var(--color-blue-1)" }}
                    >
                      1
                    </div>
                    <div>
                      <div className="text-14 fw-600 text-dark-1">
                        Share Your Travel Vision
                      </div>
                      <div className="text-13 text-light-1 mt-4">
                        Select your preferred countries, travel dates, group
                        size, and comfort style.
                      </div>
                    </div>
                  </div>

                  <div className="d-flex items-start">
                    <div
                      className="size-30 rounded-full flex-center text-13 fw-700 text-white mr-15"
                      style={{ backgroundColor: "var(--color-blue-1)" }}
                    >
                      2
                    </div>
                    <div>
                      <div className="text-14 fw-600 text-dark-1">
                        Receive a Custom Itinerary &amp; Quote
                      </div>
                      <div className="text-13 text-light-1 mt-4">
                        Within 24 hours, a dedicated specialist sends a tailored
                        day-by-day plan and transparent pricing.
                      </div>
                    </div>
                  </div>

                  <div className="d-flex items-start">
                    <div
                      className="size-30 rounded-full flex-center text-13 fw-700 text-white mr-15"
                      style={{ backgroundColor: "var(--color-blue-1)" }}
                    >
                      3
                    </div>
                    <div>
                      <div className="text-14 fw-600 text-dark-1">
                        Fine-Tune &amp; Secure Your Permits
                      </div>
                      <div className="text-13 text-light-1 mt-4">
                        We refine the itinerary together and reserve your
                        gorilla permits, lodges, and 4x4 safari vehicle.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact Info Box */}
              <div
                className="bg-white rounded-16 py-24 px-24 mt-20"
                style={{
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 8px 24px rgba(13, 40, 87, 0.04)",
                }}
              >
                <h3 className="text-16 fw-600 text-dark-1 mb-15">
                  {t("contactUs")} Directly
                </h3>
                <div className="row y-gap-15">
                  <Address />
                </div>

                <div className="border-top-light pt-15 mt-20">
                  <div className="text-13 text-light-1">{t("followUs")}</div>
                  <div className="d-flex x-gap-20 items-center mt-10">
                    <Social />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Trip Planner & Inquiry Form */}
            <div className="col-xl-7 col-lg-7">
              <div
                className="px-40 pt-40 pb-40 lg:px-30 lg:py-30 md:px-24 md:py-24 bg-white rounded-16"
                style={{
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 12px 40px rgba(13, 40, 87, 0.08)",
                }}
              >
                <div className="text-24 fw-600 text-dark-1">
                  Safari Inquiry &amp; Trip Planner
                </div>
                <p className="text-14 text-light-1 mt-5">
                  Fill in your preferences below and we&apos;ll craft a
                  personalized East Africa safari proposal for you.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End contact & trip planner section */}

      <div className="map-outer">
        <div className="map-canvas">
          <iframe
            title="Riverwide Trekkers Safaris Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.123456789!2d32.664586!3d0.383514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb1234567890%3A0xabcdef1234567890!2sNamugongo%2C%20Wakiso%2C%20Uganda!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* End map section */}

      
      {/* End Why Choose Us section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Contact;
