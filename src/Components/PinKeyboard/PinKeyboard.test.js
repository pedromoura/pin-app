import React from 'react';
import { shallow } from 'enzyme';

import Grid from '@material-ui/core/Grid';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Button from '../Button/Button';
import { PinKeyboard } from './PinKeyboard';

const onChangePinFn = jest.fn();
const onDeletePinFn = jest.fn();

describe('Test PinKeyboard suite', () => {
  test('renders PinKeyboard component', () => {
    const wrapper = shallow(
      <PinKeyboard
        onChangePin={onChangePinFn}
        onDeletePin={onDeletePinFn}
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
      />,
    );
    expect(onDeletePinFn).not.toHaveBeenCalled();
    wrapper.find('#delete').simulate('click');
    expect(onChangePinFn).not.toHaveBeenCalledWith(1);
  });
});
