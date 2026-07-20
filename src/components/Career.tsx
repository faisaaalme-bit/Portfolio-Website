import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My creative
          <br /> Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Started My Video Editing Journey</h4>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Began learning professional video editing, mastering Adobe Premiere Pro and After Effects while developing skills in storytelling, motion graphics, and social media content creation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor</h4>
                <h5>XOMOFOMO</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Edited high-performing Instagram Reels focused on audience retention, dynamic pacing, and engaging storytelling. Contributed to content that reached hundreds of thousands to millions of views, helping improve overall engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Video Editor</h4>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              I collaborate with creators and brands to produce high-quality short-form and long-form content. My focus is creating videos that not only look professional but also keep audiences engaged and drive measurable results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
