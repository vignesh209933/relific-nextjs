import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";
import FarmerPlatform from "../../components/Products/FarmerPlatform";

const FarmerPlatformPage = () => {
  const seoData = {
    title: "Farmer Platform | Digital Agriculture Management System - Relific",
    description:
      "Relific's Farmer Platform: Comprehensive digital agriculture management system for crop monitoring, yield optimization, market access, and agricultural extension services.",
    url: "https://www.relific.io/farmer_platform",
    schemaType: "ProductPage",
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <FarmerPlatform />
    </>
  );
};

export default FarmerPlatformPage;
