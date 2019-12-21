import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';

const style = () => ({
  root: {

  },
});

export const Button = ({
  id,
  onClick,
  children,
}) => (
  <Fab
    id={id}
    onClick={onClick}
  >
    {children}
  </Fab>
);

Button.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(style)(Button);
