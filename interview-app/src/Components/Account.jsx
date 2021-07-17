import React, { Component } from 'react'
import {AddNewUser} from './styledComponent'
import axios from 'axios'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import InternNavbar from './InternNavbar';
import blankImage from '../assets/BlankImage.png'

export class Account extends Component {

    constructor(props) {
        super(props);
        this.state={     
         allCompanyUsers:[],
      };
        //this.renderTableData = this.renderTableData.bind(this);
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

    render() {
        return (
            <div>
                <div>
                    <Navbar userName ={this.state.firstName} userLastName={this.state.lastName} userCompany ={this.state.companyName} userRoles ={this.state.userType}/>
                </div>
                <div>
                    <InternNavbar userRoles ={this.state.userType}/>
                </div>

                <input type="text" id="myInput" placeholder="Search" title="Type in a name" onKeyUp={this.onKey}></input>
                <Link to ="/account/new-user"><AddNewUser type="button" value="Add user"></AddNewUser></Link>
                
            </div>
        )
    }
}

export default Account
