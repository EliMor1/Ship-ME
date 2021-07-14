import React, { Component } from 'react'
import {A, UnorderedList, ListItem,UnorderedNavbar, Nav} from './styledComponent'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import logo from '../assets/LogoHome.png'


export class InternNavbar extends Component {


    render() {
        const disablePage ={
            display:"none"
        }
        const navLinkStyle = {
            display:"block",
            color: "black",
            textAlign: "center",
            padding: "16px 12px",
            textDecoration:"none",
            fontSize: "11px",
            fontFamily: "Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            
        }
        return (
            <div>
                <div>
                    <Nav>
                        <UnorderedNavbar>
                            <ListItem>                          
                                <A><Link style={navLinkStyle} to = "/account/profile">Profile</Link></A>
                            </ListItem>
                            <ListItem>
                                <A><Link style={this.props.userRoles ? disablePage : navLinkStyle} to ="/account/company">Company</Link></A>
                            </ListItem>
                            <ListItem>                          
                                <A><Link style={navLinkStyle} to = "/account/account">Account</Link></A>
                            </ListItem>
                            <ListItem>
                                <A><Link style={!this.props.userRoles ? disablePage : navLinkStyle} to ="/account/companies">Companies</Link></A>
                            </ListItem>
                        </UnorderedNavbar>
                    </Nav>
                </div>
            </div>
        )
    }
}

export default InternNavbar
