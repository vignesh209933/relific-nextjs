import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";
import Environment from "../../components/Solutions/environment";

const EnvironmentSolutionsPage = () => {
  const seoData = {
    title:
      "Environment Solutions | Sustainability & Carbon Management - Relific",
    description:
      "Relific's Environmental Solutions: Comprehensive sustainability management platform for carbon tracking, environmental impact assessment, and green project monitoring.",
    url: "https://www.relific.io/envi_platform",
    schemaType: "ProductPage",
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <Environment />
    </>
  );
};

export default EnvironmentSolutionsPage;
