import React from 'react';
import { shallow } from 'enzyme';

import Grid from '@material-ui/core/Grid';
import Paper from '../Paper/Paper';
import { PinDisplay, maskPin } from './PinDisplay';


describe('Test Pin Display suite', () => {
  test('renders PinDisplay component', () => {
    const wrapper = shallow(
      <PinDisplay
        pinValue=""
        isPinValid={false}
        isPinChecked={false}
        attempts={0}
      />,
    );
    expect(wrapper.find(Grid).length).toBe(1);
    expect(wrapper.find(Paper).length).toBe(1);
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('#PinNumber').length).toBe(1);
    expect(wrapper.find('#CheckedPinResult').length).toBe(0);
  });

  test('mask pin value function', () => {
    const emptyPin = maskPin('');
    expect(emptyPin).toBe('');
    const pinOneNumber = maskPin('1');
    expect(pinOneNumber).toBe('1');
    const pin = maskPin('124');
    expect(pin).toBe('**4');
  });

  test('render pin display with pinchecked set to true', () => {
    const wrapper = shallow(
      <PinDisplay
        pinValue="1252"
        isPinValid={false}
        isPinChecked
        attempts={0}
      />,
    );
    expect(wrapper.find(Grid).length).toBe(1);
    expect(wrapper.find(Paper).length).toBe(1);
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('#PinNumber').length).toBe(0);
    expect(wrapper.find('#CheckedPinResult').length).toBe(1);
    expect(wrapper.find('span').text()).toBe('ERROR');
  });

  test('render pin display with pinchecked set to true and with a valid pin', () => {
    const wrapper = shallow(
      <PinDisplay
        pinValue="1252"
        isPinValid
        isPinChecked
        attempts={0}
      />,
    );
    expect(wrapper.find(Grid).length).toBe(1);
    expect(wrapper.find(Paper).length).toBe(1);
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('#PinNumber').length).toBe(0);
    expect(wrapper.find('#CheckedPinResult').length).toBe(1);
    expect(wrapper.find('#CheckedPinResult').length).toBe(1);
    expect(wrapper.find('span').text()).toBe('OK');
  });

  test('render pin display with 3 attempts', () => {
    const wrapper = shallow(
      <PinDisplay
        pinValue="1252"
        isPinValid
        isPinChecked
        attempts={3}
      />,
    );
    expect(wrapper.find(Grid).length).toBe(1);
    expect(wrapper.find(Paper).length).toBe(1);
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('#PinNumber').length).toBe(0);
    expect(wrapper.find('#CheckedPinResult').length).toBe(0);
    expect(wrapper.find('#CheckedPinResult').length).toBe(0);
    expect(wrapper.find('#LockedSpan').length).toBe(1);
    expect(wrapper.find('span').text()).toBe('LOCKED');
  });
});
