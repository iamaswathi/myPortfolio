// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react';
import './App.css';
import About from './components/about'
import Skills from './components/skills';
import Extras from './components/extras';
import Timeline from './components/timeline';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import "./custom.scss";
import Header from './components/header';
import Testimonials from './components/testimonials';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Skills />
        <Extras />
        <Timeline />
        <Testimonials />
      </div>			
    );
  }
}

export default App;
