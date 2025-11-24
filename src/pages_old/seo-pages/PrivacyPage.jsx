import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";
import Privacy from "../../components/About Us/Privacy";

const PrivacyPage = () => {
  const seoData = {
    title: "Privacy Policy | Data Protection & Security - Relific",
    description:
      "Read Relific's Privacy Policy to understand how we collect, use, and protect your personal information while using our AI-powered impact intelligence platform.",
    url: "https://www.relific.io/privacy",
    schemaType: "WebPage",
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <Privacy />
    </>
  );
};

export default PrivacyPage;
