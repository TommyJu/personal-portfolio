interface WorkExperienceEntry {
  title: string;          
  secondaryTitle: string;
  description: string;
  date: string;
  imageSrc: string;
  href?: string;
}

const workExperienceData: WorkExperienceEntry[] = [
    {
        title: "Automotive Detailing Agent",
        secondaryTitle: "West Coast Car Rentals",
        description: "Inspected, detailed, and transported rental vehicles while helping ensure a smooth customer experience.",
        date: "Mar 2026 - Present",
        imageSrc: "/work-experience-images/west_coast.png",
        href: "https://www.westcoastcarrentals.com/"
    },
    {
        title: "Line Cook, Server, and Delivery Driver",
        secondaryTitle: "Woking Dragon",
        description: "Developed teamwork skills to ensure cohesion and high-quality service in a fast-paced environment.",
        date: "Apr 2021 - Jul 2023",
        imageSrc: "/work-experience-images/woking_dragon.png",
        href: "https://wokingdragon.ca/"
    },
];

export default workExperienceData;