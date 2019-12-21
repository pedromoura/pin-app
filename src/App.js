import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';
import PinCodeApp from './PinCodeApp';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PinCodeApp />
      </div>
    </Provider>
  );
}

export default App;
