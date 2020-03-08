/* globals require: false, exports: false */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
   const { createPage } = actions;

   const docsTemplate = path.resolve(`g_docs/templates/docs.js`);

   const result = await graphql(`
      {
         allMarkdownRemark(limit: 1000) {
            edges {
               node {
                  frontmatter {
                     title
                     path
                  }
               }
            }
         }
      }
   `);

   // Handle errors
   if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
   }

   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
         path: node.frontmatter.path,
         component: docsTemplate,
         context: {
            title: node.frontmatter.title
         } // additional data can be passed via context
      });
   });
};
