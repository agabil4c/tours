import React, { useState } from "react";
import CustomerInfo from "../CustomerInfo";
import PaymentInfo from "../PaymentInfo";
import OrderSubmittedInfo from "../OrderSubmittedInfo";

const Index = ({data}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    address2: '',
    state: '',
    zip: '',
    request: '',
    // Tour details from props
    tourId: data?.tour?.id,
    title: data?.tour?.title,
    checkin: data?.dates?.startDate,
    checkout: data?.dates?.endDate,
    guests: data?.guests
  });

  const steps = [
    {
      title: "Personal Details",
      stepNo: "1",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: <CustomerInfo 
          formData={formData} 
          setFormData={setFormData} 
          tour={data}
        />,
    },
    
    {
      title: "Final Step",
      stepNo: "2",
      stepBar: "",
      content: <OrderSubmittedInfo />,
    },
  ];

  const validateCurrentStep = () => {
    if (currentStep === 0) { // Validate personal details step
      if (!formData.name || !formData.email || !formData.phone) {
        alert('Please fill in all required fields');
        return false;
      }
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        alert('Please enter a valid email address');
        return false;
      }
    }
    return true;
  };


  const renderStep = () => {
    const { content } = steps[currentStep];
    return <>{content}</>;
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateCurrentStep()) return;
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Booking failed');
      
      // On success, move to confirmation step
      alert('Your booking has been submitted, we shall contact you soon.');
      nextStep();
    } catch (error) {
      console('Booking error:', error);
      alert('Booking failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <div className="row x-gap-40 y-gap-30 items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="col-auto">
              <div
                className="d-flex items-center cursor-pointer transition"
                onClick={() => setCurrentStep(index)}
              >
                <div
                  className={
                    currentStep === index
                      ? "active size-40 rounded-full flex-center bg-blue-1"
                      : "size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500"
                  }
                >
                  {currentStep === index ? (
                    <>
                      <i className="icon-check text-16 text-white"></i>
                    </>
                  ) : (
                    <>
                      <span>{step.stepNo}</span>
                    </>
                  )}
                </div>

                <div className="text-18 fw-500 ml-10"> {step.title}</div>
              </div>
            </div>
            {/* End .col */}

            {step.stepBar}
          </React.Fragment>
        ))}
      </div>
      {/* End stepper header part */}

      <div className="row">{renderStep()}</div>
      {/* End main content */}

      <div className="row x-gap-20 y-gap-20 pt-20">
        <div className="col-auto">
          <button
            className="button h-60 px-24 -blue-1 bg-dark-3 text-white"
            disabled={currentStep === 0 || isSubmitting}
            onClick={previousStep}
          >
            Previous
          </button>
        </div>
        {/* End prvious btn */}

        <div className="col-auto">
          {currentStep === steps.length - 1 ? (
          <button
            className="button h-60 px-24 -dark-1 bg-dark text-white"
            //disabled={currentStep === steps.length - 1}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <i className="icon-spinner animate-spin mr-10"></i>
                Processing...
              </span>
            ) : (
              "Confirm Booking"
            )}
              </button>
            ) : (
              <button
                className="button h-60 px-24 -dark-1 bg-dark text-white"
                onClick={nextStep}
                disabled={isSubmitting}
              >
                Next <div className="icon-arrow-top-right ml-15" />
              </button>
            )}
        </div>
        {/* End next btn */}
      </div>
      {/* End stepper button */}
    </>
  );
};

export default Index;
