export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "Arthasya Communications",
    title: "Arthasya ",
    description: "A decentralized music application enabling artists to mint and sell their music as NFTs.",
    longDescription: "Developed a decentralized music platform for artists to mint and sell NFTs with Solidity and IPFS, enabling transactions and faster monetization via Polygon. Implemented role-based access and interactive features like community hubs, increasing session duration substantially.",
    technologies: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Smart Contracts", "Web2.js", "Blockchain"],
    achievements: [
      "Built for 150+ Customer to mint and sell NFTs with Solidity and IPFS",
      "Enabled 300+ transactions and 30% faster monetization via Polygon",
      "Implemented role-based access and interactive features like community hubs, increasing session duration by 65%",
      "Eliminated third-party dependencies and automated royalty payouts, reducing overhead and platform latency by 30%"
    ],
    image: "/images/projects/Arthasya/arthasya.jpg",
    github: "https://github.com/harsh050110/Arthasya-2.0.git",
    liveUrl: "https://arthasyacommunications.com",
    featured: true
  },
  {
    id: "Binge-Learning",
    title: "Binge Learning",
    description: "A blockchain-based platform digitizing Pokémon cards as NFTs with secure trading and battling features.",
    longDescription: "Developed a blockchain-based platform digitizing 300+ Pokémon cards as NFTs, enabling secure trading and battling with on-chain verified ownership and battle logic. Integrated Aptos wallet authentication for seamless trades with real-time feedback.",
    technologies: ["Move", "Aptos", "NFTs", "React", "TypeScript", "Node.js", "Express", "TailwindCSS", "Three.js", "MongoDB", "Blockchain"],
    achievements: [
      "Developed a blockchain-based platform digitizing 300+ Pokémon cards as NFTs",
      "Enabled secure trading and battling with on-chain verified ownership and battle logic",
      "Integrated Aptos wallet authentication to ease 120+ NFT trades with real-time feedback",
      "Crafted a pixel art-inspired UI/UX using TailwindCSS and Three.js, improving user engagement by 60%"
    ],
    image: "/images/projects/binge-learning/binge-learning.png",
    github: "https://github.com/harsh050110/Binge-Learning.git",
    liveUrl: "https://bingelearning.in",
    featured: true
  },
  {
    id: "BingeWatch",
    title: "BingeWatch",
    description: "Led the development of the Binge Watch website, attracting 20,000 students with 6,000 registrations.",
    longDescription: "Led the development of the Binge Watch website, attracting 20,000 students with 6,000 registrations across 10 events, optimizing for crowd loading. Integrated payment gateway for Cultural and Technical events.",
    technologies: ["React.js","TypeScript", "TailwindCSS", "Node.js", "Express", "MongoDB", "Razorpay", "Redux", "Framer Motion"],
    achievements: [
      "Attracted 20,000 students with 6,000 registrations across 10 events",
      "Emphasized crowd loading optimization for seamless user experience",
      "Integrated payment gateway for Cultural and Technical events"
    ],
    image: "/images/projects/bingewatch/bingewatch.png",
    github: "https://github.com/harsh050110/Binge-Watch.git",
    liveUrl: "https://bingewatchdigital.com",
    featured: true
  },
  {
    id: "lightning-time",
    title: "Lightning Time",
    description: "A Bitcoin Lightning Network-powered time tracking web app that allows users to check in for work and automatically receive payments in Satoshis.",
    longDescription: "Developed during the MIT BITCOIN EXPO 2025 Hackathon, Lightning Time is a time tracking application that allows users to 'check in' to track their work hours and automatically receive Satoshi (SATs) payments for each hour worked. The app features real-time tracking, automatic Bitcoin payments via the Lightning Network, detailed analytics, and a responsive design for all devices.",
    technologies: ["Bitcoin", "Lightning Network", "LNbits", "Soulbound Tokens", "React", "Vite", "Node.js", "Express", "TailwindCSS", "Ethers.js", "Blockchain"],
    achievements: [
      "Built a real-time time tracking system with automatic Bitcoin payments via Lightning Network",
      "Implemented an admin dashboard for monitoring work time and payment statistics",
      "Developed detailed analytics for visualizing earnings, work patterns, and payment history",
      "Designed a future authentication system using Soulbound Tokens (SBTs) for secure admin access",
      "Created a responsive design that works seamlessly across mobile, tablet, and desktop devices"
    ],
    image: "/images/projects/lightning-time/lightning-time.jpg",
    github: "https://github.com/harsh050110/Lightning-Time-Main.git",
    featured: false
  },

  {
    id: "neunotes",
    title: "NeuNotes",
    description: "A comprehensive academic notes sharing platform facilitating knowledge exchange among students and faculty.",
    longDescription: "Designed and developed NeuNotes, a collaborative platform for sharing academic content with role-based access control. The system features course organization, notes upload/preview, search functionality, ratings, comments, and analytics dashboards.",
    technologies: ["MySQL", "React", "Vite", "Node.js", "Express", "TailwindCSS", "Zustand", "Axios", "Multer", "Bcrypt", "REST API"],
    achievements: [
      "Built a comprehensive platform with role-based access for students, faculty, and admins",
      "Implemented a sophisticated database structure with 12 tables, stored procedures, and triggers",
      "Created a full-featured notes management system with ratings, comments, and favorites",
      "Developed an intuitive UI for browsing, uploading, and managing academic content"
    ],
    image: "/images/projects/neunotes/neunotes.webp",
    github: "https://github.com/harsh050110/Nue-notes.git",
    featured: false
  },
  {
    id: "noteit",
    title: "noteit",
    description: "A mobile app for sharing and accessing study notes and resources with social features and gamification.",
    longDescription: "Developed NoteIT, an Android mobile application that allows students to share and access study notes and educational resources. The app features user authentication, PDF uploading/downloading, badge rewards for engagement, and an intuitive navigation system with fragments.",
    technologies: ["Android Studio", "Java", "Firebase", "Material Design", "XML"],
    achievements: [
      "Created 9 activities and 4 fragments for comprehensive app functionality",
      "Implemented secure user authentication and data storage with Firebase",
      "Designed an engaging user interface with gamification elements like badges",
      "Built a robust PDF upload and retrieval system for educational resources"
    ],
    image: "/images/projects/noteit/noteit.jpg",
    github: "https://github.com/harsh050110/Nue-notes.git",
    featured: false
  }
];