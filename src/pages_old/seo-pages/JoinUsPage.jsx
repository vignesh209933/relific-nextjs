import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";
import JoinUs from "../../components/Contact Form/JoinUs";

const JoinUsPage = () => {
  const seoData = {
    title: "Join Our Team | Careers at Relific - AI Impact Intelligence",
    description:
      "Join Relific's team and help transform the social sector with AI-powered impact intelligence. Explore career opportunities in product development, data science, and social innovation.",
    url: "https://www.relific.io/apply",
    schemaType: "WebPage",
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <JoinUs />
    </>
  );
};

export default JoinUsPage;
