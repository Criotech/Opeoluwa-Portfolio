import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Full Stack Developer",
    company: "DataServe AI. Inc. (Remote)",
    location: "United States",
    description:
      "Contributed to the development of a real-time AI-powered fraud detection system to evaluate users and transactions, significantly reducing fraudulent activity and financial risk.Built a robust custom rules system for monitoring transaction and making decisions based on the predefined rules. Designed and developed a multi-app integrated ERP dashboard with role- and permission-based access, enabling unified management across business applications. Architected and launched a multi-tier, multi-wallet payment system for sending and receiving payments in Nigeria, improving transaction efficiency and accessibility. Built a multi-provider payment routing system that dynamically leverages multiple providers to guarantee 100% transaction uptime.",

    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
  {
    title: "Senior Software Engineer - LLM Training (Google Gemini)",
    company: "Turing",
    location: "Remote",
    description:
      "Simulated engineering workflows for RLHF/SFT pipelines supporting LLM trainingContributed to advancements in dataset production, optimizing data variety and volume to meet the training needs of advanced models. Delivered prompt-level metadata to AI research teams for output tuning Promoted to a POD Lead where I orchestrated the training and onboarding of new engineers. Led and mentored software development teams across multiple projects from inception to delivery.",
    icon: React.createElement(LuGraduationCap),
    date: "2024-2025",
  },
  {
    title: "Full Stack Developer",
    company: "Topcoder",
    location: "Signapore . Remote",
    description:
      "Engineered responsive, scalable web applications using React, Next.js, TypeScript, and Ant Design, significantly improving user experience and system performance. Ensured quality and reliability through unit testing with Jest and React Testing Library, reducing production defects and improving application stability. Developed and maintained backend services with Express, streamlining workflows and optimizing system performance. Refined user stories and requirements in close collaboration with business teams, ensuring solutions aligned with end-user needs.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Mobile Developer (React Native)",
    company: "Spoxio",
    location: "United Kingdom",
    description:
      "I worked on a cross-platform mobile application using react-native. Building re-usable custom components and hooks, Conversion and estimations of business requirements into technical refinements for development. Collaborated with the backend development to define data objects needed for rendering UI on the client Deployment of application on the apple store and play store",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2023",
  },

  {
    title: "Interview Question Curator",
    company: "Toggl Hire (Contract)",
    location: "Estonia . Remote",
    description:
      "I work closely with a team of experts in creating high-quality and effective interview questions that accurately assess candidates' skills and qualifications. Collaborate with a team of experts to develop comprehensive interview question sets for different roles and positions. Conduct thorough research and stay updated on industry trends and best practices in interview assessments. Analyze job descriptions and requirements to understand the key competencies and qualifications needed for each position.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full Stack Developer",
    company: "Startupia LLC",
    location: "Lagos, Nigeria",
    description:
      "Design and maintain applications using React.js, Redux and Typescript. Design and maintain mobile applications using React Native. Develop backend services using Express and Node.js. Perform code reviews on applications",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Sigma",
    description:
      "An AI-Driven Financial Excellence for fraud detection, credit risk assessment, and financial analysis.",
    tags: [
      "React",
      "Node.js",
      "Next.js",
      "MongoDB",
      "Tailwind",
      "AWS",
      "Redux Toolkit",
    ],
    imageUrl: "/sigma.png",
    uri: "https://www.pastel.africa/sigma",
  },
  {
    title: "SwiftMoney",
    description:
      "A versatile digital wallet offering seamless money transfers, access to interest-free credit up to N10M, and the opportunity to build credit scores in one convenient app.",
    tags: ["React", "Node.js", "Next.js", "MongoDB", "Tailwind", "AWS"],
    imageUrl: "/swift-money.svg",
    uri: "https://www.pastel.africa/swiftmoney/individual",
  },
  {
    title: "Spoxio",
    description:
      "A social media platform for athletes that connects sport talents with scouts and managers in a social and secure way.",
    tags: ["React Native", "Node.js", "MongoDB"],
    imageUrl: "/spoxio.svg",
    uri: "https://spoxio.com/",
  },
  {
    title: "SABI - BOOKKEEPING & RECEIPTS",
    description:
      "Streamlined digital bookkeeping for small businesses, offering easy transaction monitoring, customer management, and cost-effective insights through a smartphone interface.",
    tags: ["React", "Node.js", "Next.js", "MongoDB", "Tailwind", "AWS"],
    imageUrl: "/sabi.svg",
    uri: "https://apps.apple.com/ng/app/swift-receipt/id6446998340",
  },
] as const;

export const skillsData = [
  "Typescript",
  "React.Js",
  "Node.Js",
  "React Native",
  "MongoDB",
  "AWS",
  "Express.Js",
  "Tailwind CSS",
  "Framer Motion",
  "Jest",
  "React Testing Library",
  "Git",
] as const;
