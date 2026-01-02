export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/harsh050110",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/harsh-kumar-98440a304/",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:harshkumar011045@gmail.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+91-9801079780",
      icon: "phone"
    }
  ];