import React from 'react';
import { shallow } from 'enzyme';

import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import PinKeyboard from './Components/PinKeyboard/PinKeyboard';
import PinDisplay from './Components/PinDisplay/PinDisplay';
import Paper from './Components/Paper/Paper';

import PinCodeApp from './PinCodeApp';

test('renders Pin code App component', () => {
  const wrapper = shallow(<PinCodeApp />);
  expect(wrapper.find(Grid).length).toBe(1);
  expect(wrapper.find(Container).length).toBe(1);
  expect(wrapper.find(PinDisplay).length).toBe(1);
  expect(wrapper.find(PinKeyboard).length).toBe(1);
  expect(wrapper.find(Paper).length).toBe(1);
});
