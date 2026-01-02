export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
  export const education: Education[] = [
    {
      id: "VGU",
      degree: "Bachelor's in Computer Science",
      institution: "Vivekananda Global University",
      location: "Jaipur, Rajasthan, India",
      startDate: "August 2023",
      endDate: "May 2027"
    },
    
  ];