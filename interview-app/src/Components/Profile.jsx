import React, { Component } from 'react'
import {Header,Form,ColumnLeft,ColumnRight,Row,FullInput,FormLabel,BlankImg,HorizontalSeparator,Save} from './styledComponent'
import axios from 'axios'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import InternNavbar from './InternNavbar';
import blankImage from '../assets/BlankImage.png'
import defaultImg from '../assets/Default.jpg'


export class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
          firstName:'',
          lastName:'',
          jobTitle:'',
          primaryPhone:'',
          secondaryPhone:'',
          primaryEmail : '',
          secondaryEmail:'',
          companyName:'',
          userType:false
      
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
      }

    handleChange(event){
        const input = event.target;
        const value = input.value;
        this.setState({[input.name] : value});
    }

  
    handleUpdate(response){
        var userRole = false;
        if(response.data.userType === 'admin'){
            userRole = true;
        }
        this.setState({
            firstName:response.data.firstName,
            lastName:response.data.lastName,
            jobTitle:response.data.jobTitle,
            primaryPhone:response.data.primaryPhone,
            secondaryPhone:response.data.secondaryPhone,
            primaryEmail:response.data.primaryEmail,
            secondaryEmail:response.data.secondaryEmail,
            companyName:response.data.companyName,
            userType:userRole
                
        });
    }

      componentDidMount(){
        if(!localStorage.getItem('token')){
            axios.get("http://localhost:4000/app/auth/validate").then(response => console.log(response));
            document.body.style.backgroundColor = "white";
            this.props.history.push("/unauthorized");
            
        }
          const accToken = {
              token: localStorage.getItem('token'),
          }
          axios.post("http://localhost:4000/app/account/profile", accToken).then(response => this.handleUpdate(response));
      }
      handleSubmit(event) {
        event.preventDefault();
          const profileSettings ={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            jobTitle:this.state.jobTitle,
            primaryPhone:this.state.primaryPhone,
            secondaryPhone:this.state.secondaryPhone,
            secondaryEmail:this.state.secondaryEmail,
            token: localStorage.getItem('token')
          }
          axios.post("http://localhost:4000/app/account/profile/update", profileSettings)
          .then(response => console.log(response));
          
        } 
    render() {
        return ( 
            <div>
                <div>
                    <Navbar userName ={this.state.firstName} userLastName={this.state.lastName} userCompany ={this.state.companyName} userRoles ={this.state.userType}/>
                </div>
                <div>
                    <InternNavbar userRoles ={this.state.userType}/>
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <h2>
                        Profile
                    </h2>
                    <Row>
                        <ColumnLeft>
                        <div>
                            <BlankImg src ={defaultImg}></BlankImg>
                        </div>
                        </ColumnLeft>
                        <ColumnRight>
                            <FormLabel>First name</FormLabel>
                            <FullInput type="text" name="firstName" value={this.state.firstName}  onChange={this.handleChange}></FullInput>
                            <br></br>
                            <br></br>
                            <FormLabel>Last name</FormLabel>
                            <FullInput type="text" name="lastName" value={this.state.lastName}  onChange={this.handleChange}></FullInput>
                        </ColumnRight>
                    </Row>
                    <br></br>
                    <FormLabel>Job title</FormLabel>
                    <FullInput type="text" name="jobTitle" value={this.state.jobTitle}  onChange={this.handleChange}></FullInput>
                    <br></br>
                    <br></br>
                    <hr style={{width:"101%"}}></hr>
                    
                    <FormLabel>Primary phone number</FormLabel>
                    <FullInput type="text" name="primaryPhone" value={this.state.primaryPhone}  onChange={this.handleChange}></FullInput>
                    <br></br>
                    <br></br>
                    <FormLabel>Secondary phone number</FormLabel>
                    <FullInput type="text" name="secondaryPhone" value={this.state.secondaryPhone}  onChange={this.handleChange}></FullInput>
                    <br></br>
                    <br></br>
                    <FormLabel>Primary email</FormLabel>
                    <h5>{this.state.primaryEmail}</h5>
                    
                    
                    <FormLabel>Secondary email</FormLabel>
                    <FullInput type="email" name="secondaryEmail" value={this.state.secondaryEmail}  onChange={this.handleChange}></FullInput>
                    <br></br>
                    <br></br>
                    <hr style={{width:"101%"}}></hr>
                    <FormLabel>Old password</FormLabel>
                    <FullInput type="password"></FullInput>
                    <br></br>
                    <br></br>
                    <FormLabel>New password</FormLabel>
                    <FullInput type="password"></FullInput>
                    <br></br>
                    <br></br>
                    <FormLabel>Confirm password</FormLabel>
                    <FullInput type="password"></FullInput>
                    <br></br>
                    <br></br>
                    <hr style={{width:"101%"}}></hr>
                    <br></br>
                    <Save type="submit" value="Save"></Save>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </Form>
            </div>
        )
    }
}

export default Profile
