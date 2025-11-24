import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";

// Import existing component
import OurProducts from "../../components/Home/OurProducts";

const AllProductsPage = () => {
  const seoData = {
    title: "All Products | Drive-R, SurveR, ProGran - Relific AI Solutions",
    description:
      "Explore Relific's complete suite of AI-powered products: Drive-R for operations, SurveR for data collection, ProGran for grant management, and more impact intelligence solutions.",
    url: "https://www.relific.io/allproducts",
    schemaType: "ProductPage",
    additionalSchema: [
      {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Relific Impact Intelligence Suite",
        description:
          "Complete suite of AI-powered tools for impact organizations",
        brand: {
          "@type": "Brand",
          name: "Relific",
        },
        category: "Software",
      },
    ],
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <OurProducts />
    </>
  );
};

export default AllProductsPage;
