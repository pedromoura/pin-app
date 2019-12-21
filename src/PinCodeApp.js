import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import PinKeyboard from './Components/PinKeyboard/PinKeyboard';
import PinDisplay from './Components/PinDisplay/PinDisplay';
import Paper from './Components/Paper/Paper';

const PinCodeApp = () => (
  <Container maxWidth="xs">
    <Paper
      elevation={3}
    >
      <Grid container spacing={5}>
        <PinDisplay />
        <PinKeyboard />
      </Grid>
    </Paper>
  </Container>
);

export default PinCodeApp;
