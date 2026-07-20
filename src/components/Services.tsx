import "./styles/Services.css";

const services = [
  {
    number: "01",
    title: "Video Editing",
    description:
      "Transform raw footage into polished, engaging videos with seamless pacing, storytelling, and professional editing.",
    tags: ["Premiere Pro", "DaVinci Resolve", "Pacing", "Flow"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125V5.625m0 12.75V5.625m0 0A1.125 1.125 0 013.375 4.5h1.5M3.375 5.625h16.875m0 0A1.125 1.125 0 0121.375 4.5h-1.5M20.25 5.625V18.375M20.25 18.375a1.125 1.125 0 001.125-1.125M20.25 18.375h-1.5c-.621 0-1.125-.504-1.125-1.125M6 18.375V5.625M6 5.625h12M6 18.375h12" />
      </svg>
    ),
    media: { type: "image", src: "/images/Screenshot 2026-07-19 222604.png" }
  },
  {
    number: "02",
    title: "Motion Graphics",
    description:
      "Create dynamic animations and visual elements that enhance videos and make content more engaging.",
    tags: ["After Effects", "2D Animation", "VFX", "Transitions"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Typography",
    description:
      "Design clean, animated captions and text layouts that improve readability and reinforce key messages.",
    tags: ["Animated Captions", "Text Layouts", "Readability", "Style"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7V4h16v3M9 20h6M12 4v16" />
      </svg>
    ),
    media: { type: "video", src: "/video/IMG_4763.MOV" }
  },
  {
    number: "04",
    title: "Short-Form Content",
    description:
      "Produce high-performing Instagram Reels, TikToks, and YouTube Shorts optimized for audience retention and engagement.",
    tags: ["Reels", "TikTok", "Shorts", "Retention"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
      </svg>
    ),
    media: { type: "video", src: "/video/Video 4 ready.mp4" }
  },
  {
    number: "05",
    title: "Long-Form Content",
    description:
      "Edit YouTube videos, podcasts, and documentaries with smooth pacing, compelling storytelling, and a polished finish.",
    tags: ["YouTube", "Podcasts", "Documentaries", "Editing"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Visual Storytelling",
    description:
      "Craft edits that guide viewers through a clear narrative using thoughtful pacing, transitions, and creative sequencing to keep them engaged.",
    tags: ["Narrative", "Sequencing", "Pacing", "Structure"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    media: { type: "video", src: "/video/IMG_3328.MOV" }
  },
];

const Services = () => {
  return (
    <div className="services-section" id="services">
      <div className="services-header">
        <h2 className="title">Services</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.number}>
            <div className="service-card-top">
              <div className="service-icon">{service.icon}</div>
              <span className="service-number">{service.number}</span>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
            {service.media && (
              <div className="service-media-container">
                {service.media.type === "image" ? (
                  <img
                    src={service.media.src}
                    alt={service.title}
                    className="service-media-image"
                  />
                ) : (
                  <video
                    src={service.media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="service-media-video"
                  />
                )}
              </div>
            )}
            <div className="service-tags">
              {service.tags.map((tag) => (
                <span className="service-tag" key={tag}>{tag}</span>
              ))}
            </div>
            <div className="service-card-line"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
