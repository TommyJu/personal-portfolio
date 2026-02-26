"use client";

import "@/css/page.css";
import "@/css/pageFade.css";
import ExternalLinksAndIcons from "@/components/NavigationPanel/ExternalLinksAndIcons";
import Nav from "@/components/NavigationPanel/Nav";
import { useEffect, useState } from "react";
import Card from "@/components/Content/Card";
import educationData from "@/data/education";
import workExperienceData from "@/data/workExperience";
import projectData from "@/data/projects";
import { aboutMeParagraphs, aboutMeShortSummary } from "@/data/aboutMe";

export default function Home() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // defer setVisible to the next animation frame
    const frame = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <main
      id="scrollable-container"
      className={`fade-page ${visible ? "visible" : ""}`}
    >
      <section id="navigation-panel">
        <div>
          <h1>Tommy Ju</h1>
          <h2>Software Developer based in <span className="whitespace-nowrap">Vancouver, BC</span></h2>
        </div>
        <p>
          <strong>{aboutMeShortSummary}</strong>
        </p>
        <Nav />
        <ExternalLinksAndIcons />
      </section>

      <section id="content">
        <section id="about">
          <h3>About</h3>
          <div className="about-me-text-wrapper">
            {aboutMeParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
        <section id="education">
          <h3>Education</h3>
          {educationData.map((data) => (
            <Card key={data.title} {...data} />
          ))}
        </section>
        <section id="work-experience">
          <h3>Work Experience</h3>
          {workExperienceData.map((data) => (
            <Card key={data.title} {...data} />
          ))}
        </section>
        <section id="projects">
          <h3>Projects</h3>
          {projectData.map((data) => (
            <Card key={data.title} {...data} />
          ))}
        </section>
      </section>
    </main>
  );
}
