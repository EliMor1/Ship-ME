import React, { Component } from 'react'
import {Header,Form,ColumnLeft,ColumnRight,Row,FullInput,FormLabel,BlankImg,Save,LeftColumn,CenterColumn,RightColumn,Cancel,Create} from './styledComponent'
import axios from 'axios'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import InternNavbar from './InternNavbar';
import blankImage from '../assets/BlankImage.png'
import defaultCompanyImg from '../assets/company-default.png'


export class NewCompany extends Component {

    constructor(props) {
        super(props);
        this.state = {
          companyName:'',
          companyAddress:'',
          companyCity:'',
          companyState:'',
          companyZipCode:'',
          companyPhone: '',
          companyEmail:'',
          companyWebsite:'',
          primaryContactName:'',
          primaryContactPhone:'',
          primaryContactJobTitle:'',
      
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
        this.props.history.push("/account/companies");
    }

      handleSubmit(event) {
        event.preventDefault();
          const companySettings ={
            companyName:this.state.companyName,
            companyAddress:this.state.companyAddress,
            companyCity:this.state.companyCity,
            companyState:this.state.companyState,
            companyZipCode:this.state.companyZipCode,
            companyPhone:this.state.companyPhone,
            companyEmail:this.state.companyEmail,
            companyWebsite:this.state.companyWebsite,
            primaryContactName:this.state.primaryContactName,
            primaryContactPhone:this.state.primaryContactPhone,
            primaryContactJobTitle:this.state.primaryContactJobTitle,
            token: localStorage.getItem('token')
          }
          axios.post("http://localhost:4000/app/newcomp", companySettings)
          .then(response => console.log(response));
          alert('New company created successfully!');
          this.props.history.push("/account/companies");
          
        }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <h2>
                        New Company
                    </h2>
                    <Row>
                        <ColumnLeft>
                        <div>
                            <BlankImg src ={defaultCompanyImg}></BlankImg>
                        </div>
                        </ColumnLeft>
                        <ColumnRight>
                            <FormLabel>Company name</FormLabel>
                            <FullInput type="text" name="companyName" value={this.state.companyName}  onChange={this.handleChange}></FullInput>
                            <br></br>
                            <br></br>
                            <FormLabel>Company Address</FormLabel>
                            <FullInput type="text" name="companyAddress" value={this.state.companyAddress}  onChange={this.handleChange}></FullInput>
                        </ColumnRight>
                    </Row>
                    <br></br>
                    <Row>
                        <LeftColumn>
                            <FormLabel>City</FormLabel>
                            <FullInput type="text" name="companyCity" value={this.state.companyCity}  onChange={this.handleChange}></FullInput>
                        </LeftColumn>
                        <CenterColumn>
                            <FormLabel>State</FormLabel>
                            <FullInput type="text" name="companyState" value={this.state.companyState}  onChange={this.handleChange}></FullInput>
                        </CenterColumn>
                        <RightColumn>
                            <FormLabel>Zip code</FormLabel>
                            <FullInput type="text" name="companyZipCode" value={this.state.companyZipCode}  onChange={this.handleChange}></FullInput>
                        </RightColumn>
                    </Row>
                    
                    <br></br>
                    <FormLabel>Company phone</FormLabel>
                    <FullInput type="text" name="companyPhone" value={this.state.companyPhone}  onChange={this.handleChange}></FullInput>
                    <br></br>
                    <br></br>
                    <FormLabel>Company email</FormLabel>
                    <FullInput type="email" name="companyEmail" value={this.state.companyEmail}  onChange={this.handleChange}></FullInput>
                    <br></br>
                    <br></br>
                    <FormLabel>Company website</FormLabel>
                    <FullInput type="text" name="companyWebsite" value={this.state.companyWebsite}  onChange={this.handleChange}></FullInput>
                    <br></br>
                    <br></br>
                 
                    <FormLabel>Primary contact name</FormLabel>
                    <FullInput type="text" name="primaryContactName" value={this.state.primaryContactName}  onChange={this.handleChange}></FullInput>
                    <br></br>
                    <br></br>
                    <FormLabel>Primary contact phone</FormLabel>
                    <FullInput type="text" name="primaryContactPhone" value={this.state.primaryContactPhone}  onChange={this.handleChange}></FullInput>
                    <br></br>
                    <br></br>
                    <FormLabel>Primary contact job title</FormLabel>
                    <FullInput type="text" name="primaryContactJobTitle" value={this.state.primaryContactJobTitle}  onChange={this.handleChange}></FullInput>
                    <br></br>
                    <br></br>
                    <hr style={{width:"101%"}}></hr>
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

export default NewCompany
