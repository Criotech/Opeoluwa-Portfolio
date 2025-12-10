"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Senior Software Engineer with 6+ years of experience building and
        scaling full-stack products across fintech, AI, pharmaceutical, content,
        and sports industries. Specialized in React.js, React Native,
        TypeScript, Redux, and React Query for building performant, user-centric
        applications, with strong expertise in Tailwind CSS and shadcn/ui for
        modern UI systems. Backend expertise includes Node.js, RESTful API
        design, cloud-native architectures, and asynchronous processing. Highly
        proficient in AWS, MongoDB, PostgreSQL, Redis, and CI/CD pipelines using
        GitHub Actions. Consistently delivers business-critical systems for LLM
        applications, personalization engines, and high-throughput financial
        platforms while mentoring engineers and leading execution under tight
        timelines.
      </p>
    </motion.section>
  );
}
