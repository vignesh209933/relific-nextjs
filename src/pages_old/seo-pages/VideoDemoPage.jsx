import React from "react";
import { motion } from "framer-motion";
import HelmetContent from "../../components/SEO/HelmetContent";

// Import existing component
import DemoVideos from "../../components/VideoDemo/DemoVideos";

const VideoDemoPage = () => {
  const seoData = {
    title: "Demo Videos | See Relific Products in Action",
    description:
      "Watch demo videos of Drive-R, SurveR, ProGran, and other Relific AI-powered solutions. See how our impact intelligence platform transforms social organizations.",
    url: "https://www.relific.io/demo-videos",
    schemaType: "WebPage",
    additionalSchema: [
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "Relific Product Demos",
        description:
          "Demo videos showcasing Relific's impact intelligence solutions",
        uploadDate: "2024-01-01",
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
        <DemoVideos />
      </motion.div>
    </>
  );
};

export default VideoDemoPage;
