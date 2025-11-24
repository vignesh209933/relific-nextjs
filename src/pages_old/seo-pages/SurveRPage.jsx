import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";

// Import existing component
import SurveR from "../../components/Products/surve-r";

const SurveRPage = () => {
  const seoData = {
    title: "SurveR | Smart Data Collection Platform for Impact Organizations",
    description:
      "SurveR by Relific: Advanced survey and data collection platform with AI-powered insights, offline capabilities, and real-time analytics for impact measurement and evaluation.",
    url: "https://www.relific.io/surve_r",
    schemaType: "ProductPage",
    additionalSchema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "SurveR",
        applicationCategory: "DataCollectionApplication",
        operatingSystem: "Web Browser",
        description: "Smart data collection and survey platform",
        provider: {
          "@type": "Organization",
          name: "Relific",
        },
      },
    ],
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <SurveR />
    </>
  );
};

export default SurveRPage;
