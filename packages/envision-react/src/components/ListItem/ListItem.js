import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { spacingProps } from '../../utils/sharedPropTypes';
import { useMargin, usePadding } from '../../utils/spacing';

const ListItem = ({
   tagName = 'li',
   className: additionalClasses,
   padding,
   margin,
   children,
   dividerPosition,
}) => {
   const paddingClass = usePadding(padding);
   const marginClass = useMargin(margin);
   const TagName = tagName;
   return (
      <TagName
         className={classNames('env-list__item', {
            [`env-list-item-divider--${dividerPosition}`]: !!dividerPosition,
            [additionalClasses]: !!additionalClasses,
            [paddingClass]: !!padding,
            [marginClass]: !!margin,
         })}
      >
         {children}
      </TagName>
   );
};

ListItem.propTypes = {
   tagName: PropTypes.string,
   className: PropTypes.string,
   dividerPosition: PropTypes.oneOf(['top', 'bottom', 'around']),
   children: PropTypes.node,
   ...spacingProps,
};

export default ListItem;
