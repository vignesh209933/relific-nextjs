import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";
import ConsultantsPage from "../../components/Solutions/Consultants";

const ConsultantsSolutionsPage = () => {
  const seoData = {
    title: "Consultant Solutions | Impact Intelligence for Advisors - Relific",
    description:
      "Relific's Consultant Solutions: Comprehensive platform for impact consultants featuring client management, project tracking, data analytics, and impact measurement tools.",
    url: "https://www.relific.io/Consultants",
    schemaType: "ProductPage",
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <ConsultantsPage />
    </>
  );
};

export default ConsultantsSolutionsPage;
