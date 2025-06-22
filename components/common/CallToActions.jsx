import { useState } from "react";

const CallToActions = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }
  
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        alert('Thank you for subscribing!');
        setEmail(''); // Clear the input field
      } else {
        alert('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };
  
  return (
    <section className="layout-pt-md layout-pb-md bg-dark-3">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-auto">
            <div className="row y-gap-20  flex-wrap items-center">
              <div className="col-auto">
                <div className="icon-newsletter text-60 sm:text-40 text-white" />
              </div>
              <div className="col-auto">
                <h4 className="text-26 text-white fw-600">
                  Your Travel Journey Starts Here
                </h4>
                <div className="text-white">
                  Sign up and we`&apos;ll send the best deals to you
                </div>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
              <div>
                <input
                  className="bg-white h-60"
                  type="text"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* End email input */}

              <div>
                <button className="button -md h-60 bg-blue-1 text-white" onClick={handleSubscribe}>
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
