/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://vimtor.io",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 1000,
};

module.exports = config;
