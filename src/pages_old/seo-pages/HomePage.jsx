import React from "react";
import { motion } from "framer-motion";
import HelmetContent from "../../components/SEO/HelmetContent";

// Import existing components
import Banner from "../../components/Home/Banner_2";
import StartQuicklyBlock from "../../components/Home/WhyUs";
import ClientsCarousel from "../../components/Home/Clients";
import Testimonials from "../../components/Home/Testimonials";
import Numbers from "../../components/Home/Numbers";
import OurProducts from "../../components/Home/OurProducts";
import RelificWay from "../../components/Home/RelificWay";
import HighlightTestimonial from "../../components/Home/Testimonial_highlight";
import FinalCTA from "../../components/Home/FinalCTA";

const HomePage = () => {
  const seoData = {
    title: "Relific | AI-Driven Impact Intelligence Platform",
    description:
      "Transform your social impact with Relific's AI-powered platform. Drive-R, SurveR, ProGran & more tools for NGOs, CSRs, and impact organizations to measure, manage, and report outcomes effectively.",
    url: "https://www.relific.io/",
    schemaType: "WebPage",
    additionalSchema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Relific Impact Intelligence Platform",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser",
        description:
          "AI-powered impact intelligence platform for social organizations",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ],
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Banner />
        <StartQuicklyBlock />
        <ClientsCarousel />
        <Testimonials />
        <Numbers />
        <OurProducts />
        <RelificWay />
        <HighlightTestimonial />
        <FinalCTA />
      </motion.div>
    </>
  );
};

export default HomePage;
