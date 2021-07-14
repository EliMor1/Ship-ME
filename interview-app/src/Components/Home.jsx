import React, { Component } from 'react'
import {LeftSection,DropButton,Dropdown,DropdownItem,DropdownContent} from './styledComponent'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import logo from '../assets/LogoHome.png'
import Navbar from './Navbar';
import InternNavbar from './InternNavbar';
import dropIcon from '../assets/DropIcon.png'


export class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
          firstName:'',
          lastName:'',
          companyName:'',
          userType:false,
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
      }

    handleUpdate(response){
        var userRole = false;
       
        if(response.data.userType === 'admin'){
            userRole = true;
        }
        
        this.setState({
            firstName:response.data.firstName,
            lastName:response.data.lastName,
            companyName:response.data.companyName,
            userType:userRole,
                
        });
        console.log("userType",this.state.userType);
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


    render() {
        return (
            <div>
                <div>
                    <Navbar userName ={this.state.firstName} userLastName={this.state.lastName} userCompany ={this.state.companyName} userRoles = {this.state.userType}/>     
                </div>
                <div>
                  <div>
                  </div>
                   <LeftSection/>
                </div>
            </div>
        )
    }
}

export default Home
