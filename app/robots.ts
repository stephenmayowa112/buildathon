import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://voltpay.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/dashboard/',
        '/api/',
        '/payment/success',
        '/onboarding/*',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
