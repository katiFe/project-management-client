import React, { Component } from 'react';
import './App.css';
import ProjectList from './components/projects/ProjectList';

class App extends Component {
  render() {
    return (
      <div className="App">
       <ProjectList />
      </div>
    );
  }
}

export default App;
