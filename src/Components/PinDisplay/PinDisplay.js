import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '../Paper/Paper';

export const maskPin = (pinValue) => (
  [...pinValue].map((value, i) => (i !== pinValue.length - 1 ? '*' : value)).join('')
);

export const PinDisplay = ({
  pinValue,
  isPinValid,
  isPinChecked,
  attempts,
}) => {
  const isLocked = attempts === 3;
  return (
    <Grid item xs={12}>
      <Paper
        title="Pin Code"
        style={{ margin: 10 }}
        bodyComponent="p"
      >
        {
          isLocked && (<span id="LockedSpan">LOCKED</span>)
        }
        {
          !isLocked && isPinChecked && (
            <span id="CheckedPinResult">{isPinValid ? 'OK' : 'ERROR'}</span>
          )
        }
        {
          !isLocked && !isPinChecked && (
            <span id="PinNumber" style={{ padding: 10 }}>{maskPin(pinValue)}</span>
          )
      }
      </Paper>
    </Grid>
  );
};
const mapStateToProps = (state) => ({
  pinValue: state.pin.pin,
  isPinValid: state.pin.isValid,
  isPinChecked: state.pin.isPinChecked,
  attempts: state.pin.attempts,
});

PinDisplay.propTypes = {
  isPinChecked: PropTypes.bool.isRequired,
  isPinValid: PropTypes.bool.isRequired,
  pinValue: PropTypes.string.isRequired,
  attempts: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(PinDisplay);
