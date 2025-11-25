"use client";

import React from "react";
import { motion } from "framer-motion";

// Import existing components
import OrganisationsWeServe from "../../src/components/Who we serve/Orgsweserve";
import ClientsCarousel from "../../src/components/Home/Clients";
import BlogPosts from "../../src/components/Who we serve/BlogPosts";

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
      <BlogPosts />
    </motion.div>
  );
};

export default WhoWeServePage;
