module.exports = {
  siteUrl: 'https://your-domain.com', // Replace with your actual domain
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://your-domain.com/sitemap.xml',
    ],
  },
}
