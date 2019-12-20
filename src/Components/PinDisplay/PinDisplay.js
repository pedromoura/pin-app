import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const PinDisplay = ({
  pinValue,
}) => (
  <Grid item xs={12}>
    <TextField
      disabled
      id="pinValue"
      label="PIN"
      defaultValue=""
      variant="outlined"
      value={pinValue}
    />
  </Grid>
);

const mapStateToProps = (state) => ({
  pinValue: state.pin.pin,
});

PinDisplay.propTypes = {
  pinValue: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(PinDisplay);
