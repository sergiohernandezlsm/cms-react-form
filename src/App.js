import { Provider } from 'react-redux';
import React from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <List />
      </div>
    </Provider>
  );
}

export default App;
