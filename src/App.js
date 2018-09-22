import React, { Component } from 'react';
import './App.css';

import ToolBox from './toolBox/toolBox';
import Header from './header/header';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Header />
      </div>
    );
  }
}

export default App;
