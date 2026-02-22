"use client";
import { useEffect, useState } from "react";
import "@/css/nav.css";

const SECTION_IDS = Object.freeze(["about", "education", "work-experience", "projects"]);
const SECTION_CONTAINER_ID = "scrollable-section";

// Nav component that responds to the current sectioned being viewed in a scrollable container
export default function Nav() {
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);

  useEffect(() => {
    const container = document.getElementById(SECTION_CONTAINER_ID);
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: container,       // observe relative to the scrollable container
        threshold: 0.7,        // adjust when section is considered "active"
      }
    );

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

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