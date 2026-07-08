export default function Schema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://constructechestimation.com/#organization",
    "name": "Constructech Estimation",
    "url": "https://constructechestimation.com/",
    "logo": "https://constructechestimation.com/logo.png",
    "description": "Constructech Estimation provides professional Construction Estimating Services in the United States and Canada, delivering accurate cost estimating, material takeoffs, quantity takeoffs, and bid preparation solutions for contractors and builders.",
    "telephone": "+1-888-859-0222",
    "email": "info@constructechestimation.com",
    "areaServed": {
      "@type": "Country",
      "name": "United States and Canada"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+1-888-859-0222",
      "areaServed": "US",
      "availableLanguage": "English"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://constructechestimation.com/#website",
    "url": "https://constructechestimation.com/",
    "name": "Constructech Estimation – Construction Estimating Services in the US",
    "description": "Constructech Estimation provides professional Construction Estimating Services, experienced Construction Estimators, and accurate cost estimation solutions for contractors and builders across the United States and Canada.",
    "inLanguage": "en-US",
    "publisher": {
      "@id": "https://constructechestimation.com/#organization"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://constructechestimation.com/#primaryservice",
    "name": "Construction Estimating Services",
    "description": "Constructech Estimation provides professional Construction Estimating Services in the United States and Canada, offering accurate cost estimation, experienced construction estimators, material takeoffs, and bid support solutions for contractors and builders.",
    "serviceType": "Construction Cost Estimation",
    "provider": {
      "@id": "https://constructechestimation.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States and Canada"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Contractors, Builders, Developers"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
