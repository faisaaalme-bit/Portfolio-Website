import { useState, useEffect, useRef } from "react";
import "./styles/Work.css";

// Configuration for slides data - edit paths, video links, text here dynamically
const workSlides = [
  {
    id: "01",
    type: "intro",
    title: "XOMOFOMO",
    subtitle: "Instagram Reels • Short-Form Content",
    description: "Edited engaging product-focused Instagram Reels using storytelling, motion graphics, and typography to maximize audience retention and engagement.",
    role: "Video Editor & Motion Designer",
    tools: "Premiere Pro • Capcut",
    media: {
      type: "video",
      src: "/video/v1.MP4"
    }
  },
  {
    id: "02",
    type: "about-client",
    title: "About Client",
    clientName: "XOMOFOMO",
    description: "A digital creator known for reviewing unique and trending products through engaging Instagram Reels. His content focuses on entertaining product showcases that consistently reach a wide audience.",
    industry: "Lifestyle • Product Reviews • Social Media Content",
    responsibilities: ["Video Editing", "Motion Graphics", "Storytelling"],
    media: {
      type: "carousel",
      images: [
        "/images/v2.jpeg",
      ]
      // src: "/video/v2.MP4"
    }
  },
  {
    id: "03",
    type: "featured-reel",
    title: "Featured Reel",
    subtitle: "⭐ Showcasing the final edit",
    goal: "Create engaging product-focused Instagram Reels.",
    contribution: "Video Editing • Storytelling",
    focus: "Strong hook • Fast pacing • Product emphasis",
    media: {
      type: "video",
      src: "/video/v3.MP4"
    }
  },
  {
    id: "04",
    type: "before-after",
    title: "Before vs After",
    subtitle: "Comparison Overview",
    description: "A comparison of the original footage and the final edit, showcasing how motion graphics, typography, pacing, and visual enhancements transformed the content into a polished, engaging reel.",
    beforeMedia: {
      type: "video",
      src: "/video/v4_before.mp4"
    },
    afterMedia: {
      type: "video",
      src: "/video/IMG_4812.MP4"
    }
  },
  {
    id: "05",
    type: "impact",
    title: "Project Impact",
    subtitle: "Key Analytics",
    description: "During the collaboration, the account grew from 40.5K to 54.7K followers while edited reels reached millions of viewers.",
    stats: [
      { label: "Followers", value: "54.7K", change: "40.5K → 54.7K" },
      { label: "Viral Reel", value: "4.49M", change: "Views reached" }
    ],
    media: {
      type: "carousel",
      images: [
        "/images/i1.jpg",
        "/images/i2.jpg",
        "/images/i3.jpg",
        "/images/i4.jpg",
        "/images/i5.jpg",
        "/images/i6.jpg",
        "/images/i7.jpg",
        "/images/i8.jpg",
        "/images/i9.jpg",
        "/images/i10.jpg",

      ]
    }
  },
  {
    id: "06",
    type: "engagement",
    title: "Engagement",
    subtitle: "Performance Summary",
    description: "A high-performing reel that achieved millions of views and exceptional engagement across likes, shares, saves, and comments.",
    media: {
      type: "carousel",
      images: [
        "/images/i1.jpg",
        "/images/i2.jpg",
        "/images/i3.jpg",
        "/images/i4.jpg",
        "/images/i5.jpg",
        "/images/i6.jpg",
        "/images/i7.jpg",
        "/images/i8.jpg",
        "/images/i9.jpg",
        "/images/i10.jpg",

      ]
    }
  }
];

// Inner looping image carousel with smooth fading effect
const InnerImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: "8px" }}>
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={`Slide ${index}`}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 1s ease-in-out",
            opacity: index === currentIndex ? 1 : 0,
            top: 0,
            left: 0,
          }}
        />
      ))}
    </div>
  );
};

const Work = () => {
  const flexRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!flexRef.current) return;
    const amount = 620;
    flexRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header-row">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-nav-arrows">
            <button className="work-arrow" onClick={() => scroll("left")} aria-label="Previous">
              ←
            </button>
            <button className="work-arrow" onClick={() => scroll("right")} aria-label="Next">
              →
            </button>
          </div>
        </div>

        <div className="work-flex" ref={flexRef}>
          {workSlides.map((slide) => {
            if (slide.type === "intro") {
              return (
                <div className="work-box" key={slide.id}>
                  <div className="work-info" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                    <div className="work-title">
                      <h3>{slide.id}</h3>
                      <div>
                        <h4 style={{ fontSize: "20px", fontWeight: "600", textTransform: "uppercase" }}>{slide.title}</h4>
                        <p>{slide.subtitle}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "14px", lineHeight: "1.6", fontWeight: "300", color: "#adacac", margin: "20px 0" }}>
                      {slide.description}
                    </p>
                    <div>
                      <h4 style={{ fontSize: "15px", fontWeight: "400", color: "var(--accentColor)", marginBottom: "4px" }}>{slide.role}</h4>
                      <p style={{ fontSize: "13px", color: "#666" }}>{slide.tools}</p>
                    </div>
                    {slide.media && (
                      <div className="work-image">
                        <div className="work-video-portrait">
                          {slide.media.type === "video" ? (
                            <video
                              src={slide.media.src}
                              autoPlay
                              muted
                              loop
                              playsInline
                              ref={(el) => { if (el) el.muted = true; }}
                            />
                          ) : (
                            <img src={slide.media.src} alt={slide.title} />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            }

            if (slide.type === "about-client") {
              return (
                <div className="work-box" key={slide.id}>
                  <div className="work-info" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                    <div className="work-title">
                      <h3>{slide.id}</h3>
                      <div>
                        <h4 style={{ fontSize: "20px", fontWeight: "600", textTransform: "uppercase" }}>{slide.title}</h4>
                        <p>{slide.clientName}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "14px", lineHeight: "1.6", fontWeight: "300", color: "#adacac", margin: "20px 0" }}>
                      {slide.description}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <div>
                        <h4 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--accentColor)", marginBottom: "2px" }}>Industry</h4>
                        <p style={{ fontSize: "13px", color: "#adacac" }}>{slide.industry}</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--accentColor)", marginBottom: "2px" }}>My Responsibilities</h4>
                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "4px" }}>
                          {slide.responsibilities?.map((resp) => (
                            <span key={resp} style={{ fontSize: "11px", background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", color: "#adacac" }}>{resp}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {slide.media && (
                      <div className="work-image" style={{ marginTop: "30px" }}>
                        <div className="work-image-in" style={{ width: "100%", height: "160px", borderRadius: "8px", overflow: "hidden", border: "1px solid #363636" }}>
                          {slide.media.type === "carousel" && slide.media.images ? (
                            <InnerImageCarousel images={slide.media.images} />
                          ) : (
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", background: "linear-gradient(135deg, #1e1e1e 0%, #111111 100%)" }}>
                              <h4 style={{ fontSize: "24px", letterSpacing: "4px", color: "rgba(255,255,255,0.15)", textTransform: "uppercase", fontWeight: 700 }}>{slide.clientName}</h4>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            }

            if (slide.type === "featured-reel") {
              return (
                <div className="work-box wide-box" key={slide.id}>
                  <div className="work-info" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    <div className="work-title">
                      <h3>{slide.id}</h3>
                      <div>
                        <h4 style={{ fontSize: "20px", fontWeight: "600", textTransform: "uppercase" }}>{slide.title}</h4>
                        <p>{slide.subtitle}</p>
                      </div>
                    </div>
                    <div className="work-split-container">
                      <div className="work-video-portrait">
                        {slide.media && (
                          <video
                            src={slide.media.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            ref={(el) => { if (el) el.muted = true; }}
                          />
                        )}
                      </div>
                      <div className="work-split-right">
                        <div className="breakdown-section">
                          <h4>Client Goal</h4>
                          <p>{slide.goal}</p>
                        </div>
                        <div className="breakdown-section">
                          <h4>My Contribution</h4>
                          <p>{slide.contribution}</p>
                        </div>
                        <div className="breakdown-section">
                          <h4>Editing Focus</h4>
                          <p>{slide.focus}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (slide.type === "before-after") {
              return (
                <div className="work-box wide-box" key={slide.id}>
                  <div className="work-info" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                    <div className="work-title">
                      <h3>{slide.id}</h3>
                      <div>
                        <h4 style={{ fontSize: "20px", fontWeight: "600", textTransform: "uppercase" }}>{slide.title}</h4>
                        <p>{slide.subtitle}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "14px", lineHeight: "1.6", fontWeight: "300", color: "#adacac", marginBottom: "15px" }}>
                      {slide.description}
                    </p>
                    <div className="before-after-container">
                      <div className="before-after-half">
                        <span className="before-after-label">Raw Footage</span>
                        <div className="work-video-portrait">
                          {slide.beforeMedia && (
                            <video
                              src={slide.beforeMedia.src}
                              autoPlay
                              muted
                              loop
                              playsInline
                              ref={(el) => { if (el) el.muted = true; }}
                            />
                          )}
                        </div>
                      </div>
                      <div className="before-after-half">
                        <span className="before-after-label">Final Edit</span>
                        <div className="work-video-portrait">
                          {slide.afterMedia && (
                            <video
                              src={slide.afterMedia.src}
                              autoPlay
                              muted
                              loop
                              playsInline
                              ref={(el) => { if (el) el.muted = true; }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (slide.type === "impact") {
              return (
                <div className="work-box wide-box" key={slide.id}>
                  <div className="work-info" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                    <div className="work-title">
                      <h3>{slide.id}</h3>
                      <div>
                        <h4 style={{ fontSize: "20px", fontWeight: "600", textTransform: "uppercase" }}>{slide.title}</h4>
                        <p>{slide.subtitle}</p>
                      </div>
                    </div>
                    <div className="stats-grid" style={{ margin: "15px 0" }}>
                      {slide.stats?.map((stat, sIdx) => (
                        <div className="stat-card" key={sIdx}>
                          <span className="stat-label">{stat.label}</span>
                          <span className="stat-value" style={{ fontSize: "28px" }}>{stat.value}</span>
                          <span className="stat-change">{stat.change}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: "30px", alignItems: "flex-start", marginTop: "10px" }}>
                      <div style={{ flex: 1 }}>
                        <p className="impact-desc" style={{ fontSize: "13.5px", lineHeight: "1.6", color: "#adacac", fontWeight: "300" }}>
                          {slide.description}
                        </p>
                      </div>
                      {slide.media && slide.media.type === "carousel" && slide.media.images && (
                        <div className="work-video-portrait" style={{ flexShrink: 0 }}>
                          <InnerImageCarousel images={slide.media.images} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            }

            if (slide.type === "engagement") {
              return (
                <div className="work-box" key={slide.id}>
                  <div className="work-info" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                    <div className="work-title">
                      <h3>{slide.id}</h3>
                      <div>
                        <h4 style={{ fontSize: "20px", fontWeight: "600", textTransform: "uppercase" }}>{slide.title}</h4>
                        <p>{slide.subtitle}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "14px", lineHeight: "1.6", fontWeight: "300", color: "#adacac", margin: "20px 0" }}>
                      {slide.description}
                    </p>
                    {slide.media && (
                      <div className="work-image" style={{ marginTop: "auto" }}>
                        <div className="work-video-portrait">
                          {slide.media.type === "carousel" && slide.media.images ? (
                            <InnerImageCarousel images={slide.media.images} />
                          ) : slide.media.type === "video" ? (
                            <video
                              src={slide.media.src}
                              autoPlay
                              muted
                              loop
                              playsInline
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                              ref={(el) => { if (el) el.muted = true; }}
                            />
                          ) : (
                            <img src={slide.media.src} alt={slide.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
