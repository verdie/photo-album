import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import AlbumsListContainer from './components/AlbumsListContainer';
import { Route } from 'react-router-dom'
import PhotoPageContainer from './components/PhotoPageContainer';

function App() {
  return (
    <div className="App">
      <main>
      <Provider store={store}>
        <Route exact path="/" component={AlbumsListContainer} />
        <Route exact path="/albums/:id" component={PhotoPageContainer} />
        </Provider>
      </main>
    </div>
  );
}

export default App;
