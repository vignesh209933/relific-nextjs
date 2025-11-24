import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";
import NGOSolutionsPage from "../../components/Solutions/NGO_solutions";

const NGOSolutionsPageWithSEO = () => {
  const seoData = {
    title: "NGO Solutions | Digital Transformation for Non-Profits - Relific",
    description:
      "Relific's NGO Solutions: Digital transformation platform for non-profit organizations featuring donor management, program tracking, impact measurement, and fundraising tools.",
    url: "https://www.relific.io/NGO_solutions",
    schemaType: "ProductPage",
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <NGOSolutionsPage />
    </>
  );
};

export default NGOSolutionsPageWithSEO;
