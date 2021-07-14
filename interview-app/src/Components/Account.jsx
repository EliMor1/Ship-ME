import React, { Component } from 'react'
import {Header,Form,ColumnLeft,ColumnRight,Row,FullInput,FormLabel,BlankImg,HorizontalSeparator,Save} from './styledComponent'
import axios from 'axios'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import InternNavbar from './InternNavbar';
import blankImage from '../assets/BlankImage.png'

export class Account extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar/>
                </div>
                <div>
                    <InternNavbar/>
                </div>
                
            </div>
        )
    }
}

export default Account
