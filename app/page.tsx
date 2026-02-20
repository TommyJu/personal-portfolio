import "./page.css";
import ExternalLinksAndIcons from "@/components/NavigationPanel/ExternalLinksAndIcons/ExternalLinksAndIcons";

export default function Home() {
  return (
    <main>
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
        <ExternalLinksAndIcons/>
      </section>

      <section id="scrollable-section">
        <h3>About</h3>
        <h3>Education</h3>
        <h3>Work Experience</h3>
        <h3>Projects</h3>
      </section>
    </main>
  );
}
