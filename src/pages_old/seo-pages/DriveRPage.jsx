import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";

// Import existing component
import DriveR from "../../components/Products/drive-r";

const DriveRPage = () => {
  const seoData = {
    title: "Drive-R | Digital Operations Platform for NGOs & CSRs - Relific",
    description:
      "Drive-R by Relific: Streamline your organization's digital operations with AI-powered workflow automation, project management, and impact tracking for NGOs and CSR teams.",
    url: "https://www.relific.io/drive_r",
    schemaType: "ProductPage",
    additionalSchema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Drive-R",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser",
        description:
          "Digital operations platform for NGOs and social organizations",
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
      <DriveR />
    </>
  );
};

export default DriveRPage;
