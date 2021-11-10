import React, { Component } from 'react';
import './App.css';
import AddProject from './components/projects/AddProject';

class App extends Component {
  render() {
    return (
      <div className="App">
       <AddProject />
      </div>
    );
  }
}

export default App;

