import Link from "next/link";
import BookingDetails from "./sidebar/BookingDetails";
import { useState } from "react";

const CustomerInfo = ({ formData, setFormData, tour }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
 
  return (
    <>
      <div className="col-xl-7 col-lg-8 mt-30">
        <h2 className="text-22 fw-500 mt-40 md:mt-24">
          Let us know who you are
        </h2>
        <div className="row x-gap-20 y-gap-20 pt-20">
          <div className="col-12">
            <div className="form-input ">
              <input type="text" name="name" value={formData.name}
            onChange={handleChange} required />
              <label className="lh-1 text-16 text-light-1">Full Name</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input type="text" name="email" value={formData.email}
            onChange={handleChange} required />
              <label className="lh-1 text-16 text-light-1">Email</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input type="text" name="phone" value={formData.phone}
            onChange={handleChange} required />
              <label className="lh-1 text-16 text-light-1">Phone Number</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input ">
              <input type="text" name="address" value={formData.address}
            onChange={handleChange} required />
              <label className="lh-1 text-16 text-light-1">
                Address line 1
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input ">
              <input type="text" name="address2" value={formData.address2}
            onChange={handleChange} required />
              <label className="lh-1 text-16 text-light-1">
                Address line 2
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input type="text" name="state" value={formData.state}
            onChange={handleChange} required />
              <label className="lh-1 text-16 text-light-1">
                State/Province/Region
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input type="text" name="zip" value={formData.zip}
            onChange={handleChange} required />
              <label className="lh-1 text-16 text-light-1">
                ZIP code/Postal code
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input ">
              <textarea required name="request" value={formData.request}
            onChange={handleChange} rows={6} />
              <label className="lh-1 text-16 text-light-1">
                Special Requests
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="row y-gap-20 items-center justify-between">
              <div className="col-auto">
                <div className="text-14 text-light-1">
                  By proceeding with this booking, I agree to Riverwide Trekkers Safaris Terms of
                  Use and Privacy Policy.
                </div>
              </div>
              {/* End col-12 */}
            </div>
          </div>
          {/* End col-12 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col-xl-7 */}

      <div className="col-xl-5 col-lg-4 mt-30">
        <div className="booking-sidebar">
          <BookingDetails tour={tour}/>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default CustomerInfo;
