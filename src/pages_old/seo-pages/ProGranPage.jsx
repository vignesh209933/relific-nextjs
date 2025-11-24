import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";

// Import existing component
import ProGran from "../../components/Products/progran";

const ProGranPage = () => {
  const seoData = {
    title: "ProGran | Grant Management Platform for NGOs & Foundations",
    description:
      "ProGran by Relific: Comprehensive grant management platform with AI-powered proposal writing, fund tracking, compliance monitoring, and impact reporting for grant seekers and funders.",
    url: "https://www.relific.io/progran",
    schemaType: "ProductPage",
    additionalSchema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "ProGran",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web Browser",
        description: "Grant management platform for NGOs and foundations",
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
      <ProGran />
    </>
  );
};

export default ProGranPage;
