import shreyasPhoto from "../assets/images/Passport-size-photo-shreyas.webp";
import linkedinIcon from "../assets/svg/linkedinIcon.svg";
import githubIcon from "../assets/svg/githubIcon.svg";
import emailIcon from "../assets/svg/email.svg";
import phoneIcon from "../assets/svg/phonecallIcon.svg";
import demoProjectImage from "../assets/images/DemoProject.webp";
import tobaccoAiCover from "../assets/images/tobaccoAi/cover.webp"
import portfolioCover from "../assets/images/portfolio/cover.webp"
import pingmeCover from "../assets/images/pingme/cover.webp"
import auraCover from "../assets/images/aura/cover.webp"
import aiwhiteboardCover from "../assets/images/aiwhiteboard/cover.webp"
import canva from "../assets/images/tools/canva.webp"
import figma from "../assets/images/tools/figma.webp"
import git from "../assets/images/tools/git.webp"
import reactjs from "../assets/images/tools/reactjs.webp"
import reactnative from "../assets/images/tools/reactnative.webp"
import js from "../assets/images/tools/js.webp"
import ts from "../assets/images/tools/ts.webp"
import tailwind from "../assets/images/tools/tailwind.webp"
import supabase from "../assets/images/tools/supabase.webp"
import firebase from "../assets/images/tools/firebase.webp"
import web2 from "../assets/images/areaOfInterest/web/web2.webp"

import app2 from "../assets/images/areaOfInterest/app/app2.webp"

import ml2 from "../assets/images/areaOfInterest/ML/ml2.webp"

import ba2 from "../assets/images/areaOfInterest/ba/ba2.webp"

import ui2 from "../assets/images/areaOfInterest/ui/ui2.webp"

import cricket from "../assets/images/areaOfInterest/sports/cricket.webp"
import badminton from "../assets/images/areaOfInterest/sports/badminton.webp"
import tt from "../assets/images/areaOfInterest/sports/tt.webp"

// import dr1 from "../assets/images/areaOfInterest/drawing/dr1.jpg"
// import dr2 from "../assets/images/areaOfInterest/drawing/dr2.jpg"
// import dr3 from "../assets/images/areaOfInterest/drawing/dr3.jpg"



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
      description: 'Technologies for Design, Analysis, and Development.'
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
      REDIRECT: "mailto:shreyasnagaraja@example.com",
    },
    {
      ICON: {
        URL: phoneIcon,
        ALT: "Phone",
      },
      REDIRECT: "tel:+918317449363",
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
      caption: "AI-powered system for grading tobacco leaves efficiently",
      coverImage: tobaccoAiCover, // thumbnail for card
      images: [
        demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,
      ],
      placeAndAffiliation: 'MIT Mysore, Major Project',
      field: 'Machine Learning in Agriculture',
      time: '4-Months'
    },
    {
      id: "project-2",
      title: "Personal Portfolio Website",
      caption: "Showcasing UI/UX skills and frontend development",
      coverImage: portfolioCover,
      images: [
       demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,
      ],
      description: "This is a detailed explanation of Project 2...",
      placeAndAffiliation: 'Mysore, Personal Project',
      field: 'Frontend Engineering & Interaction Design"',
      time: '1-Month'
    },
    {
      id: "project-3",
      title: "PingMe",
      caption: "Real-time chat application with online presence and file sharing",
      coverImage: pingmeCover, // thumbnail for card
      images: [
        demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,
      ],
      description: "This is a detailed explanation of Project 3...",
      placeAndAffiliation: 'Mysore, Personal Project',
      field: 'Full-stack Mobile App Development',
      time: '2-Months'
    },
    {
      id: "project-4",
      title: "Ai Whiteboard",
      caption: "Intelligent whiteboard for simple and complex mathematical problems",
      coverImage: aiwhiteboardCover,
      images: [
       demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,
      ],
      description: "This is a detailed explanation of Project 42...",
      placeAndAffiliation: 'MIT Mysore, Mini Project',
      field: 'Gemini-API Integration',
      time: '1-Months'
    },
    {
      id: "project-5",
      title: "AURA virtual Assistent",
      caption: "Intelligent assistant for simple user's google search",
      coverImage: auraCover, // thumbnail for card
      images: [
        demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,demoProjectImage,
      ],
      description: "This is a detailed explanation of Project 5...",
      placeAndAffiliation: 'Mysore, Personal Project',
      field: 'JavaScript Project',
      time: '1-Months'
    }
  ],
};

export const arearOfInterest = [
  {
    title: "Web Development",
    src: {
      first: demoProjectImage,
      second: demoProjectImage,
      third: web2,
    },
    size: 2,
  },
  {
    title: "App Development",
    src: {
      first: demoProjectImage,
      second: demoProjectImage,
      third: app2,
    },
    size: 2,
  },
  {
    title: "Machine Learning",
    src: {
      first: demoProjectImage,
      second: demoProjectImage,
      third: ml2,
    },
    size: 2,
  },
  {
    title: "Backend Development",
    src: {
      first: demoProjectImage,
      second: demoProjectImage,
      third: ba2,
    },
    size: 2,
  },
  {
    title: "UI/UX Design",
    src: {
      first: demoProjectImage,
      second: demoProjectImage,
      third: ui2,
    },
    size: 2,
  },
  // {
  //   title: "Sketching & Drawings",
  //   src: {
  //     first: dr1,
  //     second: dr2,
  //     third: dr3,
  //   },
  //   size: 2,
  // },
  {
    title: "Sports",
    src: {
      first: cricket,
      second: badminton,
      third: tt,
    },
    size: 2,
  }
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

export const getProjectDetails = (project: {
  placeAndAffiliation: string;
  field: string;
  time: string;
}) => {
  return [
    {
      URL: emailIcon,
      title: "Place and Affiliation",
      Content: project.placeAndAffiliation,
    },
    {
      URL: emailIcon,
      title: "Field",
      Content: project.field,
    },
    {
      URL: emailIcon,
      title: "Time",
      Content: project.time,
    },
  ];
};
