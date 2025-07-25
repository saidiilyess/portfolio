/* Personal Portfolio Configuration for Ilyess Saidi */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Ilyess Saidi",
  title: "Hi all, I'm Ilyess",
  subTitle: emoji(
    "🎓 Software Engineering Student | 💻 Mobile & Web Developer | 🚀 Building with React Native, Spring Boot, and Node.js. Passionate about tech and crafting impactful digital experiences."
  ),
  resumeLink: "https://https://drive.google.com/file/d/12dWawEqZfWGP_0tTDQM0tWkNDsg89ILB/view",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/saidiilyess",
  linkedin: "https://www.linkedin.com/in/IlyessSaidi",
  gmail: "ilyess.saidi@esprit.tn",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK DEVELOPER EXPLORING MODERN TECH",
  skills: [
    emoji("⚡ Create scalable and performant web/mobile applications"),
    emoji("⚡ Build REST APIs with Node.js and Spring Boot"),
    emoji("⚡ Use Firebase, Google Maps, OpenWeather, and third-party APIs")
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
    { skillName: "NodeJS", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "ESPRIT - École Supérieure Privée d'Ingénierie et de Technologies",
      logo: require("./assets/images/espritLogo.png"),
      subHeader: "Engineering Degree in Software Engineering",
      duration: "2021 - 2025",
      desc: "Specializing in Data Science and Software Architecture",
      descBullets: [
        "Worked on full-stack projects in web & mobile",
        "Lead developer in interdisciplinary student projects"
      ]
    },
    {
      schoolName: "Pioneer School of Sidi Bouzid",
      logo: require("./assets/images/pioneerSchool.png"),
      subHeader: "Baccalaureate in Mathematics",
      duration: "2017 - 2021",
      desc: "Top 10% graduate, strong foundation in logic and programming"
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "80%" },
    { Stack: "Mobile Development", progressPercentage: "85%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Mobile Application Developer",
      company: "Kromberg & Schubert",
      companylogo: require("./assets/images/krombergLogo.png"),
      date: "Summer 2023",
      desc: "Developed a mobile app for internal use using React Native & Node.js, enhancing employee engagement and feedback systems."
    },
    {
      role: "Telecommunications Intern",
      company: "Tunisie Telecom",
      companylogo: require("./assets/images/tunisieTelecom.png"),
      date: "Summer 2022",
      desc: "Worked with network teams, learned about telecom infrastructure, system configurations and basic security."
    },
    {
      role: "Web Developer",
      company: "ETAP (Academic Project)",
      companylogo: require("./assets/images/etapLogo.png"),
      date: "Summer 2025",
      desc: "Built a Symfony-based web platform to manage donations and NGO partnerships."
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME OF MY KEY PROJECTS",
  projects: [
    {
      image: require("./assets/images/feedbackai.png"),
      projectName: "Feedback AI App",
      projectDesc: "Mobile app for collecting and analyzing anonymous employee feedback.",
      footerLink: [{ name: "GitHub", url: "https://github.com/saidiilyess/feedback-ai-app" }]
    },
    {
      image: require("./assets/images/construction.png"),
      projectName: "Construction Manager",
      projectDesc: "Spring Boot + Angular app for managing construction projects with mapping, weather & APIs integration.",
      footerLink: [{ name: "GitHub", url: "https://github.com/saidiilyess/construction-manager" }]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Things I’ve accomplished academically and professionally",
  achievementsCards: [
    {
      title: "Tunivisions Esprit President",
      subtitle: "Led cultural and tech initiatives for hundreds of students.",
      image: require("./assets/images/tunivisionsLogo.png"),
      footerLink: []
    },
    {
      title: "Big Data Workshop (DS | SAE)",
      subtitle: "Analyzed electoral datasets using Hive, MapReduce, Sqoop.",
      image: require("./assets/images/bigdataLogo.png"),
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "Soon I’ll be sharing tutorials, insights & dev stories here.",
  displayMediumBlogs: "false",
  blogs: [],
  display: true
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Always ready to speak and inspire others 💬"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming soon!",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let’s build something together!",
  number: "+216-58686486",
  email_address: "ilyesssaidi111@esprit.tn"
};

const twitterDetails = {
  userName: "", 
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
