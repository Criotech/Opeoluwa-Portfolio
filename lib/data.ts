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
    title: "Full Stack Developer",
    company: "DataServe AI. Inc. (Remote)",
    location: "United States",
    description:
      "Design, develop and maintain a highly scalable, high-performing, and highly available production system. Write readable, efficient, and maintainable code including serverless functions.Create and maintain database schemas, and create effective Mongo database queries. Work together to find solutions to business issues with product managers and technologists. Ensures that all documentation and knowledge bases are kept up to date in order to foster good communication inside and outside of our organization. Build scalable products using Nodejs and Typescript stack and deploy them on the AWS ecosystem which includes services – ElasticBeanStalk, CloudWatch, Docker and MongoDB.",

    icon: React.createElement(LuGraduationCap),
    date: "2023",
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
    title: "Full Stack Developer",
    company: "Johnson n Johnson Pharmarcy",
    location: "Signapore . Remote",
    description:
      "I had the opportunity to work remotely and collaborate closely with different teams, UX teams, DevOps and security teams, and the Business team. My role involved building web applications and ensuring seamless integration between the frontend and backend systems. Here are some key accomplishments from my experience: • Built responsive and scalable web applications using React, Next.js, and Typescript (leveraging Antd framework). These applications delivered enhanced user experiences while maintaining high performance and scalability. • Ensured code quality and reliability by writing comprehensive unit tests using Jest and react-testing-library. These tests helped identify and fix issues early in the development cycle, resulting in robust and bug-free applications. • Developed, maintained, and utilized backend services in Express applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
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
