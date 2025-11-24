import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Import existing components
import AboutUs from "../../components/About Us/AboutUs";
import Numbers_2 from "../../components/About Us/Numbers_2";
import Value from "../../components/About Us/Values";
import OurTeam from "../../components/Home/Team";

export const metadata = {
  title: "About Relific | AI-Driven Impact Intelligence Saas Platform",
  description:
    "Learn about Relific's mission, vision, and team behind our AI-powered impact intelligence platform driving social innovation and sustainable change worldwide.",
  metadataBase: new URL("https://relific.io"),
  alternates: {
    canonical: "/aboutus",
  },
};

const AboutUsPage = () => {
  const jsonLdWebpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://www.relific.io/aboutus",
    name: "About Relific | Our Mission, Vision & Team",
    description:
      "Learn about Relific: our mission, vision, values, team, and how we use AI-driven impact intelligence to drive sustainable social change.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Relific",
      url: "https://www.relific.io",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.relific.io/logo.png",
      width: 600,
      height: 60,
    },
    mainEntity: {
      "@type": "AboutPage",
      name: "About Relific",
      url: "https://www.relific.io/aboutus",
      description:
        "Get to know Relific: our team, philosophy, mission in leveraging AI for social impact and innovation.",
    },
  };

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Relific",
    url: "https://www.relific.io",
    logo: "https://www.relific.io/logo.png",
    description:
      "Relific is an AI-powered Impact Intelligence platform focused on transforming the social and non-profit sectors with digital operations, grant management, sustainability tracking, and impact reporting.",
    sameAs: [
      "https://twitter.com/relific",
      "https://www.linkedin.com/company/relific",
      "https://www.facebook.com/relific",
      "https://www.crunchbase.com/organization/relific",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 63614 66735",
      contactType: "customer service",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.relific.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Helmet>
        <title>
          About Relific | AI-Driven Impact Intelligence Saas Platform
        </title>
        <meta
          name="description"
          content="Learn about Relific's mission, vision, and team behind our AI-powered impact intelligence platform driving social innovation and sustainable change worldwide."
        />
        <link rel="canonical" href="https://www.relific.io/aboutus" />
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdWebpage).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdOrganization).replace(/</g, "\\u003c"),
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AboutUs />
        <Numbers_2 />
        <Value />
        <OurTeam />
      </motion.div>
    </>
  );
};

export default AboutUsPage;
