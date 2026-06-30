import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.echinger-kebap-haus.de';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
