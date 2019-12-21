import React from 'react';
import { shallow } from 'enzyme';
import MaterialPaper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Paper from './Paper';

test('renders paper component', () => {
  const wrapper = shallow(
    <Paper
      title="Teste"
      elevation={2}
    >
      <div id="paperBody">Teste</div>
    </Paper>,
  );
  expect(wrapper.find('#paperBody').length).toBe(1);
  expect(wrapper.find(MaterialPaper).length).toBe(1);
  expect(wrapper.find(Typography).length).toBe(2);
});
