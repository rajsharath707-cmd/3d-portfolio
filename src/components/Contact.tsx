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
              Email: <a href="mailto:rajsharath707@gmail.com">rajsharath707@gmail.com</a>
              <br />
              Email: <a href="mailto:sharathrajlearning@gmail.com">sharathrajlearning@gmail.com</a>
            </p>
            <p>
              Phone: <a href="tel:+918448311723">+91 8448311723</a>
              <br />
              Phone: <a href="tel:+918700266859">+91 8700266859</a>
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
