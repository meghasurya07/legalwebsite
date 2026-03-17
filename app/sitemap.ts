import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.askwesley.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/solutions',
    '/customers',
    '/security',
    '/blog',
    '/newsroom',
    '/request-demo',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
