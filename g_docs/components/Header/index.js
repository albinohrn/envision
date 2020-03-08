import React from 'react';
import Helmet from 'react-helmet';

const Header = () => {
   return (
      <>
         <Helmet>
            <script
               src="https://code.jquery.com/jquery-3.2.1.slim.js"
               integrity="sha256-tA8y0XqiwnpwmOIl3SGAcFl2RvxHjA8qp0+1uCGmRmg="
               crossOrigin="anonymous"
            ></script>

            <script src="/static/envision/envision.js"></script>
            <link rel="stylesheet" href="/static/envision/envision.css" />
         </Helmet>
      </>
   );
};

export default Header;
