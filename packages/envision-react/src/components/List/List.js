import React from 'react';
import PropTypes from 'prop-types';
import { getModifiedClass as _getModifiedClass } from '../../utils/className';

const BASE_CLASS = 'env-list';
const getModifiedClass = _getModifiedClass.bind(null, BASE_CLASS);

const validDividers = () => true;

const List = ({
   children,
   dividers,
   horizontal,
   fixed,
   responsive,
   tagName = 'ul',
}) => {
   let className = BASE_CLASS;

   if (dividers) {
      if (validDividers(dividers, horizontal)) {
         console.warn(
            'Invalid divider',
            dividers,
            'valid dividers for this list are ...'
         );
      }

      className += _getModifiedClass(`${BASE_CLASS}-dividers`, dividers);
   }

   if (horizontal) {
      className += getModifiedClass('horizontal');
   }

   const TagName = tagName;
   return <TagName className={className}>{children}</TagName>;
};

List.propTypes = {
   children: PropTypes.node,
   dividers: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'around']),
   horizontal: PropTypes.bool,
   fixed: PropTypes.oneOf(
      Array(12)
         .fill()
         .map((a, i) => i + 1)
   ),
};

export default List;
