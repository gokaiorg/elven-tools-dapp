/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://gokai.org',
    generateRobotsTxt: true,
}