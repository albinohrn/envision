import React from 'react';
import PropTypes from 'prop-types';
import { getModifiedClass as _getModifiedClass } from '../../utils/className';

const BASE_CLASS = 'env-button';
const getModifiedClass = _getModifiedClass.bind(null, BASE_CLASS);

const Button = ({ children, size, type, block, onClick }) => {
   let className = BASE_CLASS;

   if (size) {
      className += getModifiedClass(size);
   }

   if (type) {
      className += getModifiedClass(type);
   }

   if (block) {
      className += getModifiedClass('block');
   }

   return (
      <button type="button" className={className} onClick={onClick}>
         {children}
      </button>
   );
};

Button.propTypes = {
   children: PropTypes.node,
   size: PropTypes.oneOf('small', 'large'),
   type: PropTypes.oneOf('primary', 'success', 'danger', 'invert', 'link'),
   block: PropTypes.bool,
   onClick: PropTypes.func,
};

export default Button;
