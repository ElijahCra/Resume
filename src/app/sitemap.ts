import { MetadataRoute } from 'next';

const baseURL = `https://elijahcrain.com`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseURL,
      lastModified: new Date().toISOString(),
    },
  ];
}
