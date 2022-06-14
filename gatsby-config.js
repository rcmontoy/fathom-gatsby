module.exports = {
  siteMetadata: {
    title: `fathom-gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'http://localhost:9000',
      }
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        siteId: 'PTKYQCLO',
      }
    }
  ],
}
