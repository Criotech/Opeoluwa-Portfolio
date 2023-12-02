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
        I am experienced in web and mobile technologies with over 5 years building
        standalone applications to enterprise scale applications. I am
        Proficient in NodeJS, React and also providing technical/non-technical
        solutions.
      </p>

      <p>
        I am very Passionate about scalable product development, writing clean,
        well-tested code and documented code and also following best practices
        during development.
      </p>
    </motion.section>
  );
}
