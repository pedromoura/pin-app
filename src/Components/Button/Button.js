import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';

export const Button = ({
  id,
  onClick,
  children,
  isDisabled,
}) => (
  <Fab
    id={id}
    onClick={onClick}
    disabled={isDisabled}
  >
    {children}
  </Fab>
);

Button.defaultProps = {
  isDisabled: false,
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

export default Button;
