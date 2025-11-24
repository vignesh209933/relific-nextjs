import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";
import LeafLedger from "../../components/Products/LeafLedger";

const LeafLedgerPage = () => {
  const seoData = {
    title: "LeafLedger | Environmental Impact Tracking Platform - Relific",
    description:
      "LeafLedger by Relific: Advanced environmental impact tracking and sustainability management platform for carbon monitoring, biodiversity assessment, and green project management.",
    url: "https://www.relific.io/leaf",
    schemaType: "ProductPage",
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <LeafLedger />
    </>
  );
};

export default LeafLedgerPage;
