import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";

// Import existing component
import CSRPage from "../../components/Solutions/CSR_solutions";

const CSRSolutionsPage = () => {
  const seoData = {
    title: "CSR Solutions | Corporate Social Responsibility Platform - Relific",
    description:
      "Transform your CSR program with Relific's AI-powered platform. Streamline CSR activities, measure social impact, ensure compliance, and generate comprehensive reports for stakeholders.",
    url: "https://www.relific.io/CSR",
    schemaType: "ProductPage",
    additionalSchema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "CSR Management Solutions",
        provider: {
          "@type": "Organization",
          name: "Relific",
        },
        serviceType: "Corporate Social Responsibility Platform",
        description:
          "Comprehensive CSR management and impact measurement solutions",
      },
    ],
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <CSRPage />
    </>
  );
};

export default CSRSolutionsPage;
