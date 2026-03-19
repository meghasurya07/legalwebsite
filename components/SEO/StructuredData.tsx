import React from 'react';

const StructuredData = () => {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Wesley',
    'alternateName': 'Ask Wesley',
    'url': 'https://www.askwesley.com',
    'logo': 'https://www.askwesley.com/favicon.ico',
    'description': 'The new standard for legal work. AI-powered legal intelligence for modern teams.',
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Wesley',
    'url': 'https://www.askwesley.com',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
};

export default StructuredData;
