// data/skills.ts
export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Tools & Others"
  | "DSA & Problem Solving"
  | "System Design";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, { name: string }[]> = {
  Frontend: [
    { name: "React.js" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "HTML / CSS" },
  ],
  Backend: [
    { name: "Node.js" },
    { name: "Express" },
    { name: "MongoDB" },
    { name: "REST APIs" },
  ],
  "Tools & Others": [
    { name: "Git / GitHub" },
    { name: "VS Code" },
    { name: "Figma" },
    { name: "Vercel" },
  ],
  "DSA & Problem Solving": [   // ← new
    { name: "Java" },
    { name: "Arrays & Strings" },
    { name: "Linked Lists" },
    { name: "Trees & Graphs" },
    { name: "Dynamic Programming" },
    { name: "Recursion" },
    { name: "LeetCode" },
    { name: "Codeforces" },
  ],
  "System Design": [           // ← new
    { name: "REST Architecture" },
    { name: "Database Design" },
    { name: "Caching" },
    { name: "Load Balancing" },
    { name: "Microservices" },
    { name: "SQL / NoSQL" },
  ],
};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};