// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react';
import './App.css';
import About from './components/about'
import Skills from './components/skills';

class App extends Component {
  render() {
    return (
      <div>
        <About />
        <Skills />
      </div>			
    );
  }
}

export default App;
