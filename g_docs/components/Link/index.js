import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ to, children, ...rest }) => {
   if (/^http/.test(to)) {
      return <a href={to}>{children}</a>;
   }

   return (
      <GatsbyLink to={to} {...rest}>
         {children}
      </GatsbyLink>
   );
};

export default Link;
