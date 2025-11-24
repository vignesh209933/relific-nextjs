import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";
import GrantManagement from "../../components/Products/GrantManagement";

const GrantManagementPage = () => {
  const seoData = {
    title: "Grant Management | Impact Intelligence Platform - Relific",
    description:
      "Relific's Grant Management Platform: Streamline grant applications, track funding, measure impact, and generate reports with AI-powered grant management solutions.",
    url: "https://www.relific.io/impact",
    schemaType: "ProductPage",
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <GrantManagement />
    </>
  );
};

export default GrantManagementPage;
