import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

import PinKeyboard from './Components/PinKeyboard/PinKeyboard';
import PinDisplay from './Components/PinDisplay/PinDisplay';
import Paper from './Components/Paper/Paper';
import configureStore from './Store/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
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
      </div>
    </Provider>
  );
}

export default App;
