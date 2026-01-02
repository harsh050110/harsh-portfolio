// data/experience.ts
export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements: string[];
    type?: 'work' | 'research' | 'education' | 'leadership';
  }
  
   export const experiences: Experience[] = [
    // Regular job positions
    {
      id: "web-dev",
      title: "Web-Developer",
      company: "Correct Steps Consultancy Pvt. Ltd",
      location: "Ghaziabad, India",
      startDate: "JuLy 2025",
      endDate: "Dec 2024",
      description: "Designed and implemented a web portal for clients collaboration in Correct Step Consultancy Pvt.Ltd and Capstone projects.",
      achievements: [
        "Developed responsive components using React.js, HTML, CSS, JavaScript,and ensured cross-browser compatibility",
        "Improved user engagement by 30% through intutive UI/UX designs and seamless navigation",
        "Collaborated with backend developers to integrate RESTful APIs, enhancing data retrieval and user experience",
      ],
      type: 'work'
    },
    // Research positions
    {
      id: "iot-water-management",
      title: "IoT-Enabled Smart Water Management System",
      company: "Vivekananda Global University ",
      location: "Jaipur, India",
      startDate: "March 2024",
      endDate: "August 2025",
      description: "Research under Dr. Ramesh Chand Chaudhary on Intelligent Irrigation System with Real-Time Monitoring .",
      achievements: [
        "Designed and implemented an automatic irrigation system using soil moisture–based sensing for real-time water control.",
        "Integrated environmental sensors (soil moisture, temperature, humidity) with a microcontroller for continuous data acquisition.",
        "Enabled IoT-based monitoring for remote visualization of soil and environmental parameters.",
        "Demonstrated application of embedded systems, IoT communication, and control algorithms for sustainable agriculture."
      ],
      type: 'research'
    },
    {
      id: "wireless-supply",
      title: "Wireless Power Transmission System for Poultry Farm Applications",
      company: "Vivekananda Global University",
      location: "Jaipur, India",
      startDate: "June 2023",
      endDate: "March 2024",
      description: "Research under Prof. Ramesh Chand Chaudhary on Wireless Power Transmission System for Poultry Farm Applications.",
      achievements: [
        "Designed a wireless power transmission system to supply energy to poultry farm equipment without physical wiring",
        "Enabled continuous power supply for low-power devices such as sensors, lighting, and feeders.",
        "Improved maintenance efficiency and system reliability by reducing cable wear and power losses.",
        "Demonstrated application of power electronics, electromagnetic induction, and wireless energy transfer principles."
      ],
      type: 'research'
    },
    
    // Leadership positions
      {
        id: "student-council-member",
        title: "Social Media and Video Editor Head",
        company: "Student Council Vivekananda Global University - RJ",
        location: "Jaipur,Rajasthan, India",
        startDate: "November 2024",
        endDate: "Present",
        description: "Edited short-form and long-form videos using modern editing techniques, including cuts, transitions, subtitles, color correction, and sound syncing.",
        achievements: [
          "Increased social media engagement and reach through optimized video edits and content strategy.",
          "Improved viewer retention by applying effective storytelling, pacing, and captioning techniques.",
          "Delivered high-quality video content under tight deadlines, supporting consistent posting schedules.",
          "Contributed to audience growth by aligning visuals with current social media trends."
        ],
        type: 'leadership'
      },
      {
        id: "NCC- Under Officer",
        title: "Under Officer (UO) - NCC Army",
        company: "DAV Public School, Cantt Area,Gaya",
        location: "Gaya,Bihar,India",
        startDate: "November 2021",
        endDate: "May 2023",
        description: "Assisted in planning and executing parades, drills, camps, and national-level events while maintaining discipline and teamwork.",
        achievements: [
          "Successfully led and mentored junior cadets, improving participation and discipline during drills and activities.",
          "Recognized for leadership, responsibility, and organizational skills during NCC camps and events.",
          "Contributed to the successful execution of training camps, social awareness drives, and community outreach programs.",
          "Developed strong command, teamwork, and decision-making skills through hands-on leadership experience."
        ],
        type: 'leadership'
      }
  ];