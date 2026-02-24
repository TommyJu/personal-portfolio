"use client";

import "@/css/page.css";
import "@/css/pageFade.css";
import ExternalLinksAndIcons from "@/components/NavigationPanel/ExternalLinksAndIcons";
import Nav from "@/components/NavigationPanel/Nav";
import { useEffect, useState } from "react";
import Card from "@/components/ScrollableSection/Card";
import educationData from "@/data/education";
import workExperienceData from "@/data/workExperience";
import projectData from "@/data/projects";

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
    <main className={`fade-page ${visible ? "visible" : ""}`}>
      <section id="navigation-panel">
        <div>
          <h1>Tommy Ju</h1>
          <h2>Software Developer</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          error eos sed. Quaerat error laboriosam commodi nobis, consequatur
          maxime earum atque, nisi ullam fugiat ratione corporis doloribus, modi
          nesciunt in!
        </p>
        <Nav />
        <ExternalLinksAndIcons />
      </section>

      <section id="scrollable-section">
        <section id="about">
          <h3>About</h3>
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
