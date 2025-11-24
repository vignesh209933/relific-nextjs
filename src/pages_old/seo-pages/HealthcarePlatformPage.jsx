import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";
import HealthcarePlatform from "../../components/Products/HealthcarePlatform";

const HealthcarePlatformPage = () => {
  const seoData = {
    title: "Healthcare Platform | Digital Health Management System - Relific",
    description:
      "Relific's Healthcare Platform: Comprehensive digital health management system for patient tracking, health program monitoring, and healthcare impact measurement.",
    url: "https://www.relific.io/health_platform",
    schemaType: "ProductPage",
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <HealthcarePlatform />
    </>
  );
};

export default HealthcarePlatformPage;
