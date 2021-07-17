import React, { Component } from 'react'
import {AddNewCompany} from './styledComponent'
import axios from 'axios'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import InternNavbar from './InternNavbar';
import blankImage from '../assets/BlankImage.png'
import './styles.css';
import Actions from '../assets/Actions.jpg'

export class Companies extends Component {
    constructor(props) {
        super(props);
        this.state={     
         allCompanies:[],
      };
        this.newCompany = this.newCompany.bind(this);
        this.renderTableData = this.renderTableData.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    renderTableData() {
        return this.state.allCompanies.map((company, index) => {
           const { _id, companyManager, companyName,companyAddress, city,state,zipCode, companyPhone, companyEmail, companyWebsite, primaryContactName,primaryContactPhone,primaryContactJobTitle } = company //destructuring
           return (
              <tr key={_id} name={companyName}>
                 <td>{_id}</td>
                 <td>{companyName}</td>
                 <td>{companyPhone}</td>
                 <td>{companyWebsite}</td>
                 <td>{companyAddress}</td>
                 <td>{3}</td>
                 <td>{primaryContactName}</td>
                 <td>{primaryContactPhone}</td>
                 <td>
                    <div class="actiondropdown">
                        <img src={Actions} class="actiondropbtn"></img>
                        <div class="actiondropdown-content">
                        <a>Edit company</a>
                        <a>Edit account</a>
                        <hr></hr>
                        <a>Delete</a>
                        </div>
                    </div>
                </td>
              </tr>
           )
        })
     }

     handleDelete(name){
         const companyToDelete = {
             companyName : name,
         }
         return axios.post("http://localhost:4000/app/delete", companyToDelete).then(response => console.log(response));
     }

     handleUpdate(response){
        this.setState({
            allCompanies:response.data,
         });
    }

     componentDidMount(){
        if(!localStorage.getItem('token')){
            axios.get("http://localhost:4000/app/auth/validate").then(response => console.log(response));
            document.body.style.backgroundColor = "white";
            this.props.history.push("/unauthorized");
            
        }
        axios.get("http://localhost:4000/app/getcomps").then(response => this.handleUpdate(response));
        
     }
    newCompany(event){
        this.props.history.push("/account/new-company");
    }

    render() { 
        return (
            <div>
                <div>
                    <Navbar userName ={"Admin"} userLastName={" "} userCompany ={" "} userRoles = {"admin"}/>
                </div>
                <div>
                    <InternNavbar userRoles = {"admin"}/>
                </div>
                <div>
                <input type="text" id="myInput" placeholder="Search" title="Type in a name" onKeyUp={this.onKey}></input>
                <Link to ="/account/new-company"><AddNewCompany type="button" value="Add New Company"></AddNewCompany></Link>
                <br></br>
                <br></br>
                <table id="myTable">
                <tr>
                    <th style ={{width:"5%"}}>ID</th>
                    <th style={{width:"17.5%"}}>Company name</th>
                    <th style ={{width:"10%"}}>Phone</th>
                    <th style={{width:"10%"}}>Website</th>
                    <th style ={{width:"17.5%"}}>Address</th>
                    <th style={{width:"12.5%"}}>Number of devices</th>
                    <th style ={{width:"12.5%"}}>Primary contact</th>
                    <th style={{width:"10%"}}>Contact phone</th>
                    <th style={{width:"5%"}}>Actions</th>
                </tr>
                    {this.renderTableData()}
                </table>
                </div>
            </div>
        )
    }
}

export default Companies
