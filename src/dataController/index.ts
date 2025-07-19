import shreyasPhoto from'../assets/images/Passport-size-photo-shreyas.jpg'
import linkedinIcon from '../assets/svg/linkedinIcon.svg';
import githubIcon from '../assets/svg/githubIcon.svg';
import emailIcon from '../assets/svg/email.svg';
import phoneIcon from '../assets/svg/phonecallIcon.svg';

export const webData = {
    name: 'shreyas',
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
  "Express",
];
export const name = 'Shreyas Nagaraja'
export const collage = 'Engineering student at Maharaja Institute of Technology Mysore'
export const profilePhoto = shreyasPhoto ;
export const resume = "https://drive.google.com/file/d/1ea481adLfFlJGPaHzV8FapbknrngB6Ou/view?usp=sharing"

export const NAV_BAR_ITEM = {
  PROFILE_IMAGE: shreyasPhoto,
  TITLE: 'Shreyas Nagaraja',
  SUB_TITLE: 'Engineering student at Maharaja Institute of Technology Mysore',
  ICON_CONFIG: [
    {
      TITLE: 'Resume',
      IS_ACTIVE: true,
      REDIRECT: 'https://drive.google.com/file/d/1ea481adLfFlJGPaHzV8FapbknrngB6Ou/view?usp=sharing',
    },
    {
      ICON: {
        URL: linkedinIcon,
        ALT: 'LinkedIn',
      },
      REDIRECT: 'https://www.linkedin.com/in/shreyas-n-4837a2257/'
    },
    {
      ICON: {
        URL: githubIcon,
        ALT: 'GitHub',
      },
      REDIRECT: 'https://github.com/shreyasnnn'
    },
    {
      ICON: {
        URL: emailIcon,
        ALT: 'Email',
      },
      REDIRECT: ''
    },
    {
      ICON: {
        URL: phoneIcon,
        ALT: 'Phone',
      },
      REDIRECT: ''
    },
  ]
};