import shreyasPhoto from "../assets/images/Passport-size-photo-shreyas.jpg";
import linkedinIcon from "../assets/svg/linkedinIcon.svg";
import githubIcon from "../assets/svg/githubIcon.svg";
import emailIcon from "../assets/svg/email.svg";
import phoneIcon from "../assets/svg/phonecallIcon.svg";
import demoProjectImage from "../assets/images/DemoProject.jpg";
import tobaccoAiCover from "../assets/images/tobaccoAi/cover.png"
import portfolioCover from "../assets/images/Portfolio/cover.png"
import pingmeCover from "../assets/images/PingMe/cover.png"
import auraCover from "../assets/images/aura/cover.png"
import aiwhiteboardCover from "../assets/images/aiwhiteboard/cover.png"
import canva from "../assets/images/tools/canva.png"
import figma from "../assets/images/tools/figma.png"
import git from "../assets/images/tools/git.png"
import reactjs from "../assets/images/tools/reactjs.png"
import reactnative from "../assets/images/tools/reactnative.png"
import js from "../assets/images/tools/js.png"
import ts from "../assets/images/tools/ts.png"
import tailwind from "../assets/images/tools/tailwind.png"
import supabase from "../assets/images/tools/supabase.jpg"
import firebase from "../assets/images/tools/firebase.png"


export const webData = {
  name: "shreyas",
};

export const skills = [
  "ReactJS",
  "React Native",
  "TypeScript",
  "TailwindCSS",
  "Firebase",
  "Node.js",
  "Git",
  "MongoDB",
  "Supabase",
];

export const name = "Shreyas Nagaraja";

export const collage =
  "Engineering student at Maharaja Institute of Technology Mysore";

  export const profilePhoto = shreyasPhoto;

  export const resume =
  "https://drive.google.com/file/d/1QbHtuqlKZNWOqnxeUVrrt6kCsVJX6RXl/view?usp=sharing";

  export const sectionTexts = {
    projectSection:{
      btnText: 'Sub-Systems',
      title: 'Projects',
      description: 'A blend of engineering projects crafted during academic learning, personal curiosity, and teamwork.'
    },
    areaOfInterestSection:{
      btnText: 'Loops',
      title: 'Area of Interest',
      description: 'Delivering innovative, results-driven solutions.'
    },
    powerfulToolsSection:{
      btnText: 'Toolkit',
      title: 'Powerful Tools,',
      description: 'Tools for Design, Development and more.'
    },
    contactSection:{
      btnText: 'Contact',
      title: 'Get in Touch',
      description: "Let's Connect",
      mobileNumber: '+91 8317449363',
      gMail: 'nshreyas1309@gmail.com',
      copyRights: '2025, Rights Reserved'
    }
  }

export const NAV_BAR_ITEM = {
  PROFILE_IMAGE: shreyasPhoto,
  TITLE: "Shreyas Nagaraja",
  SUB_TITLE: "Engineering student at Maharaja Institute of Technology Mysore",
  ICON_CONFIG: [
    {
      TITLE: "Resume",
      IS_ACTIVE: true,
      REDIRECT:
        "https://drive.google.com/file/d/1QbHtuqlKZNWOqnxeUVrrt6kCsVJX6RXl/view?usp=sharing",
    },
    {
      ICON: {
        URL: linkedinIcon,
        ALT: "LinkedIn",
      },
      REDIRECT: "https://www.linkedin.com/in/shreyas-n-4837a2257/",
    },
    {
      ICON: {
        URL: githubIcon,
        ALT: "GitHub",
      },
      REDIRECT: "https://github.com/shreyasnnn",
    },
    {
      ICON: {
        URL: emailIcon,
        ALT: "Email",
      },
      REDIRECT: "",
    },
    {
      ICON: {
        URL: phoneIcon,
        ALT: "Phone",
      },
      REDIRECT: "",
    },
  ],
};

export const projectImage = {
  image: [
    {
      title: "ToboGrade Ai - Automated Tobacco Leaf Grading System",
      URL: tobaccoAiCover,
    },
    {
      title: "Personal Portfolio Website",
      URL: portfolioCover,
    },
    {
      title: "PingMe",
      URL: pingmeCover,
    },
    {
      title: "Ai Whiteboard",
      URL: aiwhiteboardCover,
    },
    {
      title: "AURA virtual Assistent",
      URL: auraCover,
    }
  ]
};

export const ProjectInfo = {
  projects: [
    {
      id: "project-1",
      title: "ToboGrade Ai",
      caption: "Automated Tobacco Leaf Grading System",
      coverImage: tobaccoAiCover, // thumbnail for card
      images: [
        demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,
      ],
      placeAndAffiliation: 'NIFT Gandhinagar',
      field: 'Designin Innovation Method',
      time: '4-Months'
    },
    {
      id: "project-2",
      title: "Personal Portfolio Website",
      caption: "UI/UX Exploration",
      coverImage: portfolioCover,
      images: [
       demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,
      ],
      description: "This is a detailed explanation of Project 2...",
      placeAndAffiliation: 'NIFT Gandhinagar',
      field: 'Designin Innovation Method',
      time: '4-Months'
    },
    {
      id: "project-3",
      title: "PingMe",
      caption: "Design Thinking, Experience Design",
      coverImage: pingmeCover, // thumbnail for card
      images: [
        demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,
      ],
      description: "This is a detailed explanation of Project 3...",
      placeAndAffiliation: 'NIFT Gandhinagar',
      field: 'Designin Innovation Method',
      time: '4-Months'
    },
    {
      id: "project-4",
      title: "Ai Whiteboard",
      caption: "UI/UX Exploration",
      coverImage: aiwhiteboardCover,
      images: [
       demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,
      ],
      description: "This is a detailed explanation of Project 42...",
      placeAndAffiliation: 'NIFT Gandhinagar',
      field: 'Designin Innovation Method',
      time: '4-Months'
    },
    {
      id: "project-5",
      title: "AURA virtual Assistent",
      caption: "Design Thinking, Experience Design",
      coverImage: auraCover, // thumbnail for card
      images: [
        demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,
      ],
      description: "This is a detailed explanation of Project 5...",
      placeAndAffiliation: 'NIFT Gandhinagar',
      field: 'Designin Innovation Method',
      time: '4-Months'
    }
  ],
};

export const arearOfInterest = [
  {
    title: "System Dynamics",
    src: {
      first: demoProjectImage,
      second: demoProjectImage,
      third: demoProjectImage,
    },
    size: 2,
  },
  {
    title: "System Dynamics",
    src: {
      first: demoProjectImage,
      second: demoProjectImage,
      third: demoProjectImage,
    },
    size: 2,
  },
  {
    title: "System Dynamics",
    src: {
      first: demoProjectImage,
      second: demoProjectImage,
      third: demoProjectImage,
    },
    size: 2,
  },
  {
    title: "System Dynamics",
    src: {
      first: demoProjectImage,
      second: demoProjectImage,
      third: demoProjectImage,
    },
    size: 2,
  },
  {
    title: "System Dynamics",
    src: {
      first: demoProjectImage,
      second: demoProjectImage,
      third: demoProjectImage,
    },
    size: 2,
  },
  {
    title: "System Dynamics",
    src: {
      first: demoProjectImage,
      second: demoProjectImage,
      third: demoProjectImage,
    },
    size: 2,
  }, 
];
export const tools = [
  {
    title: 'ReactJs',
    caption:'Designin intuitive with seamless collaborati ',
    URL: reactjs,
    percentage: 95
  },
  {
    title: 'React Native',
    caption:'Designin intuitive with seamless collaborati ',
    URL: reactnative,
    percentage: 80
  },
  {
    title: 'TailwindCSS',
    caption:'Designin intuitive with seamless collaborati ',
    URL: tailwind,
    percentage: 75
  },
  {
    title: 'Supabase',
    caption:'Designin intuitive with seamless collaborati ',
    URL: supabase,
    percentage: 75
  },
  {
    title: 'Firebase',
    caption:'Designin intuitive with seamless collaborati ',
    URL: firebase,
    percentage: 75
  },
  {
    title: 'TypeScript',
    caption:'Designin intuitive with seamless collaborati ',
    URL: ts,
    percentage: 70
  },
  {
    title: 'JavaScript',
    caption:'Designin intuitive with seamless collaborati ',
    URL: js,
    percentage: 80
  },
  {
    title: 'Git',
    caption:'Designin intuitive with seamless collaborati ',
    URL: git,
    percentage: 85
  },
  {
    title: 'Figma',
    caption:'Designin intuitive with seamless collaborati ',
    URL: figma,
    percentage: 70
  },
  {
    title: 'Canva',
    caption:'Designin intuitive with seamless collaborati ',
    URL: canva,
    percentage: 90
  },
]

export const projectsDetails = [
  {
    URL: emailIcon,
    title: 'Place and Affiliateion',
    Content: 'NAMTECH, Gandhinagar, Panipath',
  },
  {
    URL: emailIcon,
    title: 'Field',
    Content: 'Textile Recycle System',
  },
  {
    URL: emailIcon,
    title: 'Time',
    Content: '5-Months',
  },
];