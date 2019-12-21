import React from 'react';
import { shallow } from 'enzyme';

import Grid from '@material-ui/core/Grid';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Button from '../Button/Button';
import { PinKeyboard } from './PinKeyboard';

const onChangePinFn = jest.fn();
const onDeletePinFn = jest.fn();
const resetAttempsFn = jest.fn();

describe('Test PinKeyboard suite', () => {
  test('renders PinKeyboard component', () => {
    const wrapper = shallow(
      <PinKeyboard
        onChangePin={onChangePinFn}
        onDeletePin={onDeletePinFn}
        attempts={0}
        resetAttemps={resetAttempsFn}
      />,
    );
    expect(wrapper.find(Grid).length).toBe(13);
    expect(wrapper.find(Button).length).toBe(11);
    expect(wrapper.find(BackspaceIcon).length).toBe(1);
  });

  test('click on keyboard button', () => {
    const wrapper = shallow(
      <PinKeyboard
        onChangePin={onChangePinFn}
        onDeletePin={onDeletePinFn}
        attempts={0}
        resetAttemps={resetAttempsFn}
      />,
    );
    expect(onChangePinFn).not.toHaveBeenCalled();
    wrapper.find(Button).first().simulate('click');
    expect(onChangePinFn).toHaveBeenCalledWith('1');
    wrapper.find('#btn_0').simulate('click');
    expect(onChangePinFn).toHaveBeenCalledWith('0');
  });

  test('click on keyboard delete button', () => {
    const wrapper = shallow(
      <PinKeyboard
        onChangePin={onChangePinFn}
        onDeletePin={onDeletePinFn}
        attempts={0}
        resetAttemps={resetAttempsFn}
      />,
    );
    expect(onDeletePinFn).not.toHaveBeenCalled();
    wrapper.find('#delete').simulate('click');
    expect(onChangePinFn).not.toHaveBeenCalledWith(1);
  });

  test('locked keyboard with 3 attempts', () => {
    const wrapper = shallow(
      <PinKeyboard
        onChangePin={onChangePinFn}
        onDeletePin={onDeletePinFn}
        attempts={2}
        resetAttemps={resetAttempsFn}
      />,
    );
    expect(resetAttempsFn).not.toHaveBeenCalled();
    expect(wrapper.find(Button).first().props().isDisabled).toBe(false);
    wrapper.setProps({
      attempts: 3,
    });
    expect(wrapper.find(Button).first().props().isDisabled).toBe(true);
    expect(onChangePinFn).not.toHaveBeenCalledWith(1);
  });
});
