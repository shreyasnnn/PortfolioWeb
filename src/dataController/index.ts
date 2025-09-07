import * as Assets from "../assets";

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

  export const profilePhoto = Assets.shreyasPhoto;

  export const resume =
  "https://drive.google.com/file/d/11ugP2wH2SYijMS0iKuj2Wgurvl5wldeI/view?usp=sharing";

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
  PROFILE_IMAGE: Assets.shreyasPhoto,
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
        URL: Assets.linkedinIcon,
        ALT: "LinkedIn",
      },
      REDIRECT: "https://www.linkedin.com/in/shreyas-n-4837a2257/",
    },
    {
      ICON: {
        URL: Assets.githubIcon,
        ALT: "GitHub",
      },
      REDIRECT: "https://github.com/shreyasnnn",
    },
    {
      ICON: {
        URL: Assets.emailIcon,
        ALT: "Email",
      },
      REDIRECT: "mailto:shreyasnagaraja@example.com",
    },
    {
      ICON: {
        URL: Assets.phoneIcon,
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
      URL: Assets.tobocover,
    },
    {
      title: "Personal Portfolio Website",
      URL: Assets.portfolioCover,
    },
    {
      title: "PingMe",
      URL: Assets.pingmeCover,
    },
    {
      title: "Ai Whiteboard",
      URL: Assets.aiwhiteboardCover,
    },
    {
      title: "AURA virtual Assistent",
      URL: Assets.auraCover,
    }
  ]
};

export const ProjectInfo = {
  projects: [
    {
      id: "project-1",
      title: "ToboGrade Ai",
      caption: "AI-powered system for grading tobacco leaves efficiently",
      link: "https://tobograde-tobacco-grading-system.netlify.app/",
      coverImage: Assets.tobocover, // thumbnail for card
      images: [
        Assets.tobo1, Assets.tobo2, Assets.tobo3, Assets.tobo4, Assets.tobo5,
      ],
      placeAndAffiliation: 'MIT Mysore, Major Project',
      field: 'Machine Learning in Agriculture',
      time: '4-Months'
    },
    {
      id: "project-2",
      title: "Personal Portfolio Website",
      caption: "Showcasing UI/UX skills and frontend development",
      coverImage: Assets.portfolioCover,
      images: [
       Assets.demoProjectImage,Assets.demoProjectImage,Assets.demoProjectImage,Assets.demoProjectImage,Assets.demoProjectImage,
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
      coverImage: Assets.pingmeCover, // thumbnail for card
      images: [
        Assets.demoProjectImage,Assets.demoProjectImage,Assets.demoProjectImage,Assets.demoProjectImage,Assets.demoProjectImage,
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
      coverImage: Assets.aiwhiteboardCover,
      images: [
       Assets.demoProjectImage,Assets.demoProjectImage,Assets.demoProjectImage,Assets.demoProjectImage,Assets.demoProjectImage,
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
      coverImage: Assets.auraCover, // thumbnail for card
      images: [
        Assets.demoProjectImage,Assets.demoProjectImage,Assets.demoProjectImage,Assets.demoProjectImage,Assets.demoProjectImage,
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
      first: Assets.demoProjectImage,
      second: Assets.demoProjectImage,
      third: Assets.web2,
    },
    size: 2,
  },
  {
    title: "App Development",
    src: {
      first: Assets.demoProjectImage,
      second: Assets.demoProjectImage,
      third: Assets.app2,
    },
    size: 2,
  },
  {
    title: "Machine Learning",
    src: {
      first: Assets.demoProjectImage,
      second: Assets.demoProjectImage,
      third: Assets.ml2,
    },
    size: 2,
  },
  {
    title: "Backend Development",
    src: {
      first: Assets.demoProjectImage,
      second: Assets.demoProjectImage,
      third: Assets.ba2,
    },
    size: 2,
  },
  {
    title: "UI/UX Design",
    src: {
      first: Assets.demoProjectImage,
      second: Assets.demoProjectImage,
      third: Assets.ui2,
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
      first: Assets.cricket,
      second: Assets.badminton,
      third: Assets.tt,
    },
    size: 2,
  }
];
export const tools = [
  {
    title: 'ReactJs',
    caption:'Designin intuitive with seamless collaborati ',
    URL: Assets.reactjs,
    percentage: 95
  },
  {
    title: 'React Native',
    caption:'Designin intuitive with seamless collaborati ',
    URL: Assets.reactnative,
    percentage: 80
  },
  {
    title: 'TailwindCSS',
    caption:'Designin intuitive with seamless collaborati ',
    URL: Assets.tailwind,
    percentage: 75
  },
  {
    title: 'Supabase',
    caption:'Designin intuitive with seamless collaborati ',
    URL: Assets.supabase,
    percentage: 75
  },
  {
    title: 'Firebase',
    caption:'Designin intuitive with seamless collaborati ',
    URL: Assets.firebase,
    percentage: 75
  },
  {
    title: 'TypeScript',
    caption:'Designin intuitive with seamless collaborati ',
    URL: Assets.ts,
    percentage: 70
  },
  {
    title: 'JavaScript',
    caption:'Designin intuitive with seamless collaborati ',
    URL: Assets.js,
    percentage: 80
  },
  {
    title: 'Git',
    caption:'Designin intuitive with seamless collaborati ',
    URL: Assets.git,
    percentage: 85
  },
  {
    title: 'Figma',
    caption:'Designin intuitive with seamless collaborati ',
    URL: Assets.figma,
    percentage: 70
  },
  {
    title: 'Canva',
    caption:'Designin intuitive with seamless collaborati ',
    URL: Assets.canva,
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
      URL: Assets.emailIcon,
      title: "Place and Affiliation",
      Content: project.placeAndAffiliation,
    },
    {
      URL: Assets.emailIcon,
      title: "Field",
      Content: project.field,
    },
    {
      URL: Assets.emailIcon,
      title: "Time",
      Content: project.time,
    },
  ];
};
