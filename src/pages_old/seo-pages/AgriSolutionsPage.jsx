import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";
import AgriSolutions from "../../components/Solutions/agri_solutions";

const AgriSolutionsPage = () => {
  const seoData = {
    title:
      "Agriculture Solutions | Digital Farming & Agri-Tech Platform - Relific",
    description:
      "Relific's Agriculture Solutions: Comprehensive agri-tech platform for digital farming, crop management, supply chain tracking, and agricultural impact measurement.",
    url: "https://www.relific.io/agrisolutions",
    schemaType: "ProductPage",
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <AgriSolutions />
    </>
  );
};

export default AgriSolutionsPage;
