interface EducationEntry {
  title: string;          
  secondaryTitle: string;
  description: string;
  date: string;
  imageSrc: string;
}

const educationData: EducationEntry[] = [
    {
        title: "Computer Systems Technology Diploma",
        secondaryTitle: "British Columbia Institute of Technology",
        description: "The Computer Systems Technology (CST) Diploma program combines computer systems theory with hands-on practical experience in software development.",
        date: "Sept 2023 - May 2025",
        imageSrc: "/education-images/bcit.png",
    },
]

export default educationData;