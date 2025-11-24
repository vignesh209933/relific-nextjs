import React from "react";
import HelmetContent from "../../components/SEO/HelmetContent";

// Import existing component
import Contact from "../../components/Contact Form/contact";

const ContactPage = () => {
  const seoData = {
    title: "Contact Relific | Get in Touch for AI Impact Solutions",
    description:
      "Contact Relific to learn how our AI-powered impact intelligence platform can transform your organization. Schedule a demo or get support for Drive-R, SurveR, and ProGran solutions.",
    url: "https://www.relific.io/contact",
    schemaType: "ContactPage",
    additionalSchema: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Relific",
        url: "https://www.relific.io/contact",
        description:
          "Get in touch with Relific for impact intelligence solutions",
      },
    ],
  };

  return (
    <>
      <HelmetContent {...seoData} />
      <Contact />
    </>
  );
};

export default ContactPage;
