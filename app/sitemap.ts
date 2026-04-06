import { MetadataRoute } from 'next';

const BASE_URL = 'https://askwesley.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const primaryRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/solutions', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/customers', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/security', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/request-demo', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/newsroom', priority: 0.6, changeFrequency: 'weekly' as const },
  ];

  const legalRoutes = [
    { path: '/legal/privacy-policy', priority: 0.4, changeFrequency: 'yearly' as const },
  ];

  const productRoutes = [
    { path: '/product', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  const allRoutes = [...primaryRoutes, ...legalRoutes, ...productRoutes];

  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

