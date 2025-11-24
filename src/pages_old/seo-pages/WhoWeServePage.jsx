import React from "react";
import { motion } from "framer-motion";
import HelmetContent from "../../components/SEO/HelmetContent";

// Import existing components
import OrganisationsWeServe from "../../components/Who we serve/Orgsweserve";
import ClientsCarousel from "../../components/Home/Clients";
import ImpactStories from "../../components/Who we serve/ImpactStories";

const WhoWeServePage = () => {
  const seoData = {
    title: "Who We Serve | NGOs, CSRs & Impact Organizations - Relific",
    description:
      "Discover how Relific serves NGOs, CSR teams, consultants, and impact organizations with AI-powered solutions for grant management, impact measurement, and digital transformation.",
    url: "https://www.relific.io/whoweserve",
    schemaType: "WebPage",
    additionalSchema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Impact Intelligence Services",
        provider: {
          "@type": "Organization",
          name: "Relific",
        },
        serviceType: "Software as a Service",
        description:
          "AI-powered impact intelligence platform services for social organizations",
      },
    ],
  };

  return (
    <>
      <HelmetContent {...seoData} />
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
    </>
  );
};

export default WhoWeServePage;
