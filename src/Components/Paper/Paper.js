import React from 'react';
import PropTypes from 'prop-types';
import MaterialPaper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Paper = ({
  children,
  title,
  elevation,
  style,
}) => (
  <MaterialPaper
    elevation={elevation}
    style={style}
  >
    <Typography variant="h5" component="h3">
      {title}
    </Typography>
    <Typography component="p">
      {children}
    </Typography>
  </MaterialPaper>
);

Paper.defaultProps = {
  style: {},
};

Paper.propTypes = {
  title: PropTypes.string.isRequired,
  elevation: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
};

export default Paper;
