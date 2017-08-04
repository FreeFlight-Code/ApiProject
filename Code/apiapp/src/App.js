import React, { Component } from 'react';

import './App.css';
import AppHeader from './components/AppHeader';
import MainBody from './components/MainBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <MainBody/>
      </div>
    );
  }
}

export default App;
