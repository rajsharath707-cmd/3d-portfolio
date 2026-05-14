import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const goToSlide = useCallback((index) => {
        if (isAnimating)
            return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating]);
    const goToPrev = useCallback(() => {
        const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
        goToSlide(newIndex);
    }, [currentIndex, goToSlide]);
    const goToNext = useCallback(() => {
        const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
        goToSlide(newIndex);
    }, [currentIndex, goToSlide]);
    return (_jsx("div", { className: "work-section", id: "education", children: _jsxs("div", { className: "work-container section-container", children: [_jsxs("h2", { children: ["My ", _jsx("span", { children: "Education" })] }), _jsxs("div", { className: "carousel-wrapper", children: [_jsx("button", { className: "carousel-arrow carousel-arrow-left", onClick: goToPrev, "aria-label": "Previous project", "data-cursor": "disable", children: _jsx(MdArrowBack, {}) }), _jsx("button", { className: "carousel-arrow carousel-arrow-right", onClick: goToNext, "aria-label": "Next project", "data-cursor": "disable", children: _jsx(MdArrowForward, {}) }), _jsx("div", { className: "carousel-track-container", children: _jsx("div", { className: "carousel-track", style: {
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }, children: projects.map((project, index) => (_jsx("div", { className: "carousel-slide", children: _jsxs("div", { className: "carousel-content", children: [_jsxs("div", { className: "carousel-info", children: [_jsx("div", { className: "carousel-number", children: _jsxs("h3", { children: ["0", index + 1] }) }), _jsxs("div", { className: "carousel-details", children: [_jsx("h4", { children: project.title }), _jsx("p", { className: "carousel-category", children: project.category }), _jsxs("div", { className: "carousel-tools", children: [_jsx("span", { className: "tools-label", children: "Subjects" }), _jsx("p", { children: project.tools })] }), project.date && (_jsxs("div", { className: "carousel-tools", children: [_jsx("span", { className: "tools-label", children: "Duration" }), _jsx("p", { children: project.date })] })), project.location && (_jsxs("div", { className: "carousel-tools", children: [_jsx("span", { className: "tools-label", children: "Location" }), _jsx("p", { children: project.location })] }))] })] }), _jsx("div", { className: "carousel-image-wrapper", children: _jsx(WorkImage, { image: project.image, alt: project.title, link: project.link }) })] }) }, index))) }) }), _jsx("div", { className: "carousel-dots", children: projects.map((_, index) => (_jsx("button", { className: `carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`, onClick: () => goToSlide(index), "aria-label": `Go to project ${index + 1}`, "data-cursor": "disable" }, index))) })] })] }) }));
};
export default Work;
//# sourceMappingURL=Work.js.map