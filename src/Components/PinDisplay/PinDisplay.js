import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '../Paper/Paper';

export const maskPin = (pinValue) => (
  [...pinValue].map((value, i) => (i !== pinValue.length - 1 ? '*' : value)).join('')
);

const PinDisplay = ({
  pinValue,
  isPinValid,
  isPinChecked,
}) => (
  <Grid item xs={12}>
    <Paper
      title="Pin Code"
      style={{ margin: 15 }}
    >
      {
        isPinChecked && (
          <span>{isPinValid ? 'OK' : 'ERROR'}</span>
        )
      }
      {
        !isPinChecked && (
        <span style={{ padding: 10 }}>{maskPin(pinValue)}</span>
        )
      }
    </Paper>
  </Grid>
);

const mapStateToProps = (state) => ({
  pinValue: state.pin.pin,
  isPinValid: state.pin.isValid,
  isPinChecked: state.pin.isPinChecked,
});

PinDisplay.propTypes = {
  isPinChecked: PropTypes.bool.isRequired,
  isPinValid: PropTypes.bool.isRequired,
  pinValue: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(PinDisplay);
