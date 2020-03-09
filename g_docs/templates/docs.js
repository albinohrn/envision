import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Template({
   data // this prop will be injected by the GraphQL query below.
}) {
   const { markdownRemark } = data; // data.markdownRemark holds your post data
   const { frontmatter, html } = markdownRemark;
   const content = useRef(null);

   useEffect(() => {
      content.current
         .querySelectorAll('.gatsby-highlight[data-language=html]')
         .forEach(element => {
            const example = document.createElement('div');
            example.classList.add('code-example');
            example.innerHTML = element.textContent;
            element.parentNode.insertBefore(example, element);
         });
   }, [content]);

   return (
      <>
         <Header title={frontmatter.title} />
         <div className="main-container">
            <main>
               <h1>{frontmatter.title}</h1>
               <div
                  ref={content}
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
               />
            </main>
         </div>
         <Footer />
      </>
   );
}

export const pageQuery = graphql`
   query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
         html
         frontmatter {
            title
         }
      }
   }
`;
