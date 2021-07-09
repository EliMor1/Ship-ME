import React, { Component } from 'react'
import './styles.css';
import {Submit} from './styledComponent'
import axios from 'axios'


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
    //alert('data is: ' + this.state.email + ', ' + this.state.password);
    event.preventDefault();
    if(this.state.password == this.state.confirmPassword){
      const registeredUser ={
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        email:this.state.email,
        password:this.state.password
      }
      axios.post("http://localhost:4000/app/auth/signup", registeredUser)
      .then(response => console.log(response.data));

      this.setState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
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
        <div className="div-form">
          <br></br>
          <h1>Ship-ME</h1>
          <h2>Sign up</h2>
          <form onSubmit={this.handleSubmit}>
            <span>
                <label className="label2">First name</label>
                <label className="label2">Last name</label>
                <br></br>
                <input className="input2" type="text" name="fName" onChange={this.handleChangeFirstName} autoFocus required ></input>
                <input className="input2" type="text" name="lName" onChange={this.handleChangeLastName} required></input>
                <br></br>
            </span>
            <br></br>
            <label for="emailBox">Email address </label>
            <br></br>
            <input id="emailBox" type="email" name="email" placeholder="name@company.com" title="Must be a valid email address." onChange={this.handleChangeEmail} required></input>
            <br></br>
            <br></br>
            <label for="passwordBox">Password </label>
            <br></br>
            <input id="passwordBox" type="password" name="pass" pattern="(?=.*\d)(?=.*[A-Z])(?=.*[$+,:;=?@#|'<>.-^*()%!]).{8,8}" title="Password must match the restrictions!" onChange={this.handleChangePassword} required></input>
            <br></br>
            <br></br>
            <label for="confirmPasswordBox">Confirm password </label>
            <br></br>
            <input id="confirmPasswordBox" type="password" name="confirmPass" pattern="(?=.*\d)(?=.*[A-Z])(?=.*[$+,:;=?@#|'<>.-^*()%!]).{8,8}" title="Password must match the restrictions!" onChange={this.handleChangeConfirmPassword} required></input>
            <br></br>
            <br></br>
            <br></br>
            <Submit type="submit" value="Sign Up"></Submit>
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

export default SignUp