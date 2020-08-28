import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getModifiedClass as _getModifiedClass } from '../../utils/className';

const BASE_NAME = 'env-flex';
const getModifiedClass = _getModifiedClass.bind(null, BASE_NAME);

const Flex = ({
   tagName = 'div',
   direction,
   justifyContent,
   alignItems,
   wrap,
   children,
}) => {
   const TagName = tagName;

   return (
      <TagName
         className={classNames(BASE_NAME, {
            [getModifiedClass(direction)]: !!direction,
            [`env-justify-content--${justifyContent}`]: !!justifyContent,
            [`env-align-items--${alignItems}`]: !!alignItems,
            [`env-flex-wrap--${wrap}`]: !!wrap,
         })}
      >
         {children}
      </TagName>
   );
};

Flex.propTypes = {
   tagName: PropTypes.string,
   direction: PropTypes.oneOf('row-reverse column column-reverse'.split(' ')),
   justifyContent: PropTypes.oneOf('end center between around'.split(' ')),
   alignItems: PropTypes.oneOf('stretch start end center baseline'.split(' ')),
   wrap: PropTypes.oneOf('nowrap wrap wrap-reverse'.split(' ')),
   children: PropTypes.node,
};

export default Flex;
