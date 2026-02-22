"use client";
import { useEffect, useState } from "react";
import "@/css/nav.css";

const SECTION_IDS = Object.freeze([
  "about",
  "education",
  "work-experience",
  "projects",
]);
const SECTION_CONTAINER_ID = "scrollable-section";

// Nav component that responds to the current sectioned being viewed in a scrollable container
export default function Nav() {
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);
  // Adjust when a section is considered "active"
  const ACTIVE_SECTION_THRESHOLD = 0.5;

  // Reset scroll to top
  const resetScroll = () => {
    const container = document.getElementById(SECTION_CONTAINER_ID);
    if (!container) return;
    requestAnimationFrame(() => {
      container.scrollTop = 0;
    });
  };

  // IntersectionObserver callback
  const handleIntersections = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  // Attach observer to each section
  const observeSections = (observer: IntersectionObserver) => {
    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
  };

  useEffect(() => {
    const container = document.getElementById(SECTION_CONTAINER_ID);
    if (!container) return;

    resetScroll();

    const observer = new IntersectionObserver(handleIntersections, {
      root: container,
      threshold: ACTIVE_SECTION_THRESHOLD,
    });

    observeSections(observer);

    return () => observer.disconnect();
  }, []);

  return (
    <nav>
      <ul>
        {SECTION_IDS.map((sectionId) => (
          <li key={sectionId}>
            <a
              href={`#${sectionId}`}
              className={activeSection === sectionId ? "active" : ""}
            >
              {sectionId.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
