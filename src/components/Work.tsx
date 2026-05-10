import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "High School - Commerce (CBSE Board)",
    category: "Sarvodya Bal Vidyalaya",
    tools: "Accountancy, Banking, Business Studies, Economics",
    date: "2021/04 – 2022/06",
    location: "New Delhi, Delhi",
    image: "https://www.cbse.gov.in/images//logo.png",
    link: "https://linkedin.com/in/sharath-raj-b7116a311",
  },
  {
    title: "Bachelor of Commerce",
    category: "Delhi University",
    tools: "Financial Accounting, Business Law, Marketing with emphasis on data-driven business solutions",
    date: "2022/08 – 2025/08",
    location: "New Delhi, Delhi",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b6/Delhi_University.svg",
    link: "https://linkedin.com/in/sharath-raj-b7116a311",
  },
  {
    title: "German Language (B1 level)",
    category: "Goethe Institute",
    tools: "Intermediate proficiency in reading, writing, speaking, and listening",
    date: "2022/09 – 2024/09",
    location: "New Delhi, Delhi",
    image: "https://cdn.worldvectorlogo.com/logos/goethe-institut-3.svg",
    link: "https://linkedin.com/in/sharath-raj-b7116a311",
  },
  {
    title: "Spoken English Course",
    category: "Speak n Skills",
    tools: "Intermediate Level in Public Speaking, Speech, Group Decision, Podcast & Debate",
    date: "Jun 2025 – Aug 2025",
    location: "New Delhi, India",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStelYKfndfYfmBBSJGpfms_e-4pDtHGHOC_g&s",
    link: "https://linkedin.com/in/sharath-raj-b7116a311",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="education">
      <div className="work-container section-container">
        <h2>
          My <span>Education</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Subjects</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.date && (
                          <div className="carousel-tools">
                            <span className="tools-label">Duration</span>
                            <p>{project.date}</p>
                          </div>
                        )}
                        {project.location && (
                          <div className="carousel-tools">
                            <span className="tools-label">Location</span>
                            <p>{project.location}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
