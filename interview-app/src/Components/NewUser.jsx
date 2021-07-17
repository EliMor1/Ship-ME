import React, { Component } from 'react'
import {Header,Form,ColumnLeft,ColumnRight,Row,FullInput,FormLabel,BlankImg,Save,LeftColumn,CenterColumn,RightColumn,Cancel,Create} from './styledComponent'
import axios from 'axios'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import InternNavbar from './InternNavbar';
import blankImage from '../assets/BlankImage.png'
import Default from '../assets/Default.jpg'


export class NewUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
          firstName:'',
          lastName:'',
          jobTitle:'',
          email:'',
          phone:'',
          userType: '',
          password:'',
          confirmPassword:'',
      
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
      }

    handleChange(event){
        const input = event.target;
        const value = input.value;
        this.setState({[input.name] : value});
    }
    handleCancel(event){
        this.props.history.push("/account/account");
    }

      handleSubmit(event) {
        event.preventDefault();
        if(this.state.password == this.state.confirmPassword){
            const userSettings ={
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                jobTitle:this.state.jobTitle,
                email:this.state.email,
                phone:this.state.companyZipCode,
                userType:this.state.userType,
                password:this.state.password,
                confirmPassword:this.state.confirmPassword,
              }
              axios.post("http://localhost:4000/app/account/account/new-user", userSettings)
              .then(response => console.log(response));
              alert('New user created successfully and added to the company!');
              this.props.history.push("/account/account");
              
            }
            else{
                alert("please match password and password confirmation.");
            }
    
        }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <h2>
                        New User
                    </h2>
                    <Row>
                        <ColumnLeft>
                        <div>
                            <BlankImg src ={Default}></BlankImg>
                        </div>
                        </ColumnLeft>
                        <ColumnRight>
                            <FormLabel>First name</FormLabel>
                            <FullInput type="text" name="firstName" value={this.state.firstName}  onChange={this.handleChange} required></FullInput>
                            <br></br>
                            <br></br>
                            <FormLabel>Last name</FormLabel>
                            <FullInput type="text" name="lastName" value={this.state.lastName}  onChange={this.handleChange} required></FullInput>
                        </ColumnRight>
                    </Row>
                    <br></br>                
                    <FormLabel>Job title</FormLabel>
                    <FullInput type="text" name="jobTitle" value={this.state.jobTitle}  onChange={this.handleChange}></FullInput>
                    <br></br>
                    <br></br>
                    <FormLabel>Email</FormLabel>
                    <FullInput type="email" name="email" value={this.state.email}  onChange={this.handleChange} required></FullInput>
                    <br></br>
                    <br></br>
                    <FormLabel>Phone</FormLabel>
                    <FullInput type="text" name="phone" value={this.state.phone}  onChange={this.handleChange}></FullInput>
                    <br></br>
                    <br></br>
                 
                    <FormLabel>User type</FormLabel>
                    <FullInput type="text" name="userType" value={this.state.userType}  onChange={this.handleChange} required></FullInput>
                    <br></br>
                    <br></br>
                    <Row>
                        <LeftColumn>
                            <FormLabel>Password</FormLabel>
                            <FullInput style={{width:"162%"}} type="password" name="password" pattern="(?=.*\d)(?=.*[A-Z])(?=.*[$+,:;=?@#|'<>.-^*()%!]).{8,8}" title="Password must match the restrictions!" value={this.state.password}  onChange={this.handleChange} required></FullInput>
                        </LeftColumn>
                        <RightColumn>
                            <FormLabel>Confirm password</FormLabel>
                            <FullInput style={{width:"167.5%"}} type="password" name="confirmPassword" pattern="(?=.*\d)(?=.*[A-Z])(?=.*[$+,:;=?@#|'<>.-^*()%!]).{8,8}" title="Password must match the restrictions!" value={this.state.confirmPassword}  onChange={this.handleChange} required></FullInput>
                        </RightColumn>
                    </Row>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <Cancel type="button" value="Cancel" onClick={this.handleCancel}></Cancel>
                    <Create type="submit" value="Create"></Create>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </Form>
            </div>
        )
    }
}

export default NewUser
