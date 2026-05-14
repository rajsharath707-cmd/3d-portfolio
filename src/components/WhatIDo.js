import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const WhatIDo = () => {
    const containerRef = useRef([]);
    const setRef = (el, index) => {
        containerRef.current[index] = el;
    };
    useEffect(() => {
        if (ScrollTrigger.isTouch) {
            containerRef.current.forEach((container) => {
                if (container) {
                    container.classList.remove("what-noTouch");
                    container.addEventListener("click", () => handleClick(container));
                }
            });
        }
        return () => {
            containerRef.current.forEach((container) => {
                if (container) {
                    container.removeEventListener("click", () => handleClick(container));
                }
            });
        };
    }, []);
    return (_jsxs("div", { className: "whatIDO", children: [_jsx("div", { className: "what-box", children: _jsxs("h2", { className: "title", children: ["W", _jsx("span", { className: "hat-h2", children: "HAT" }), _jsxs("div", { children: ["I", _jsx("span", { className: "do-h2", children: " DO" })] })] }) }), _jsx("div", { className: "what-box", children: _jsxs("div", { className: "what-box-in", children: [_jsx("div", { className: "what-border2", children: _jsxs("svg", { width: "100%", children: [_jsx("line", { x1: "0", y1: "0", x2: "0", y2: "100%", stroke: "white", strokeWidth: "2", strokeDasharray: "7,7" }), _jsx("line", { x1: "100%", y1: "0", x2: "100%", y2: "100%", stroke: "white", strokeWidth: "2", strokeDasharray: "7,7" })] }) }), _jsxs("div", { className: "what-content what-noTouch", ref: (el) => setRef(el, 0), children: [_jsx("div", { className: "what-border1", children: _jsxs("svg", { height: "100%", children: [_jsx("line", { x1: "0", y1: "0", x2: "100%", y2: "0", stroke: "white", strokeWidth: "2", strokeDasharray: "6,6" }), _jsx("line", { x1: "0", y1: "100%", x2: "100%", y2: "100%", stroke: "white", strokeWidth: "2", strokeDasharray: "6,6" })] }) }), _jsx("div", { className: "what-corner" }), _jsxs("div", { className: "what-content-in", children: [_jsx("h3", { children: "MARKETING & BRAND STRATEGY" }), _jsx("h4", {}), _jsx("p", { children: "Helping businesses grow through strategic marketing, customer engagement, and brand positioning. Focused on creating strong business visibility, improving customer trust, and building long-term brand value through effective communication and market understanding." }), _jsx("h5", { children: "Skillset & Tools" }), _jsxs("div", { className: "what-content-flex", children: [_jsx("div", { className: "what-tags", children: "Digital Marketing" }), _jsx("div", { className: "what-tags", children: "Brand Strategy" }), _jsx("div", { className: "what-tags", children: "Customer Engagement" }), _jsx("div", { className: "what-tags", children: "Social Media Communication" }), _jsx("div", { className: "what-tags", children: "Business Promotion" }), _jsx("div", { className: "what-tags", children: "Relationship Management" }), _jsx("div", { className: "what-tags", children: "Sales Coordination" }), _jsx("div", { className: "what-tags", children: "Communication Skills" }), _jsx("div", { className: "what-tags", children: "Market Understanding" })] }), _jsx("div", { className: "what-arrow" })] })] }), _jsxs("div", { className: "what-content what-noTouch", ref: (el) => setRef(el, 1), children: [_jsx("div", { className: "what-border1", children: _jsx("svg", { height: "100%", children: _jsx("line", { x1: "0", y1: "100%", x2: "100%", y2: "100%", stroke: "white", strokeWidth: "2", strokeDasharray: "6,6" }) }) }), _jsx("div", { className: "what-corner" }), _jsxs("div", { className: "what-content-in", children: [_jsx("h3", { children: "BUSINESS OPERATIONS & MANAGEMENT" }), _jsx("h4", {}), _jsx("p", { children: "Managing day-to-day business activities with a focus on smooth execution, operational efficiency, and customer satisfaction. Experienced in handling coordination, workflow management, client support, and business process operations across different industries." }), _jsx("h5", { children: "Skillset & Tools" }), _jsxs("div", { className: "what-content-flex", children: [_jsx("div", { className: "what-tags", children: "Operations Management" }), _jsx("div", { className: "what-tags", children: "Process Coordination" }), _jsx("div", { className: "what-tags", children: "Business Handling" }), _jsx("div", { className: "what-tags", children: "Team Coordination" }), _jsx("div", { className: "what-tags", children: "Problem Solving" }), _jsx("div", { className: "what-tags", children: "Workflow Management" }), _jsx("div", { className: "what-tags", children: "Client Support" }), _jsx("div", { className: "what-tags", children: "MS Excel" }), _jsx("div", { className: "what-tags", children: "Operational Planning" })] }), _jsx("div", { className: "what-arrow" })] })] })] }) })] }));
};
export default WhatIDo;
function handleClick(container) {
    container.classList.toggle("what-content-active");
    container.classList.remove("what-sibling");
    if (container.parentElement) {
        const siblings = Array.from(container.parentElement.children);
        siblings.forEach((sibling) => {
            if (sibling !== container) {
                sibling.classList.remove("what-content-active");
                sibling.classList.toggle("what-sibling");
            }
        });
    }
}
//# sourceMappingURL=WhatIDo.js.map