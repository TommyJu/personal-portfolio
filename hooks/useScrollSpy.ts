import { useEffect, useState, useCallback } from "react";

// Sets up scroll spy and scroll forwarding to the scrollable container
export default function useScrollSpy(
  sectionIds: string[],
  scrollContainerId: string,
  navPanelId?: string
) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  // IntersectionObserver callback
  const handleIntersection = useCallback<IntersectionObserverCallback>(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    },
    []
  );

  // Get DOM elements
  const getContainer = useCallback(
    () => document.getElementById(scrollContainerId),
    [scrollContainerId]
  );
  const getNavPanel = useCallback(
    () => (navPanelId ? document.getElementById(navPanelId) : null),
    [navPanelId]
  );
  const getSectionElement = useCallback((id: string) => {
    return document.getElementById(id);
  }, []);

  useEffect(() => {
    const container = getContainer();
    if (!container) return;

    // Setup IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      root: container,
      threshold: 0,
      rootMargin: "0px 0px -80% 0px",
    });

    sectionIds.forEach((id) => {
      const el = getSectionElement(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [
    sectionIds,
    getContainer,
    getNavPanel,
    getSectionElement,
    handleIntersection,
  ]);

  return activeSection;
}