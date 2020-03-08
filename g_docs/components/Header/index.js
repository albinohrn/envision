import React from 'react';
import Helmet from 'react-helmet';
import SiteVisionLogo from '../../images/sitevision_logo.png';
import EnvisionLogo from '../../images/envision_logo.png';
import Link from '../Link';

const createMenuItem = (label, to) => ({ label, to });
const menuItems = [
   createMenuItem('Start', '/'),
   createMenuItem('Docs', '/getting-started/introduction/'),
   createMenuItem('GitHub', 'https://github.com/sitevision/envision')
];

const Header = ({ title }) => {
   return (
      <>
         <Helmet>
            <meta charset="utf-8" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>{`${title} \u00B7 Envision by SiteVision`}</title>
            <script
               src="https://code.jquery.com/jquery-3.2.1.slim.js"
               integrity="sha256-tA8y0XqiwnpwmOIl3SGAcFl2RvxHjA8qp0+1uCGmRmg="
               crossOrigin="anonymous"
            ></script>

            <script src="/static/envision/envision.js"></script>
            <link rel="stylesheet" href="/static/envision/envision.css" />
            <link
               rel="icon"
               type="image/png"
               href={EnvisionLogo}
               sizes="32x32"
            />
         </Helmet>
         <div className="env-w-100 sv-header">
            <header className="header env-p-top--small env-p-bottom--small">
               <div className="logo env-m-left--medium">
                  <a href="https://www.sitevision.se">
                     <img src={SiteVisionLogo} alt="SiteVision" />
                  </a>
               </div>
               <nav className="header-nav env-m-right--medium">
                  <ul
                     className="env-nav env-nav--menubar env-nav--border"
                     role="menubar"
                  >
                     {menuItems.map(({ label, to }) => (
                        <li
                           className="env-nav__item"
                           key={label}
                           role="menuitem"
                        >
                           <Link to={to} activeClassName="active">
                              {label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </nav>
            </header>
         </div>
      </>
   );
};

export default Header;
