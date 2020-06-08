import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = ({ children }) => {
   return (
      <div className="env-button-group" role="group">
         {children}
      </div>
   );
};

ButtonGroup.propTypes = {
   children: PropTypes.node,
};

export default ButtonGroup;
