"use client";

import React from "react";
import { motion } from "framer-motion";

// Import existing components
import AboutUs from "../../src/components/About Us/AboutUs";
import Numbers_2 from "../../src/components/About Us/Numbers_2";
import Value from "../../src/components/About Us/Values";
import OurTeam from "../../src/components/Home/Team";

const AboutUsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutUs />
      <Numbers_2 />
      <Value />
      <OurTeam />
    </motion.div>
  );
};

export default AboutUsPage;
