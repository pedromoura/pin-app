import React from 'react';
import { shallow } from 'enzyme';

import Fab from '@material-ui/core/Fab';
import { Button } from './Button';

const mockFn = jest.fn();

describe('Test button suite', () => {
  test('renders Pin code App component', () => {
    const wrapper = shallow(
      <Button
        id="btnTeste"
        onClick={mockFn}
      >
        <span>TestLabel</span>
      </Button>,
    );
    expect(wrapper.find(Fab).length).toBe(1);
    expect(wrapper.find('#btnTeste').length).toBe(1);
    expect(wrapper.find('span').length).toBe(1);
  });

  test('click on button fn', () => {
    const wrapper = shallow(
      <Button
        id="btnTeste"
        onClick={mockFn}
      >
        <span>TestLabel</span>
      </Button>,
    );
    expect(mockFn).not.toHaveBeenCalled();
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
