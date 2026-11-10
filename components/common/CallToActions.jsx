import { useState } from "react";

const CallToActions = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Thank you for subscribing!");
        setEmail("");
      } else {
        alert("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section
      className="layout-pt-md layout-pb-md"
      style={{ backgroundColor: "#0d2857" }}
    >
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-auto">
            <div className="row y-gap-20 flex-wrap items-center">
              <div className="col-auto">
                <div
                  className="icon-newsletter text-60 sm:text-40"
                  style={{ color: "#8ec5ff" }}
                />
              </div>
              <div className="col-auto">
                <h4 className="text-26 text-white fw-600">
                  Your East Africa Safari Journey Starts Here
                </h4>
                <div className="text-white opacity-80 mt-5">
                  Sign up and we&apos;ll send seasonal safari offers &amp;
                  gorilla trekking guides to you
                </div>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
              <div>
                <input
                  className="bg-white h-60 rounded-8 px-20"
                  type="email"
                  placeholder="Your Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* End email input */}

              <div>
                <button
                  className="button -md h-60 px-30 rounded-8 fw-600"
                  style={{
                    backgroundColor: "var(--color-blue-1)",
                    color: "#ffffff",
                  }}
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              </div>
              {/* End subscribe btn */}
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default CallToActions;
