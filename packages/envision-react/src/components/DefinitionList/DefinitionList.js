import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DefinitionList = ({ children, horizontal }) => {
   return (
      <dl
         className={classNames('env-definition-list', {
            'env-definition-list--horizontal': horizontal,
         })}
      >
         {children}
      </dl>
   );
};

DefinitionList.propTypes = {
   children: PropTypes.node,
   horizontal: PropTypes.bool,
};

export default DefinitionList;
