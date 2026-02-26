"use client";
import "@/css/nav.css";
import useScrollSpy from "@/hooks/useScrollSpy";

const SECTION_IDS = [
  "about",
  "education",
  "work-experience",
  "projects",
];
const SCROLL_CONTAINER_ID = "scrollable-container";

// Nav component that responds to the current section being viewed in a scrollable container
export default function Nav() {
  const activeSection = useScrollSpy(
    SECTION_IDS,
    SCROLL_CONTAINER_ID,
  );
  
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
