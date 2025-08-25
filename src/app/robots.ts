import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/*.json$', '/private/', '/temp/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/images/', '/*.png', '/*.jpg', '/*.jpeg', '/*.gif', '/*.svg', '/*.webp'],
      },
      {
        userAgent: 'Googlebot-Mobile',
        allow: '/',
      },
      {
        userAgent: 'Yeti', // 네이버 검색봇
        allow: '/',
      },
      {
        userAgent: 'Daumoa', // 다음 검색봇
        allow: '/',
      },
    ],
    sitemap: 'https://www.heudy.shop/sitemap.xml',
  }
}
