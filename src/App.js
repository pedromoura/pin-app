import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import configureStore from './Store/configureStore';
import PinCodeApp from './PinCodeApp';

import theme from './Theme';

const store = configureStore();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <PinCodeApp />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
