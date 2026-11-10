import React, { useState } from "react";

const DESTINATIONS = ["Uganda", "Rwanda", "Kenya", "Tanzania"];

const SAFARI_TYPES = [
  "Gorilla & Chimpanzee Trekking",
  "Big Five & Savannah Wildlife Safari",
  "Combined East Africa Safari (Multi-Country)",
  "Mountaineering & Hiking (Kilimanjaro / Rwenzori)",
  "Cultural, Honeymoon & Lake Escape",
  "Tailor-Made Private Safari",
  "General Inquiry / Question",
];

const DURATIONS = [
  "2 - 4 Days",
  "5 - 7 Days",
  "8 - 10 Days",
  "11 - 14+ Days",
  "Flexible / Advise Me",
];

const TRAVELER_COUNTS = [
  "1 Traveler (Solo)",
  "2 Travelers (Couple / Pair)",
  "3 - 5 Travelers (Small Group / Family)",
  "6+ Travelers (Group)",
];

const ACCOMMODATION_TIERS = [
  "Mid-Range Lodges & Tented Camps",
  "Luxury Safari Lodges",
  "Budget / Eco-Camps",
  "Flexible / Mix of Comfort",
];

const inputStyle = {
  border: "1px solid var(--color-border)",
  borderRadius: "8px",
  padding: "14px 16px",
  minHeight: "52px",
  fontSize: "15px",
  color: "var(--color-dark-1)",
  backgroundColor: "#ffffff",
  width: "100%",
};

const labelStyle = {
  display: "block",
  fontSize: "13px",
  fontWeight: 600,
  color: "var(--color-dark-1)",
  marginBottom: "6px",
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [destinations, setDestinations] = useState(["Uganda"]);
  const [safariType, setSafariType] = useState(SAFARI_TYPES[0]);
  const [travelDate, setTravelDate] = useState("");
  const [duration, setDuration] = useState(DURATIONS[1]);
  const [travelers, setTravelers] = useState(TRAVELER_COUNTS[1]);
  const [accommodation, setAccommodation] = useState(ACCOMMODATION_TIERS[0]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const toggleDestination = (dest) => {
    setDestinations((prev) =>
      prev.includes(dest) ? prev.filter((d) => d !== dest) : [...prev, dest]
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      setStatus({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    const subject = `Safari Inquiry: ${safariType} (${
      destinations.length ? destinations.join(", ") : "East Africa"
    })`;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          country,
          destinations,
          safariType,
          travelDate,
          duration,
          travelers,
          accommodation,
          subject,
          message,
        }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          text: "Thank you! Your safari inquiry has been received. A Riverwide safari specialist will get back to you within 24 hours.",
        });
        setName("");
        setEmail("");
        setPhone("");
        setCountry("");
        setDestinations(["Uganda"]);
        setTravelDate("");
        setMessage("");
      } else {
        setStatus({
          type: "error",
          text: "Failed to send your inquiry. Please try again or email us directly at info@riverwidesafaris.com.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        type: "error",
        text: "An error occurred while sending your inquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="row y-gap-20 pt-20" onSubmit={handleSubmit}>
      {/* Contact Details */}
      <div className="col-md-6">
        <label htmlFor="name" style={labelStyle}>
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g. Sarah Jenkins"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          required
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="email" style={labelStyle}>
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="phone" style={labelStyle}>
          Phone / WhatsApp Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="e.g. +1 555 234 5678"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="country" style={labelStyle}>
          Country of Residence
        </label>
        <input
          type="text"
          id="country"
          name="country"
          placeholder="e.g. United States, UK, Germany"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style={inputStyle}
        />
      </div>

      {/* Destination Multi-Select Pills */}
      <div className="col-12">
        <label style={labelStyle}>
          Which Destinations Would You Like to Explore?
        </label>
        <div
          className="d-flex flex-wrap items-center mt-5"
          style={{ gap: "10px" }}
        >
          {DESTINATIONS.map((dest) => {
            const isSelected = destinations.includes(dest);
            return (
              <button
                type="button"
                key={dest}
                onClick={() => toggleDestination(dest)}
                className="button h-40 px-20 rounded-100 text-14 fw-600 transition"
                style={{
                  backgroundColor: isSelected
                    ? "var(--color-blue-1)"
                    : "#f6f9fd",
                  color: isSelected ? "#ffffff" : "var(--color-dark-1)",
                  border: isSelected
                    ? "1px solid var(--color-blue-1)"
                    : "1px solid var(--color-border)",
                }}
              >
                {isSelected ? `✓ ${dest}` : `+ ${dest}`}
              </button>
            );
          })}
        </div>
      </div>

      {/* Trip Planning Fields */}
      <div className="col-md-6">
        <label htmlFor="safariType" style={labelStyle}>
          Safari Experience / Inquiry Type
        </label>
        <select
          id="safariType"
          name="safariType"
          value={safariType}
          onChange={(e) => setSafariType(e.target.value)}
          style={inputStyle}
        >
          {SAFARI_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-6">
        <label htmlFor="travelDate" style={labelStyle}>
          Preferred Start Date (Approximate)
        </label>
        <input
          type="date"
          id="travelDate"
          name="travelDate"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="duration" style={labelStyle}>
          Trip Duration
        </label>
        <select
          id="duration"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          style={inputStyle}
        >
          {DURATIONS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-4">
        <label htmlFor="travelers" style={labelStyle}>
          Number of Travelers
        </label>
        <select
          id="travelers"
          name="travelers"
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
          style={inputStyle}
        >
          {TRAVELER_COUNTS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-4">
        <label htmlFor="accommodation" style={labelStyle}>
          Accommodation Style
        </label>
        <select
          id="accommodation"
          name="accommodation"
          value={accommodation}
          onChange={(e) => setAccommodation(e.target.value)}
          style={inputStyle}
        >
          {ACCOMMODATION_TIERS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Detailed Message */}
      <div className="col-12">
        <label htmlFor="message" style={labelStyle}>
          Tell Us About Your Dream Safari or Questions *
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Share any specific national parks (e.g., Bwindi, Murchison Falls, Masai Mara), wildlife interests, special occasions, or questions you have..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            ...inputStyle,
            minHeight: "120px",
            resize: "vertical",
          }}
          required
        />
      </div>

      {status && (
        <div className="col-12">
          <div
            className="py-15 px-20 rounded-8 text-14 fw-500"
            style={{
              backgroundColor:
                status.type === "success" ? "#def2d7" : "#ecc8c5",
              color: status.type === "success" ? "#2d5a27" : "#ab3331",
            }}
          >
            {status.text}
          </div>
        </div>
      )}

      <div className="col-12 d-flex items-center justify-between flex-wrap y-gap-10">
        <button
          type="submit"
          disabled={isSubmitting}
          className="button px-30 h-50 rounded-100 text-15 fw-600 text-white"
          style={{
            backgroundColor: "var(--color-blue-1)",
            opacity: isSubmitting ? 0.75 : 1,
            boxShadow: "0 6px 20px rgba(43, 114, 184, 0.3)",
          }}
        >
          {isSubmitting
            ? "Sending Inquiry..."
            : "Send Safari Inquiry & Plan My Trip"}
          <div className="icon-arrow-top-right ml-15 text-12" />
        </button>

        <div className="text-13 text-light-1">
          Free custom quote • Response within 24 hours
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
