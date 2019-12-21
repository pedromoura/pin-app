import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Button from '../Button/Button';

import * as PinActions from '../../Actions/pin';

const availableButtons = new Array(9).fill().map((v, index) => String(index + 1));

class PinKeyboard extends Component {
    _onClickKey = (value) => {
      const {
        onChangePin,
      } = this.props;
      onChangePin(value);
    }

    _onClickDelete = () => {
      const {
        onDeletePin,
      } = this.props;
      onDeletePin();
    }

    render() {
      return (
        <>
          <Grid container item spacing={2} xs={12}>
            {
                availableButtons.map((value) => (
                  <Grid
                    item
                    xs={4}
                    key={`btn_${value}`}
                  >
                    <Button
                      id={`btn_${value}`}
                      onClick={() => this._onClickKey(value)}
                    >
                      <span>{value}</span>
                    </Button>
                  </Grid>
                ))
            }
            <Grid item xs={4} />
            <Grid item xs={4}>
              <Button
                id={0}
                onClick={() => this._onClickKey(0)}
              >
                <span>{0}</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                id="delete"
                onClick={this._onClickDelete}
              >
                <BackspaceIcon />
              </Button>
            </Grid>
          </Grid>
        </>
      );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(PinActions, dispatch);

PinKeyboard.propTypes = {
  onChangePin: PropTypes.func.isRequired,
  onDeletePin: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(PinKeyboard);
