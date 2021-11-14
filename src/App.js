import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import authService from './services/auth-service';

import ProjectList from './components/projects/ProjectList';
import Navbar from './components/navbar/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';
import TaskDetails from './components/tasks/TaskDetails';
import ProtectedRoute from './components/auth/ProtectedRoute';

class App extends Component {
  
  //whenever user is logged we store it in state of mother component
  state = {
    isLoggedIn: false,
    user: null
  };
 
  //function that we can send a ref to the child through props/ 
  getTheUser = (userObj, loggedIn) => {
    this.setState({
      user: userObj,
      isLoggedIn: loggedIn
    });
  };

  //function to let user still be logged in, even is reload page
  fetchUser = () => {
    if (this.state.user === null) {
      authService
        .loggedin()
        .then(data => {
          this.setState({
            user: data,
            isLoggedIn: true
          });
        })
        .catch(err => {
          this.setState({
            user: null,
            isLoggedIn: false
          });
        });
    }
  };
 
  componentDidMount() {
    this.fetchUser();
  }


  render() {
    return (
      <div className="App">
      {/* when rendering Navbar we render info whether useris logged in or not and send a ref to login or logout user */}
       <Navbar userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} getUser={this.getTheUser} />
        <Switch>
        {/* //we render the login component in order to be able to send info of method through props */}
        <Route exact path="/" render={props => <Login {...props} getUser={this.getTheUser} />} />
          <Route exact path="/signup" component={Signup} />
 
          <ProtectedRoute
            user={this.state.user}
            exact
            path="/projects/:id"
            component={ProjectDetails}
            />
          <ProtectedRoute
            user={this.state.user}
            exact
            path="/projects"
            component={ProjectList}
            />
          <ProtectedRoute
            user={this.state.user}
            exact
            path="/projects/:id/tasks/:taskId"
            component={TaskDetails}
            />
        </Switch>
      </div>
    );
  }
}

export default App;
