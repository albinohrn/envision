import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const NoSsr = ({ children, fallback = null }) => {
   const [mounted, setMounted] = useState(false);
   useEffect(() => {
      setMounted(true);
   }, []);
   return <>{mounted ? children : fallback}</>;
};

NoSsr.propTypes = {
   children: PropTypes.node,
   fallback: PropTypes.node,
};
