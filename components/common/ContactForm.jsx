import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    event.preventDefault();
    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });
  
      if (response.ok) {
        alert('Thank you for contacting us!');
        // Clear form
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form className="row y-gap-20 pt-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <div className="form-input">
          <input type="text" id="name" name="name" value={name}
            onChange={(e) => setName(e.target.value)} required />
          <label htmlFor="name" className="lh-1 text-16 text-light-1">
            Full Name
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input type="email" id="email" name="email" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="email" className="lh-1 text-16 text-light-1">
            Email
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input type="text" id="subject" name="subject" value={subject}
            onChange={(e) => setSubject(e.target.value)}  required />
          <label htmlFor="subject" className="lh-1 text-16 text-light-1">
            Subject
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <textarea id="message" name="message" value={message}
            onChange={(e) => setMessage(e.target.value)} required rows="4"></textarea>
          <label htmlFor="message" className="lh-1 text-16 text-light-1">
            Your Message
          </label>
        </div>
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="button px-24 h-50 -blue-1 bg-dark-3 text-white"
        >
          Send Message <div className="icon-arrow-top-right ml-15"></div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
