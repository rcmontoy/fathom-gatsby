const siteUrl = `https://www.yourdomain.tld`;

module.exports = {
  siteMetadata: {
    title: `fathom-gatsby`,
    siteUrl,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl,
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
