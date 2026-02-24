interface ProjectEntry {
  title: string;
  description: string;
  date: string;
  imageSrc: string;
  tags: string[];
  href?: string;
}

const projectData: ProjectEntry[] = [
  {
    title: "Relay",
    description:
      "Relay is a real-time messaging application built using the MERN stack and web sockets. ",
    date: "Jan 2026",
    imageSrc: "/project-images/relay.png",
    tags: ["Web Sockets", "MongoDB", "Express.js", "React", "Node.js"],
    href: "https://relay.azurewebsites.net/",
  },
  {
    title: "Side Quests",
    description:
      "Side Quests is an app designed to break the monotony of daily life by offering curated, real-world challenges. I created this app to help users step outside their routines and engage in activities that make life more fulfilling.",
    date: "Dec 2025",
    imageSrc: "/project-images/side_quests.png",
    tags: [
      "AI",
      "C#",
      ".NET",
      "Entity Framework",
      "SQLite",
      "Blazor Server",
      "Azure",
    ],
    href: "https://sidequests.azurewebsites.net/",
  },
   {
    title: "Space Invaders",
    description: "This is my version of Space Invaders built using the Pygame library. This game is the first step of many toward my goal of becoming a capable software developer through project-based learning. I wanted to create something that others enjoy playing while gaining experience creating clean and modular code.",
    date: "Sept 2025",
    imageSrc: "/project-images/space_invaders.png",
    tags: ["Python"],
    href: "https://github.com/TommyJu/space-invaders",
  },
  {
    title: "Supernova Early Warning System Android App",
    description: "Developed a real-time supernova alert system for Android as part of a capstone collaboration with BCIT’s Physics Department, extending the reach of the Supernova Early Warning System (SNEWS), which was previously limited to iOS. The solution integrates with NASA’s GCN (General Coordinate Network) and supports scalable, asynchronous alert delivery for astronomers and the public.",
    date: "May 2025",
    imageSrc: "/project-images/snews.png",
    tags: ["React Native", "Firebase", "Node.js", "Kafka", "Kotlin"],
    href: "https://snews2.org/",
  },
  {
    title: "RENR Mobile",
    description: "Collaborated with a team to develop a cross-platform mobile application for BCIT’s Renewable Resources program to streamline and digitize the process of creating and managing field safety forms. The project addressed key limitations in the previous web-based solution, particularly the lack of offline functionality and poor information accessibility.",
    date: "Jan 2025",
    imageSrc: "/project-images/renr.png",
    tags: ["React Native", "Firebase", "Figma"],
    href: "https://renr-bcit.web.app/login"
  },
  {
    title: "Good Books (Open Source Contribution)",
    description: "Good Books is an accounting System built in ASP.NET DotNetCore, ReactJS, MobX. Resolved three issues via pull request and merge.",
    date: "Mar 2025",
    imageSrc: "/project-images/good_books.png",
    tags: ["C#", ".NET", "SQL server", "Blazor", "Docker", "MVC Architecture"],
    href: "https://github.com/medhatelmasry/GoodBooks",
  },
  {
    title: "Roadside Repairs",
    description: "A responsive and user-friendly landing page built for Roadside Repairs. The site provides clients with a seamless way to connect with services, featuring clean design and optimized accessibility across devices.",
    date: "Aug 2024",
    imageSrc: "/project-images/roadside_repairs.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Web Design", "Freelance"],
    href: "https://247roadside.ca/",
  },
  {
    title: "Card Fight",
    description: "A strong example of OOP fundamentals in Java. This project is a card game that allows the user to create custom decks and battle against an opponent.",
    date: "Apr 2024",
    imageSrc: "/project-images/card_fight.png",
    tags: ["Java", "OOP", "JavaFX", "UML"],
    href: "https://github.com/TommyJu/card-fight",
  },
    {
    title: "Rain City Motorsports",
    description: "A simple yet beautiful landing page for Rain City Motorsports. This site is hosted using GitHub Pages and is fully responsive. Users are able to contact the shop through a form submission API provided by Formspree.",
    date: "Jan 2024",
    imageSrc: "/project-images/rain_city.png",
    tags: ["HTML", "CSS", "User Experience", "Freelance"],
    href: "https://www.raincitymotorsports.ca/",
  },

];

export default projectData;
