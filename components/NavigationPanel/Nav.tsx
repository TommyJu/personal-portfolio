"use client";
import { useEffect, useState, useCallback } from "react";
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

  // Helper functions for setting up Nav observer
  const getContainer = useCallback(
    () => document.getElementById(SECTION_CONTAINER_ID),
    []
  );

  const getSectionElement = useCallback((id: string) => {
    return document.getElementById(id);
  }, []);

  const resetScroll = useCallback(() => {
    const container = getContainer();
    if (!container) return;
    requestAnimationFrame(() => {
      container.scrollTop = 0;
    });
  }, [getContainer]);

  const handleIntersection = useCallback<IntersectionObserverCallback>(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    []
  );

  const createObserver = useCallback(
    (container: HTMLElement) =>
      new IntersectionObserver(handleIntersection, {
        root: container,
        threshold: 0,
        rootMargin: "0px 0px -80% 0px", // Create a fixed activation point by shrinking the bottom of the container
      }),
    [handleIntersection]
  );

  const observeAllSections = useCallback(
    (observer: IntersectionObserver) => {
      SECTION_IDS.forEach((id) => {
        const el = getSectionElement(id);
        if (el) observer.observe(el);
      });
    },
    [getSectionElement]
  );

  // Setup observer
  useEffect(() => {
    const container = getContainer();
    if (!container) return;

    resetScroll();

    const observer = createObserver(container);
    observeAllSections(observer);

    return () => observer.disconnect();
  }, [createObserver, observeAllSections, getContainer, resetScroll]);
  
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
