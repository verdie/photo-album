import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import AlbumsListContainer from './components/AlbumsListContainer';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <main>
      <Provider store={store}>
        <Route exact path="/" component={AlbumsListContainer} />
        </Provider>
      </main>
    </div>
  );
}

export default App;
