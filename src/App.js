import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <main>
      <Provider store={store}></Provider>
      </main>
    </div>
  );
}

export default App;
