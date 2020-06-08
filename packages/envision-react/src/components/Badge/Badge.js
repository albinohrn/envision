import React from 'react';
import PropTypes from 'prop-types';
import { getModifiedClass } from '../../utils/className';

const BASE_CLASS = 'env-badge';

const Badge = ({ children, type }) => {
   let className = BASE_CLASS;

   if (type) {
      className += getModifiedClass(BASE_CLASS, type);
   }

   return <span className={className}>{children}</span>;
};

Badge.propTypes = {
   children: PropTypes.node,
   type: PropTypes.oneOf('success', 'warning', 'danger', 'info'),
};

export default Badge;
