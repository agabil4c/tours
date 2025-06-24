/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.riverwidesafaris.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/admin/*', '/checkout', '/api/*']
};
