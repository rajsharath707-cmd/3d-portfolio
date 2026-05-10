import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Contact Info</h4>
            <p>
              Email: rajsharath707@gmail.com
            </p>
            <p>
              Phone: +91 8448311723
            </p>
            <p>
              New Delhi, India
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Designed for <br /> <span>Sharath Raj</span>
            </h2>
            <h5>
              &copy; 2026 Sharath Raj
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
