"use client";

import React from "react";
import { motion } from "framer-motion";

// Import existing components
import OrganisationsWeServe from "../../src/components/Who we serve/Orgsweserve";
import ClientsCarousel from "../../src/components/Home/Clients";
import ImpactStories from "../../src/components/Who we serve/ImpactStories";

const WhoWeServePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <OrganisationsWeServe />
      <ClientsCarousel />
      <ImpactStories />
    </motion.div>
  );
};

export default WhoWeServePage;
