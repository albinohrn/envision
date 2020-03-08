/* globals module:false, __dirname:false */
module.exports = {
   siteMetadata: {
      title: 'SiteVision Envision',
      description: 'UI library by SiteVision',
      author: '@sitevision'
   },
   plugins: [
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'images',
            path: `${__dirname}/g_docs/images`
         }
      },
      'gatsby-plugin-sass',
      'gatsby-plugin-react-helmet',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      {
         resolve: 'gatsby-transformer-remark',
         options: {
            plugins: [
               {
                  resolve: 'gatsby-remark-prismjs',
                  options: {
                     inlineCodeMarker: '~'
                  }
               }
            ]
         }
      },
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            path: `${__dirname}/g_docs/pages`,
            name: 'markdown-pages'
         }
      },
      {
         resolve: 'gatsby-plugin-manifest',
         options: {
            name: 'gatsby-starter-default',
            short_name: 'starter',
            start_url: '/',
            background_color: '#663399',
            theme_color: '#663399',
            display: 'minimal-ui',
            icon: 'g_docs/images/envision.png' // This path is relative to the root of the site.
         }
      }
   ]
};
