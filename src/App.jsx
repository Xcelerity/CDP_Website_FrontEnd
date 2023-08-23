import styles from "./style";
import {
  Event,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import SDE from "./assets/bill.png";
import ChiefGuests from "./components/ChiefGuests";
import Slider from "./components/Slider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import TeamSection from "./components/TeamSection";
import EventCard from "./components/EventCard";
import TabPanel from "./components/TabPanel";

const eventsArray = [
  {
    heading: `Strengthen your hold on Software Development`,
    description: `Acquire industry-relevant skills through participation in competitions, hackathons, and workshops conducted by premier recruiters.`,
    img: "sde.png",
    tagLine: "Check out the SDE events",
  },
  {
    heading: `Dive into the World of Intelligent Technology 
    `,
    description: `Gain meaningful exposure to the advancements in Artificial Intelligence and Machine Learning through events curated to make you job-ready for this promising industry.`,
    img: "ai.png",
    tagLine: "Check out the AI/ML events",
  },
  {
    heading: `Crash on Stock charts
    `,
    description: `Refine your quantitative abilities through workshops conducted by renowned players.`,
    img: "quants.png",
    tagLine: "Check out the Quants events",
  },
  {
    heading: "Unlock Your Potential in the Product Events",
    description: `Understand what goes into becoming a mini-CEO through curated activities on Product Management.
    `,
    tagLine: "Check out the Product events",
    img: "prduct.png",
  },
  {
    heading: `Unleash your Analytical Ambitions `,
    description: `Experience the art of discovering insights from enormous data by engaging with industry professionals on a wide range of relevant topics.`,
    tagLine: "Check out the Analytics events",
    img: "analytics.png",
  },
  {
    heading: `Join the Elite League of
    Future Consultants
    `,
    description: `Experience diverse consulting domains through our guest lecture series, where industry experts will share their knowledge and provide you with valuable exposure.`,
    img: "consulting.png",
    tagLine: "Check out the Consulting events",
  },
];

const homeNavLinks = [
  {
    id: "#home",
    title: "Home",
  },
  {
    id: "#Companies",
    title: "Companies",
  },
  {
    id: "/events",
    title: "Events",
  },
  {
    id: "/team",
    title: "Team",
  },
];

const teamNavLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/events",
    title: "Events",
  },
];

const eventsNavLink = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/team",
    title: "Team",
  },
];

const team = [
  {
    heading: "Training and Placement Coordinators",
    members: [
      {
        name: "Prof. S. K. Shrivastava",
        title: "+91-5427165959",
        img: "sks.jpg",
      },
      {
        name: "Dr. Kishor P. Sarawadekar",
        title: "+91-9455908629",
        img: "k.jpg",
      },
      {
        name: "Dr. Surya D. Yadav",
        title: "+91-9838764487",
        img: "sy.png",
      },
    ],
  },
  {
    heading: "Core Committee",
    members: [
      {
        name: "Mr. Abhinit Singh",
        title: "+91-7002375009",
        img: "as.jpg",
      },
      {
        name: "Mr. Akshat Agrawal",
        title: "+91-7023517004",
        img: "aks.jpg",
      },
      {
        name: "Ms. Mekala Bhavya",
        title: "+91-9652314717",
        img: "mkb.jpg",
      },
    ],
  },
  {
    heading: "Marketing Team",
    members: [
      {
        name: "Mr. Parth Bansal",
        img: "pb.jpg",
      },
      {
        name: "Mr. Saksham Pandey",
        img: "sp.jpg",
      },
      {
        name: "Ms. Aradhna Abraham",
        img: "aa.jpeg",
      },
    ],
  },
  {
    heading: "Events Team",
    members: [
      {
        name: "Mr. Akarshit Magotra",
        img: "am.jpg",
      },
      {
        name: "Mr. Shubhrajyoti Dey",
        img: "sd.png",
      },
      {
        name: "Mr. Devanshu Agrawal",
        img: "dv.jpeg",
      },
      {
        name: "Ms. Mugdha Shelke",
        img: "ms.jpg",
      },
      {
        name: "Ms. Aditi Ojha",
        img: "ao.jpg",
      },
    ],
  },
  {
    heading: "Publicity & Creative Team",
    members: [
      {
        name: "Ms. Allada Joshita",
        img: "j.jpg",
      },
      {
        name: "Mr. Shreyansh Verma",
        img: "sv.jpg",
      },
    ],
  },
  {
    heading: "Finance & Logistics Team",
    members: [
      {
        name: "Mr. Soumya Ranjan Panda",
        img: "srp.jpg",
      },
      {
        name: "Mr. Nishant Chaudhari",
        img: "nc.jpeg",
      },
    ],
  },
];

const eventsData = [
  {
    label: "SDE",
    events: [
      {
        eventName: "Thoughtworks SDE Workshop on Rust",
        eventDescription:
          "Thoughtworks is conducting a Guided Workshop on the following topics RUST Programming Language and AV (Autonomous Vehicles) Technology. The top-performing students will be offered Pre Placement Interviews/Pre Internship Interviews.",
        venue: {
          time: "6 PM",
          place: "ABLT - 4",
          date: "24th March",
        },
        img: "q_1.png",
        company: "tw.jpg",
        register: "https://forms.gle/ZpUBd7WaRHYjgL51A",
      },
      {
        eventName: "Sprinklr Product Engineering Workshop",
        eventDescription:
          " Mr. Aaditya Thakkar, Senior Director will conduct a workshop on Product Engineering for the 2024 and 2025 graduating batch of IIT (BHU) Varanasi. ",
        venue: {
          time: "2 PM",
          place: "ABLT - 4",
          date: "25th March",
        },
        img: "q_1.png",
        company: "sprinklr.jpg",
        register: "https://forms.gle/T5A7E76g1rZwkVx26",
      },
      {
        eventName: "Rephrase.AI SDE Guided Project",
        eventDescription:
          "Rephrase.AI will conduct a Guided Project on Software for the 2024 and 2025 IIT (BHU) Varanasi graduating batch. ",
        venue: {
          time: "4 PM",
          place: "LT - 1",
          date: "25th March",
        },
        img: "q_1.png",
        company: "rph.png",
        register: "https://forms.gle/4ztQ6K2ZGo7BRzEi9",
      },
      {
        eventName: "Yugabyte SDE Workshop",
        eventDescription:
          "Yugabyte is conducting an SDE workshop on Distributed Databases for the IIT(BHU) students. The top-performing students will be offered Pre Placement Interviews/Pre Internship Interviews.",
        venue: {
          time: "11 AM",
          place: "LT - 3",
          date: "26th March",
        },
        img: "sde_1.png",
        company: "ygw.png",
        register: "https://forms.gle/TZE6rQAzDb2edv797",
      },
    ],
  },
  {
    label: "Quant",
    events: [
      {
        eventName: "NK Securities SDE/Quant Contest",
        eventDescription:
          " NK Securities will conduct an SDE/Quant Contest for the 2024 and 2025 graduating batch of IIT (BHU) Varanasi",
        venue: {
          time: "10 AM",
          place: "LT - 1",
          date: "25th March",
        },
        img: "q_1.png",
        company: "nksw.jpg",
        register: "https://forms.gle/vEechTP8JgUgxafFA",
      },
      {
        eventName: "WorldQuant Quant Research Workshop",
        eventDescription: `Hands on training session on how to build predictive financial models or alphas.
        Mini challenge - Based on concepts explained in the session`,
        venue: {
          time: "3 PM",
          place: "ABLT - 4",
          date: "26th March",
        },
        img: "q_1.png",
        company: "wqw.png",
        register: "https://forms.gle/iLXoanE6znDCX77W7",
      },
    ],
  },
  {
    label: "Product",
    events: [
      {
        eventName: "Sprinklr Product Analytics Workshop",
        eventDescription:
          "An Alumnus of IIT(BHU), Mr. Harshit Chaudhary, will conduct a workshop on Product Analytics for the 2024 and 2025 graduating batch of IIT (BHU) Varanasi.",
        venue: {
          time: "2 PM",
          place: "ABLT - 3",
          date: "25th March",
        },
        img: "q_1.png",
        company: "sprinklr.jpg",
        register: "https://forms.gle/imTs7kdtBK9Hti1v5",
      },
      {
        eventName: "Rephrase.AI Product Management Case Study",
        eventDescription:
          "Rephrase.AI will conduct a Case Study event on Product management for the 2024 and 2025 IIT (BHU) Varanasi graduating batch.",
        venue: {
          time: "4 PM",
          place: "LT - 1",
          date: "25th March",
        },
        img: "q_1.png",
        company: "rph.png",
        register: "https://forms.gle/BftfQ3m4oPxTPZit5",
      },
    ],
  },
  {
    label: "AI / ML",
    events: [
      {
        eventName: "Deutsche Bank AI Guest Lecture",
        eventDescription:
          "Deutsche Bank will Lecture on the Transformer Large Language Model (GPT) and Tips on writing a Good Resume for IIT (BHU) Varanasi students.",
        venue: {
          time: "10:30 AM",
          place: "ABLT - 1",
          date: "26th March",
        },
        img: "q_1.png",
        company: "dbw.jpg",
        register: "https://forms.gle/h2rbyCgW6G3ezDBj6",
      },
      {
        eventName: "Mastercard AI Workshop",
        eventDescription:
          "The AI Advantage: Mastering the use of Aritificial Intelligence in Finance & Decision Making",
        venue: {
          time: "1 PM",
          place: "ABLT-4",
          date: "26th March",
        },
        img: "q_1.png",
        company: "mst.png",
        register: "https://forms.gle/GyMbAdxmY8co7idm8",
      },
      {
        eventName: "Rephrase.AI Deep Learning Hackathon",
        eventDescription:
          "Rephrase.AI will conduct a Guided project on ML/DL for the 2024 and 2025 graduating IIT (BHU) Varanasi. ",
        venue: {
          time: "4 PM",
          place: "LT - 1",
          date: "25th March",
        },
        img: "q_1.png",
        company: "rph.png",
        register: "https://forms.gle/71YkWCcASBj6ewF1A",
      },
    ],
  },
  {
    label: "Consulting",
    events: [
      {
        eventName: "Redseer Interactive Session",
        eventDescription:
          " Mr.Kanishka Mohan is a partner at Redseer Strategy Consultants, who will be conducting an interactive talk at the event, which will bring a positive change in the mindset of all aspiring consultants and entrepreneurs.",
        venue: {
          time: "10 AM",
          place: "ABLT",
          date: "25th March",
        },
        img: "sde_1.png",
        company: "rd.png",
        register: "https://forms.gle/7U75oB19YFk8eQiS7",
      },
      {
        eventName: "Mckinsey Demistifying Consulting",
        eventDescription:
          "Mr.Abhilash Sridharan, an IIT(BHU) Alum, having done his MBA from Kellog School of Management and currently a partner at Mckinsey, will Interact with the students of IIT(BHU) and enlighten them with his experiences and expertise.",
        venue: {
          time: "8 PM",
          place: "ABLT",
          date: "25th March",
        },
        img: "q_1.png",
        company: "mk.png",
        register: "https://forms.gle/SybycpyxNR62sEbz6",
      },
    ],
  },
  {
    label: "Guest Lectures",
    events: [
      {
        eventName: "Sprinklr Networking Session & Alumni Interaction",
        eventDescription:
          "Ms. Pranjal Sharma and Mr. Harshit Chaudhary will be hosting and interactive session on networking ",
        venue: {
          time: "11 AM",
          place: "ABLT - 4",
          date: "25th March",
        },
        img: "q_1.png",
        company: "sprinklr.jpg",
        register: "https://forms.gle/fdrW9KGRo54AMvBA9",
      },

      {
        eventName: "SecurEyes Guest Lecture",
        eventDescription:
          "Secureyes will conduct a Guest Lecture on Cybersecurity as a career: Exciting times ahead for the 2024 and 2025 graduating batch of IIT (BHU) Varanasi.",
        venue: {
          time: "11 AM",
          place: "LT - 3",
          date: "26th March",
        },
        img: "sde_1.png",
        company: "secw.jpg",
        register: "https://forms.gle/yuJSYJsx6fZYvZK29",
      },
    ],
  },
];

export const LandingPage = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar navLinks={homeNavLinks} />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Clients />

          {/* <ChiefGuests /> */}
          <CTA />
          <Business />
          {eventsArray.map((event, index) => (
            <Event
              right={index % 2}
              heading={event.heading}
              description={event.description}
              tagLine={event.tagLine}
              imgSrc={event.img}
            />
          ))}
          {/* <Testimonials /> */}
          <Footer navLinks={homeNavLinks} />
        </div>
      </div>
    </div>
  );
};

export const Events = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar navLinks={eventsNavLink} />
        </div>
      </div>
      <section
        id="home"
        className={`min-h-[100vh] flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 flex justify-start items-start flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text ss:leading-[100px] leading-[75px]">
              <span className="text-gradient">Events</span>
            </h1>
          </div>
          {/* <h3 className="text-gray-400 text-xl">Will be updated Soon !</h3> */}
          <Box className="w-full">
            <Tabs
              value={value}
              onChange={handleChange}
              // variant="scrollable"
              variant="scrollable"
              centered
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#D97D54",
                },
              }}
              // scrollButtons
              scrollButtons="auto"
              aria-label="visible arrows tabs example"
              sx={{
                [`& .${tabsClasses.scrollButtons}`]: {
                  "&.Mui-disabled": { opacity: 0.3 },
                },
              }}
            >
              {eventsData.map((domain, domainIndex) => (
                <Tab
                  style={{
                    color: `${domainIndex == value ? "#D97D54" : "black"}`,
                  }}
                  label={domain.label}
                />
              ))}
            </Tabs>
            {/* <TabPanel value={value} index={0}>
              Item One
            </TabPanel> */}
            {eventsData.map((domain, domainIndex) => (
              <TabPanel value={value} index={domainIndex}>
                <div className="flex gap-5 pt-10 justify-evenly w-full flex-wrap">
                  {domain.events.map((event) => (
                    <EventCard
                      eventName={event.eventName}
                      eventDescription={event.eventDescription}
                      venue={event.venue}
                      img={event.img}
                      company={event.company}
                      register={event.register}
                    />
                  ))}
                </div>
              </TabPanel>
            ))}
          </Box>
        </div>
      </section>

      <div className={`bg-primary ${styles.paddingX} `}>
        <Footer />
      </div>
    </div>
  );
};

export const StudentRegistration = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar navLinks={eventsNavLink} />
        </div>
      </div>
      <section
        id="home"
        className={`min-h-[100vh] flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 flex justify-start items-start flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text ss:leading-[100px] leading-[75px]">
              <span className="text-gradient">Student Registration</span>
            </h1>
          </div>
          <h3 className="text-gray-400 text-xl">shall begin soon !</h3>
        </div>
      </section>
      <div className={`bg-primary ${styles.paddingX} `}>
        <Footer />
      </div>
    </div>
  );
};

export const Team = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar navLinks={teamNavLinks} />
        </div>
      </div>
      <section
        id="home"
        className={`min-h-[100vh]  ${styles.paddingY} xl:px-0 sm:px-16 px-6`}
      >
        {/* <div className={`flex-1 flex justify-start items-start flex-col `}>
          <div className="w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text ss:leading-[100px] leading-[75px]">
              <span className="text-gradient">Managerial Committee</span>
            </h1>
          </div>
        </div> */}
        <TeamSection team={team} />
      </section>
      <div className={`bg-primary ${styles.paddingX} `}>
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  return <></>;
};

export default App;
