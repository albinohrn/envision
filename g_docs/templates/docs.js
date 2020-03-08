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
         <Header />
         <div className="blog-post-container">
            <div className="blog-post">
               <h1>{frontmatter.title}</h1>
               <div
                  ref={content}
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
               />
            </div>
         </div>
         <Footer />
      </>
   );
}

export const pageQuery = graphql`
   query($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
         html
         frontmatter {
            title
         }
      }
   }
`;
