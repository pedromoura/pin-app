import React from 'react';
import PropTypes from 'prop-types';
import MaterialPaper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Paper = ({
  children,
  title,
  elevation,
  style,
  bodyComponent,
}) => (
  <MaterialPaper
    elevation={elevation}
    style={style}
  >
    <Typography variant="h5" component="h3">
      {title}
    </Typography>
    <Typography component={bodyComponent}>
      {children}
    </Typography>
  </MaterialPaper>
);

Paper.defaultProps = {
  style: {},
  title: '',
  elevation: 2,
  bodyComponent: 'div',
};

Paper.propTypes = {
  title: PropTypes.string,
  elevation: PropTypes.number,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  bodyComponent: PropTypes.string,
};

export default Paper;
