module.exports = {
  siteMetadata: {
    title: 'Josh Branchaud',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js'),
        },
      },
    },
    'gatsby-plugin-styled-components',
  ],
};
