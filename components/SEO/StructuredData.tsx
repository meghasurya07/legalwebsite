import React from 'react';

const StructuredData = () => {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Wesley',
    'alternateName': 'Ask Wesley',
    'url': 'https://www.askwesley.com',
    'logo': 'https://www.askwesley.com/favicon.ico', // Update when real logo URL is ready
    'sameAs': [
      'https://www.linkedin.com/company/ask-wesley', // Example
      'https://twitter.com/askwesleydotcom' // Example
    ],
    'description': 'The new standard for legal work. AI-powered legal intelligence for modern teams.',
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Wesley',
    'url': 'https://www.askwesley.com',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': 'https://www.askwesley.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  const softwareApplicationData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'Wesley',
    'operatingSystem': 'Web-based',
    'applicationCategory': 'LegalSoftware',
    'description': 'AI-powered legal intelligence platform for drafting, researching, and document analysis.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '1240'
    }
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Is my data used to train your AI models?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Never. We have a fundamental zero-training policy. Your documents and inputs are processed solely to provide you with results and are never aggregated to train our foundational models.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What encryption standards do you use?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We utilize enterprise-grade AES-256 encryption for data at rest and TLS 1.3 for data in transit, ensuring your information remains secure.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can we choose where our data is processed?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Absolutely. We offer strict data residency options. You can mandate that your data processing and storage occur entirely within the US, the EU, or Australia.'
        }
      }
    ]
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.askwesley.com/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Solutions',
        'item': 'https://www.askwesley.com/solutions'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Security',
        'item': 'https://www.askwesley.com/security'
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
};

export default StructuredData;
