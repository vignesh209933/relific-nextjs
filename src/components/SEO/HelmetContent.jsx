import React from "react";
import { Helmet } from "react-helmet-async";

const HelmetContent = ({
  title,
  description,
  url,
  imageUrl = "https://www.relific.io/logo.png",
  schemaType = "WebPage",
  additionalSchema = [],
}) => {
  const fullTitle = title
    ? `${title}`
    : "Relific | AI-Driven Impact Intelligence Platform";

  // Base organization schema
  const organizationSchema = {
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

  // Base page schema
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    url: url,
    name: title,
    description: description,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Relific",
      url: "https://www.relific.io",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 600,
      height: 60,
    },
  };

  // Add mainEntity for specific page types
  if (schemaType === "AboutPage") {
    pageSchema.mainEntity = {
      "@type": "AboutPage",
      name: "About Relific",
      url: "https://www.relific.io/aboutus",
      description:
        "Get to know Relific: our team, philosophy, mission in leveraging AI for social impact and innovation.",
    };
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Relific" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Relific" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Page Schema */}
      <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>

      {/* Additional Schemas */}
      {additionalSchema.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default HelmetContent;
