// auth/Signup.js

import React, { Component } from 'react';
import authService from "../../services/auth-service";
import { Link } from 'react-router-dom';

class Signup extends Component {

  state = { username: '', password: '' }

  // handleChange() and handleSubmit() will be added here

  handleFormSubmit = (event) => {
      //stop browser to reload
    event.preventDefault();
    const {username, password} = this.state;

   //calling our service //communication to server is centralized
    authService.signup(username, password)
    .then(createdUser => {
        //clear form another alternative could be to redirect <Redirect/>
        this.setState({
            username: "",
            password: "",
        });
        // this.props.getUser(response, true);
    })
    .catch(error => console.log(error))
  }
   

  // a generic method with varialble [name]// we access it dynamically
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
   
   
  render(){
    return(
      <div>
      <h2>Signup:</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label>
          Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
   
          <label>
          Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
   
          <button type="submit"> Signup </button>
        </form>
   
        <p>
          Already have an account?
          <Link to={"/"}> Login</Link>
        </p>
   
      </div>
    )
  }
}

export default Signup;
