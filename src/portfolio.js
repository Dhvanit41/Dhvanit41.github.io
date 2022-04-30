/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dhvanit",
  title: "Hi all, I'm Dhvanit",
  subTitle: emoji(
    "A passionate Back-end Engineer 🚀 having an experience of building Web and Mobile applications with JavaScript / NodeJs / NestJs / Web3 / Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1UUzf1tZH7okIXHC6AtIZdcsL7CcTSov1/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Dhvanit41",
  linkedin: "https://in.linkedin.com/in/dhvanit-popat-a076a216b",
  gmail: "dhvanitpopat555@gmail.com",
  leetCode: "https://leetcode.com/Dhvanit/",
  upwork: "https://www.upwork.com/freelancers/~01e323e883fd3c560a/",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "CRAZY BACKEND ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ A software engineer having experience in building products for masses "
    ),
    emoji(
      `⚡ Believes in the "Hands-On Experience" approach`
    ),
    emoji(
      `⚡ Interest in creating products and working with trending techs like creating Decentralized apps, ML and Big Data .`
    ),
    emoji(
      `⚡ Competitive programmer with a demonstrated history of solving problems in DSA .`
    ),
    emoji(
      `⚡ Keen Sportsman and passionate guitarist .`
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "NodeJs / NestJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "BitCoin",
      fontAwesomeClassname: "fab fa-bitcoin"
    },
    {
      skillName: "Ethereum",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Sql / Mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "V.V.P. Engineering College",
      logo: require("./assets/images/education.caed892b.svg"),
      subHeader: "Bachelor Of Engineering in Information Technology",
      duration: "September 2015 - April 2019"
    },
    {
      schoolName: "Delta Science School",
      logo: require("./assets/images/education.caed892b.svg"),
      duration: "September 2013 - April 2015"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "82%"
    },
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "90%"
    },
  ],
  displayCodersrank: false
};


const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer",
      company: "GEVME ( Singapore )",
      companylogo: require("./assets/images/Gevmelogo.png"),
      date: "Sept 2021 – present",
      desc: "GEVME is a flexible platform used by event professionals to build and manage custom virtual experiences",
      descBullets: [
        "Working as a Senior devloper to create Virtual platform.",
      ]
    },
    {
      role: "Software Product and Platform Engineering Analyst",
      company: "Accenture",
      companylogo: require("./assets/images/AccentuerLogo.png"),
      date: "Oct 2019 – Sep 2021",
      desc: "Accenture plc is an Irish-based multinational professional services company that specialises in IT services and consulting.",
      descBullets: [
        "Worked on AI team that delivers the last-mile of analytics i.e. insights that drive action"
      ]
    },
    {
      role: "Backend Developer",
      company: "Kevit Technologies",
      companylogo: require("./assets/images/kevitlogo.png"),
      date: "Sept 2018 – Oct 2019",
      desc: "Kevit Technologies is a professional IT services & solution provider company specialized in custom chatbot development, big data and analytics, and web data collection.",
      descBullets: [

      ]
    }
  ]
};

/* Your Opn Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false  // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "Problem Solving (Intermediate)",
      image: require("./assets/images/HackerRank_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/d55ff65b59d9"
        }
      ]
    },
    {
      title: "Node JS: Advanced Concepts",
      image: require("./assets/images/Udemy-Logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-87db94bb-36c0-4013-aa12-03a9214f5ed3/"
        }
      ]
    },
    {
      title: "Algoexpert- Data structure and Algorithms",
      image: require("./assets/images/ae-social-logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-d0e7eaf38d"
        }
      ]
    },

    {
      title: "JavaScript (Basic)",
      image: require("./assets/images/HackerRank_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/131809f3e657"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@Dhvanit41/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/Dhvanit41-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "dhvanitpopat555@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
