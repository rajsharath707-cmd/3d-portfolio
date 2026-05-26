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
                <h4>Business Operations &amp; Marketing Associate</h4>
                <h5>Sathi Flavours &amp; Travelling Desi</h5>
                <h6 className="career-location">New Delhi, India</h6>
              </div>
              <h3>Mar 2024 – Present</h3>
            </div>
            <ul className="career-bullets">
              <li>Designed and promoted marketing flyers for food offers, combo deals, and seasonal promotions.</li>
              <li>Created travel itinerary promotion materials for customer outreach and engagement.</li>
              <li>Managed social media accounts including content posting, customer queries, and brand interaction.</li>
              <li>Assisted in planning and running Facebook &amp; Google Ads campaigns for food and service promotions.</li>
              <li>Coordinated and handled food delivery platform advertisements and listings.</li>
              <li>Supported day-to-day customer handling, order coordination, and service follow-ups.</li>
              <li>Assisted in marketing execution, sales support, and operational coordination.</li>
              <li>Gained practical exposure to digital marketing, customer relationship management, and business operations.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Com (NEP)</h4>
                <h5>Delhi University</h5>
              </div>
              <h3>Aug 2022 - Aug 2025</h3>
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
              <h3>Jan 2025 - Active</h3>
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
