import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://voltpaybuild.vercel.app';

  // Core public routes
  const routes = [
    '',
    '/about',
    '/careers',
    '/careers/apply',
    '/contact',
    '/privacy',
    '/terms',
    '/auth/signin',
    '/auth/signup',
    '/simulator',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
