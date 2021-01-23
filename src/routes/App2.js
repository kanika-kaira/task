import React from "react";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Component } from 'react';
import Fade from "react-reveal"
import Background from "../img/night.jpeg";
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
    Col,
    Card,
    CardText,
    CardImg,
    Row,
    Nav as TabNav,
    Navbar,
    NavbarToggler,
    Button
} from 'reactstrap';
export default class App2 extends Component {
    state = {
     
      mode: true // initial value of mode
        }

//arrow function for changing the initial value of mode
        changemode = () => {
         //here we are setting the state
            this.setState({
                mode: !this.state.mode
            } ,()=>{console.log(this.state.mode)});
          };
    
    render() 
    {
//using condition to change the page mode
        if (this.state.mode === true)
        return (
          
            <div style={{backgroundImage: `url(${Background})`,color:"white",height:"70rem",paddingTop:"30%"}}>
<center>
    <h1>This id Dark Mode</h1>
   <Button onClick={this.changemode} style={{backgroundColor:"white" ,color:"black"}}> dark mode</Button>
   <Fade bottom cascade> <img src={require("../../src/Moon.jpeg")}  width={"50rem"} className="ml-2"/></Fade>
    </center>

            </div>


        
        );
        else {
            return (
                <div style={{backgroundColor:"white",color:"black",height:"70rem",paddingTop:"30%"}}>
    <center>
    <h1>This id Light Mode</h1>
  <Button onClick={this.changemode} color="secondary"> light mode</Button>
  < Fade bottom cascade>   <img src={require("../../src/SUN.jpeg")}  width={"50rem"} className="ml-2"/></Fade>

        </center>
    
                </div>
    
    
    
            );
        }

    }
    }