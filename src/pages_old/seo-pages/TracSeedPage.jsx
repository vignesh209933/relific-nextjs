import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";

// Import existing component
import TracSeed from "../../components/Products/Tracseed";

const TracSeedPage = () => {
  const seoData = {
    title: "TracSeed | Supply Chain Management for Agriculture - Relific",
    description:
      "TracSeed by Relific: Advanced agricultural supply chain management platform for tracking seeds, crops, and agricultural products with blockchain technology and IoT integration.",
    url: "https://www.relific.io/tracseed",
    schemaType: "ProductPage",
    additionalSchema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "TracSeed",
        applicationCategory: "AgricultureApplication",
        operatingSystem: "Web Browser",
        description: "Agricultural supply chain management platform",
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
      <TracSeed />
    </>
  );
};

export default TracSeedPage;
