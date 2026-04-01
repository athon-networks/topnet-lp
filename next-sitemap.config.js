/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: "https://topoficial.com.br",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/api/*", "/server-sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },
  changefreq: "weekly",
  priority: 0.9,
  sitemapSize: 5000,
  transform: async (_, path) => ({
    loc: path,
    changefreq: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1.0 : 0.6,
    lastmod: new Date().toISOString(),
  }),
};
