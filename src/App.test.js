import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import App from './App';
import PinCodeApp from './PinCodeApp';

test('renders app skel', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App').length).toBe(1);
  expect(wrapper.find(PinCodeApp).length).toBe(1);
  expect(wrapper.find(Provider).length).toBe(1);
});
