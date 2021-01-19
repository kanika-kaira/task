import React from "react";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Component } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
// import { User } from "../provider/index";
import dateFormat from 'dateformat';
import {
    Col,
    Card,
    CardText,
    CardImg,
    Row,
    Nav as TabNav,
    Navbar,
    NavbarToggler,
} from 'reactstrap';
export default class App1 extends Component {
    state = {
        // startDate: new Date(),
        // expanded: false,
        // startDate2: new Date(),
        // dropdownOpen: false,
        // selectedOption: null,
        // activTab: 0,
        // isOpen: false,
        // modalType: ""
        dataFrame: [],
        dataFrame1: [] ,
        dataFrame2: [],
        }
   
   async componentDidMount() {
       
        const url = "https://randomuser.me/api/?results=100";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ dataFrame: data.results,dataFrame1: data.results ,dataFrame2: data.results });
        console.log("data",this.state.dataFrame)

      }
      
     
    toggle = () => {
        this.setState((state, props) => { return { isOpen: !state.isOpen } })

    }
 
    filtergender=(gen)=>{
        console.log("data",gen)
        if(gen === 'gender'){
            const gender1 = this.state.dataFrame2.map(item=>{return item})
            this.setState({
                dataFrame:gender1
             }
             ,()=>{console.log("data",this.state.dataFrame)}) 
        }
    }
    filtergender1=(gen)=>{
        const gender2 = this.state.dataFrame1.filter(item=>item.gender === "female")
        this.setState({
            dataFrame:gender2
         }
         ,()=>{console.log("data",this.state.dataFrame)})
    }
    filtergender2=(gen)=>{
        const gender3 = this.state.dataFrame1.filter(item=>item.gender === "male")
        this.setState({
            dataFrame:gender3
         }
         ,()=>{console.log("data",this.state.dataFrame)})
    }

    render() {
        const { selectedOption } = this.state;
        return (
            <div>
                < div >
                    <Navbar style={{ backgroundColor: "#E0E0E0" }}>
                        <h1 style={{
                            color: "#7D0F0F",
                            fontWeight: "bold",

                        }}>Profile</h1>
                        <NavbarToggler onClick={this.toggle} />
                    </Navbar>
                </div >


                <br />
                <select
                 >
          <option value="gender" onClick={()=>this.filtergender("gender")}>gender</option>
          <option value="male" onClick={()=>this.filtergender2("male")}>male</option>
          <option value="female" onClick={()=>this.filtergender1("female")}>female</option>
        </select>
             <center>   <div style={{border:"2px solid blue",height:"40rem" , width:"70rem",overflowY:"auto"}}>
   
  
  <center><Row style={{width:"80%", textAlign:"center" ,marginBottom:"5%",display:"flex" ,justifyContent:"space-evenly"}} >  
{this.state.dataFrame.map((item, index) => (

  <Col xl="4" lg="4" md="4" sm="12" xs="12" >
 <Card style={{width:"98%",color:"black",fontSize:"1rem" }} className="mb-5 mt-5">
<div style={{borderBottom:"1px solid gray",display:"flex",flexDirection:"column"}} className="mt-3 pb-3"><Row><Col><center><CardImg alt=" " top src={item.picture.medium} style={{borderRadius:200,width:"45%"}}/></center>
</Col>
<Col><CardText ><b>{item.id.name}</b></CardText>
<CardText>{item.dob.age}   {item.gender}</CardText></Col></Row></div>
<div style={{textAlign:"left"}}><CardText><b>D.O.B:</b> {dateFormat(item.dob.date, "mmmm dS, yyyy")}</CardText>
  <CardText><b>Phone:</b>{item.phone} </CardText>
   <CardText><b>Email:</b>{item.email} </CardText></div>
  </Card>

  </Col>
 ))}  
  </Row>
  
        
  </center>                   

  
</div></center>

            </div>



        );

    }
}