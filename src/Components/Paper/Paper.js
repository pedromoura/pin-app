import React from 'react';
import PropTypes from 'prop-types';
import MaterialPaper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Paper = ({
  children,
}) => (
  <MaterialPaper>
    <Typography variant="h5" component="h3">
      {children}
    </Typography>
  </MaterialPaper>
);

Paper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Paper;
