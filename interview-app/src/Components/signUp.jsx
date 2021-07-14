import React, { Component } from 'react'
import './styles.css';
import {Submit, Input, DivForm, Input2, Label2, Header, Label} from './styledComponent'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import logo from '../assets/Logo.png'

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      email : '',
      password:'',
      confirmPassword:''
  
    };
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    document.body.style.backgroundColor = "#222e50";
  }


  handleChangeFirstName(event) {
    this.setState({firstName: event.target.value});
  }

  handleChangeLastName(event) {
    this.setState({lastName: event.target.value});
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }
  handleChangeConfirmPassword(event) {
    this.setState({confirmPassword: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.password == this.state.confirmPassword){
      const registeredUser ={
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        email:this.state.email,
        password:this.state.password
      }
      axios.post("http://localhost:4000/app/auth/signup", registeredUser)
      .then(response =>{ 
        localStorage.setItem('token', response.data);
        document.body.style.backgroundColor = "white";
        this.props.history.push("/home");
      });
    }
    else{
      alert('Please match the password and confirm password fields in order to complete the Sign Up process.');
    }
  }

  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Sign in</title>
        <DivForm>
          <br></br>
          <img src ={logo} width="225" height="50"></img>
          <Header>Sign up</Header>
          <form onSubmit={this.handleSubmit}>
            <span>
                <Label2 >First name</Label2>
                <Label2 >Last name</Label2>
                <br></br>
                <Input2 type="text" name="fName" onChange={this.handleChangeFirstName} autoFocus required ></Input2>
                <Input2 type="text" name="lName" onChange={this.handleChangeLastName} required></Input2>
                <br></br>
            </span>
            <br></br>
            <Label for="emailBox">Email address </Label>
            <br></br>
            <Input id="emailBox" type="email" name="email"  title="Must be a valid email address." onChange={this.handleChangeEmail} required></Input>
            <br></br>
            <br></br>
            <Label for="passwordBox">Password </Label>
            <br></br>
            <Input id="passwordBox" type="password" name="pass" pattern="(?=.*\d)(?=.*[A-Z])(?=.*[$+,:;=?@#|'<>.-^*()%!]).{8,8}" title="Password must match the restrictions!" onChange={this.handleChangePassword} required></Input>
            <br></br>
            <br></br>
            <Label for="confirmPasswordBox">Confirm password </Label>
            <br></br>
            <Input id="confirmPasswordBox" type="password" name="confirmPass" pattern="(?=.*\d)(?=.*[A-Z])(?=.*[$+,:;=?@#|'<>.-^*()%!]).{8,8}" title="Password must match the restrictions!" onChange={this.handleChangeConfirmPassword} required></Input>
            <br></br>
            <br></br>
            <br></br>
            <Submit type="submit" value="Sign Up"></Submit>
            <br></br>
            <br></br>
            <Link to="/">Already a User?</Link>
            <br></br>
            <br></br>
          </form>
        </DivForm>
      </div>
    );
    
  }
}

export default SignUp