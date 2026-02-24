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
        title: "Line Cook, Server, and Delivery Driver",
        secondaryTitle: "Woking Dragon",
        description: "Developed teamwork skills to ensure cohesion and high-quality service in a fast-paced environment.",
        date: "Apr 2021 - Jul 2023",
        imageSrc: "/work-experience-images/woking_dragon.png",
        href: "https://wokingdragon.ca/"
    },
];

export default workExperienceData;