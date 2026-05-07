import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate – Operations</h4>
                <h5>Amber</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Assisting students with short-term and long-term accommodation bookings. Managing end-to-end sales and booking processes while engaging leads through WhatsApp, email, and CRM tools. Building strong client relationships and consistently improving conversion rates.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate – Operations</h4>
                <h5>WNS Global Services</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Delivered comprehensive customer support via chat, email, and calls for airline operations. Managed flight bookings, rebookings, cancellations, and schedule changes using Amadeus and Sabre GDS systems. Maintained service quality, SLA compliance, and high customer satisfaction standards.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Com (Hons)</h4>
                <h5>Delhi University</h5>
              </div>
              <h3>2022–25</h3>
            </div>
            <p>
              Completed Bachelor of Commerce with focus on Financial Accounting, Business Law, and Marketing. Developed strong foundation in business analytics and financial management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Content Creator</h4>
                <h5>Backpack Scholar (YouTube)</h5>
              </div>
              <h3>Active</h3>
            </div>
            <p>
              Managing a YouTube channel with 500+ subscribers focused on educational content for students planning to study abroad. Providing visa guidance, IELTS preparation strategies, and student life advice with 10K+ total views.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
