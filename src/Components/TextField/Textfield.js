import React from 'react';
import PropTypes from 'prop-types';
import MaterialTextField from '@material-ui/core/TextField';

const TextField = ({
  id,
  isDisabled,
  label,
  defaultValue = '',
  value,
}) => (
  <MaterialTextField
    disabled={isDisabled}
    id={id}
    label={label}
    defaultValue={defaultValue}
    variant="outlined"
    value={value}
    fullWidth
  />
);

TextField.defaultProps = {
  defaultValue: '',
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default TextField;
