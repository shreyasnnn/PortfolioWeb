import shreyasPhoto from'../assets/images/Passport-size-photo-shreyas.jpg'
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

export const NAV_BAR_ITEM ={
  PROFILE_IMAGE: {shreyasPhoto},
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
        URL: './src/assets/svg/linkedinIcon.svg',
        ALT: 'LinkedIn'
      },
      REDIRECT: ''
    },
    {
      ICON: {
        URL: './src/assets/svg/githubIcon.svg',
        ALT: 'Git-Hub'
      },
      REDIRECT: ''
    },
    {
      ICON: {
        URL: './src/assets/svg/email.svg',
        ALT: 'E-Mail'
      },
      REDIRECT: ''
    },
    {
      ICON: {
        URL: './src/assets/svg/phonecallIcon.svg',
        ALT: 'Phone'
      },
      REDIRECT: ''
    }
  ]
  
}