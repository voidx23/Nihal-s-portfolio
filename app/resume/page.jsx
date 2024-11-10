"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiTypescript, SiBootstrap, SiMongodb } from "react-icons/si";

//abour data
const about = {
  title: "About Me",
  description: "Hey! I’m Nihal, a full-stack developer who loves turning ideas into seamless web experiences. I specialize in building modern, responsive applications with both front-end and back-end expertise. I’m passionate about crafting clean code, creating sleek UIs, and leveraging the cloud to scale projects efficiently. With a strong focus on performance and security, I’m always excited to take on new challenges and deliver impactful solutions. Let’s create something awesome together!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nihal Mohamed Bashir",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9746595850",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "nihalmb23@gmail.com",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "Nihal Mohamed Bashir",
    },
    {
      fieldName: "Github",
      fieldValue: "voidx23",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Malayalam",
    },
  ]
};

const experience = {
  icon: '/assets/resuem/badge.svg',
  title: "Experience",
  description: "Through a variety of challenging projects, I’ve developed a strong ability to create dynamic and efficient web applications, always aiming to deliver top-notch results.",
  items: [
    {
      company: "Learnbuds",
      position: "Junior Web Developer",
      duration: "2024 - present",
    },
    {
      company: "Brototype",
      position: "Fullstack Developer Intern",
      duration: "2023 - 2024",
    },

  ]
};

const education = {
  icon: '/assets/resuem/cap.svg',
  title: "My education",
  description: "",
  items: [
    {
      Institution: "Brototype",
      course: "Full Stack Web Development Bootcamp",
      duration: "2022 - 2023",
    },
    {
      company: "KMCT Arts and Science College",
      position: "Bachelor of Commerce",
      duration: "2018 - 2021",
    },

  ]
};

const skills = {
  title: "My skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <SiBootstrap />,
      name: "bootstrap css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiMongodb />,
      name: "mongoDb",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },

  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opasity: 0 }}
      animate={{
        opasity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}

      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex  flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div>
                            <span className="w-[6px] h-[6px] rounded-full">

                            </span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              experience
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              experience
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">
              experience
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume