import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";
import EducationPlatform from "../../components/Products/EducationPlatform";

const EducationPlatformPage = () => {
  const seoData = {
    title: "Education Platform | Digital Learning Management System - Relific",
    description:
      "Relific's Education Platform: Comprehensive digital learning management system for educational institutions, skills development, and learning impact measurement.",
    url: "https://www.relific.io/education_platform",
    schemaType: "ProductPage",
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <EducationPlatform />
    </>
  );
};

export default EducationPlatformPage;
