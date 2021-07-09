import React, { Component } from 'react'
import './styles.css';
import {Submit} from './styledComponent'
import axios from 'axios'



export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:0,
      password:0,
      rememberMe: false,
  
    };
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleChange(event){
    const input = event.target;
    let value = null;
    if(input.type === 'checkbox'){
      value = input.checked;
    }
    else if(input.type ==='email' || input.type ==='password'){
      value = input.value;
    }
    this.setState({[input.name] : value});
  }

 

  handleSubmit(event) {
    //alert('data is: ' + this.state.email + ', ' + this.state.password);
    event.preventDefault();
    
    const loggedUser = {
      email:this.state.email,
      password:this.state.password,
      accessToken: localStorage.getItem('token')
    }
    axios.post("http://localhost:4000/app/auth/login", loggedUser)
    .then(response => localStorage.setItem('token', response.data));
    console.log(localStorage.getItem('token'));
  }

  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Sign in</title>
        <div className="div-form">
          <br></br>
          <br></br>
          <h1>Ship-ME</h1>
          <h2>Sign in</h2>
          <br></br>
          <form onSubmit={this.handleSubmit}>
            <label for="emailBox">Email address </label>
            <br></br>
            <input id="emailBox" type="email" name="email"  title="Must be a valid email address." onChange={this.handleChangeEmail} autoFocus required></input>
            <br></br>
            <br></br>
            <label for="passwordBox">Password </label>
            <br></br>
            <input id="passwordBox" type="password" name="password" onChange={this.handleChangePassword} required></input>
            <br></br>
            <br></br>
            <br></br>
            <Submit type="submit" value="Log In"></Submit>
            <br></br>
            <br></br>
            <input type="checkbox" className="input1" name="rememberMe"  ></input>
            <span className="checkboxtext">
              Remember me
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
    );
    
  }
}

export default Login
