import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";

// Import existing blog component
import Blogs from "../Blogs";

const BlogsPage = () => {
  const seoData = {
    title: "Blog | Impact Intelligence Insights & Resources - Relific",
    description:
      "Explore Relific's blog for the latest insights on impact measurement, AI in social sector, grant management best practices, and digital transformation for NGOs and CSR teams.",
    url: "https://www.relific.io/blogs",
    schemaType: "Blog",
    additionalSchema: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Relific Impact Intelligence Blog",
        description:
          "Latest insights and resources on impact intelligence and social innovation",
        url: "https://www.relific.io/blogs",
        publisher: {
          "@type": "Organization",
          name: "Relific",
        },
      },
    ],
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <Blogs />
    </>
  );
};

export default BlogsPage;
