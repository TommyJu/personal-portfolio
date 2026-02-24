interface EducationEntry {
  title: string;          
  secondaryTitle: string;
  description: string;
  date: string;
  imageSrc: string;
  href?: string;
}

const educationData: EducationEntry[] = [
    {
        title: "Computer Systems Technology Diploma",
        secondaryTitle: "British Columbia Institute of Technology",
        description: "The Computer Systems Technology (CST) Diploma program combines computer systems theory with hands-on practical experience in software development.",
        date: "Sept 2023 - May 2025",
        imageSrc: "/education-images/bcit.png",
        href: "https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma/#overview"
    },
    {
       title: "Bachelor of Science",
        secondaryTitle: "University of British Columbia",
        description: "Studied at UBC for two years while majoring in Mathematics. Transferred to BCIT for a hands-on experience in software development.",
        date: "Sept 2020 - Feb 2022",
        imageSrc: "/education-images/ubc.png",
        href: "https://www.ubc.ca/about/" 
    },
]

export default educationData;