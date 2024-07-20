export const projectsData: ProjectDataType[] = [
  {
    title: "SSA Portal",
    description:
      "SSA Portal is a comprehensive Web ERP system for managing inventory, students, staff, and courses. It includes abacus tools and practice features for students. Built with React, Next.js, and MySQL, the project is designed for scalability and maintainability.",
    date: "07-03-2024 to Present",
    images: [
      "/projects/ssa-1.png",
      "/projects/ssa-2.png",
      "/projects/ssa-3.png",
      "/projects/ssa-4.png",
    ],
    isFeatured: true,
    techStack: ["React", "Next.js", "MySQL"],
  },
  {
    title: "Bright Pathways",
    description:
      "Bright Pathways is a comprehensive platform designed to help individuals, especially senior citizens, find essential services like old age care, animal shelters, and adoption centers. The project features a responsive website built with Next.js and Tailwind CSS and a mobile app developed in Kotlin, both supported by Firebase and 'God Speed' for robust backend services.",
    date: "29-10-2023",
    link: "https://github.com/mukund1606/bright-pathways",
    images: ["/projects/bright-pathways.png"],
    isFeatured: true,
    techStack: ["Next.js", "Tailwind CSS", "God Speed", "Firebase"],
  },
  {
    title: "ASLYF",
    description:
      "Aslyf bridges communication gaps by transforming ideas into American Sign Language (ASL). This platform offers features like text-to-ASL conversion, video-to-text transcription, and text-to-audio conversion, empowering users to learn and communicate using ASL. Future updates will include ASL-to-text conversion for real-time translation. Join us in fostering inclusivity and breaking communication barriers.",
    date: "14-08-2023",
    link: "https://github.com/mukund1606/aslyf-project",
    images: ["/projects/aslyf.png"],
    isFeatured: true,
    techStack: ["Next.js", "Tailwind CSS", "Web Speech API"],
  },
  {
    title: "AWC Website",
    description:
      "AcchaWalaCollege is a platform for students to find the best colleges in India, offering reviews, rankings, and admission guidance. I developed the initial basic, responsive frontend for their website, enhancing user experience and accessibility.",
    date: "15-05-2023",
    link: "https://github.com/mukund1606/awc-website",
    images: [],
    isFeatured: false,
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Python TTS Server",
    description:
      "A simple Python FastAPI server that provides WAV and base64 audio for given text using Microsoft Speech Platform Runtime (Version 11) in wine. This server allows developers to build and deploy Text-to-Speech applications efficiently. It also integrates Redis for caching, ensuring lightning-fast responses.",
    date: "14-07-2024",
    link: "https://github.com/mukund1606/python-tts-server",
    images: [],
    isFeatured: false,
    techStack: ["Python", "FastAPI", "Redis"],
  },
  {
    title: "Cricbuzz Web Scraper",
    description:
      "The Cricbuzz Web Scraper is a tool designed to scrape comprehensive cricket data from Cricbuzz. It can retrieve live, upcoming, and past matches, series details, team information, and player stats. Built with ease of use in mind, this scraper allows users to access detailed cricket data programmatically.",
    date: "10-07-2023",
    link: "https://github.com/mukund1606/cricbuzz-scraper",
    images: [],
    isFeatured: false,
    techStack: ["Python", "BeautifulSoup"],
  },
  {
    title: "AlternativeTo Scraper",
    description:
      "The AlternativeTo Scraper is a powerful tool for scraping the latest apps from AlternativeTo. It provides search functionality, allows users to scrape app details, and find alternatives with various filters. Supporting Chrome, Edge, and Firefox, this scraper enables easy access to new, trending, most viewed, and crew-picked apps, as well as discontinued ones.",
    date: "10-07-2023",
    link: "https://github.com/mukund1606/alternativeto-scraper",
    images: [],
    isFeatured: false,
    techStack: ["Python", "BeautifulSoup", "Selenium"],
  },
];

export type ProjectDataType = {
  title: string;
  description: string;
  date: string;
  link?: string;
  images: string[];
  isFeatured: boolean;
  techStack: string[];
};