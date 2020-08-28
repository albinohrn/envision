import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getModifiedClass as _getModifiedClass } from '../../utils/className';

const BASE_CLASS = 'env-list';
const getModifiedClass = _getModifiedClass.bind(null, BASE_CLASS);
const VERTICAL_DIVIDERS = ['top', 'bottom', 'around'];
const HORIZONTAL_DIVIDERS = ['left', 'right'];

const validDividers = (dividerPosition, horizontal) =>
   horizontal
      ? HORIZONTAL_DIVIDERS.includes(dividerPosition)
      : VERTICAL_DIVIDERS.includes(dividerPosition);

const List = ({
   children,
   dividerPosition,
   horizontal,
   fixed,
   responsive,
   tagName = 'ul',
   className: additionalClasses,
}) => {
   if (dividerPosition) {
      if (validDividers(dividerPosition, horizontal)) {
         console.warn(
            'Invalid divider',
            dividerPosition,
            'valid dividers for this list are ...'
         );
      }
   }

   const TagName = tagName;
   return (
      <TagName
         className={classNames(BASE_CLASS, {
            [additionalClasses]: !!additionalClasses,
            [_getModifiedClass(
               `${BASE_CLASS}-dividers`,
               dividerPosition
            )]: !!dividerPosition,
            [getModifiedClass('horizontal')]: horizontal,
            [getModifiedClass('horizontal--fixed')]: horizontal && !!fixed,
            [getModifiedClass(`horizontal--fixed--${fixed}`)]:
               horizontal && !!fixed,
            [getModifiedClass('horizontal--responsive')]:
               horizontal && responsive,
         })}
      >
         {children}
      </TagName>
   );
};

List.propTypes = {
   children: PropTypes.node,
   dividerPosition: PropTypes.oneOf([
      ...VERTICAL_DIVIDERS,
      ...HORIZONTAL_DIVIDERS,
   ]),
   className: PropTypes.string,
   responsive: PropTypes.bool,
   tagName: PropTypes.string,
   horizontal: PropTypes.bool,
   fixed: PropTypes.oneOf(
      Array(12)
         .fill()
         .map((a, i) => i + 1)
   ),
};

export default List;
