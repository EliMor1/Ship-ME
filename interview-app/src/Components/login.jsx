import React, { Component } from 'react'
import './styles.css';
import {Submit, Input, DivForm, Other, Header, Label, CheckBoxStyle} from './styledComponent'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import logo from '../assets/Logo.png'




export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:0,
      password:0,
      rememberMe: false,
      accessToken:'',
      logged:true
  
    };
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    document.body.style.backgroundColor = "#222e50";
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
    event.preventDefault();
    const loggedUser = {
      email:this.state.email,
      password:this.state.password,
      accessToken: localStorage.getItem('token')
    }
    axios.post("http://localhost:4000/app/auth/login", loggedUser)
    .then(response =>{
       if(response.data != 'invalid password.'){
        localStorage.setItem('token', response.data);
        document.cookie = `token=${response.data}`
        document.headers = `token=${response.data}`
        document.body.style.backgroundColor = "white";
        this.props.history.push("/home");
       }
       else{
          this.props.history.push("/");
          alert('one or more of the inserted data is incorrect!')
       }

      })
  }
    
  render() {
    localStorage.removeItem('token');
    return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Sign in</title>
          <DivForm>
            <br></br>
            <br></br>
            <img src ={logo} width="225" height="50"></img>
            <Header>Sign in</Header>
            <br></br>
            <form onSubmit={this.handleSubmit}>
              <Label for="emailBox">Email address </Label>
              <br></br>
              <Input id="emailBox" type="email" name="email"  title="Must be a valid email address." onChange={this.handleChangeEmail} autoFocus required></Input>
              <br></br>
              <br></br>
              <Label for="passwordBox">Password</Label>
              <br></br>
              <Input id="passwordBox" type="password" name="password" onChange={this.handleChangePassword} required></Input>
              <br></br>
              <br></br>
              <br></br>
              <Submit type="submit" value="Log In"></Submit>
              <br></br>
              <br></br>
              <CheckBoxStyle type="checkbox" name="rememberMe"  ></CheckBoxStyle>
              <Other>Remember me</Other>
              <br></br>
              <br></br>
              
              <Link to ="/sign-up">Create Account</Link>
              <br></br>
              <br></br>
            </form>
          </DivForm>
        </div>
    );
    
  }
}

export default Login
