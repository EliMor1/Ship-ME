import React, { Component } from 'react'
import {VerticalSeparator, A, UnorderedList, ListItem, Logo, DropLabel,MinimizedImg,BellImg,DropImg} from './styledComponent'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import logo from '../assets/LogoHome.png'
import dropIcon from '../assets/Unknown.png'
import Default from '../assets/Default.jpg'
import Bell from '../assets/Bell.png'


export class Navbar extends Component {

    
    render() {
        
        const navLinkStyle = {
            display:"block",
            color: "white",
            textAlign: "center",
            padding: "16px 12px",
            textDecoration:"none",
            fontSize: "11px",
            fontWeight:"bold",
            fontFamily: "Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            
        }
        const LinkStyle = {
            display:"block",
            color: "black",
            textAlign: "left",
            textDecoration:"none",
            fontSize: "12px",
            fontFamily: "Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            
        }
        const disablePage ={
            display:"none"
        }
        
        return (
            <div>
                <div>
                    <UnorderedList>
                        <ListItem>
                            <Logo src ={logo} width="130" height="25"></Logo>
                        </ListItem>
                        <ListItem>
                        <VerticalSeparator/>
                        </ListItem>
                        <ListItem>                          
                            <A><Link style={navLinkStyle} to = "/home/shipments">Shipments</Link></A>
                        </ListItem>
                        <ListItem>
                            <A><Link style={navLinkStyle} to ="/home/orders">Orders</Link></A>
                        </ListItem>
                        <ListItem>
                        <BellImg src ={Bell}></BellImg>
                        </ListItem>
                        <ListItem>
                        <div class="dropdown">
                            <img src={dropIcon} class="dropbtn"></img>
                                <div class="dropdown-content">
                                <br></br>
                                <DropImg src={Default}></DropImg>
                                <DropLabel>{this.props.userName} {this.props.userLastName}</DropLabel>
                                <br></br>
                                <DropLabel>{this.props.userCompany}</DropLabel>
                                <br></br>
                                <br></br>
                                <a> <Link style={LinkStyle} to ="/account/profile">Profile</Link></a>
                                <a> <Link style={this.props.userRoles ? disablePage : LinkStyle} to ="/account/company">Company</Link> </a>
                                <a> <Link style={LinkStyle} to = "/account/account">Account</Link></a>
                                
                                <a> <Link style={!this.props.userRoles ? disablePage :LinkStyle} to = "/account/companies">Companies</Link></a>
                                <hr></hr>
                                <a> <Link style={LinkStyle} to = "/">Logout</Link></a>
                                <br></br>
                            </div>
                        </div>
                    </ListItem>
                    <ListItem>
                        
                        <MinimizedImg src ={Default}></MinimizedImg>
                    </ListItem>
                    
                    </UnorderedList>
                  
                </div>
            </div>
        )
    }
}

export default Navbar
