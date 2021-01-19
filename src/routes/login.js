import React, { useState } from "react";
// import "./Login.css";
import {
  Container, Row, Col,Form,
  FormGroup, Label, Input,
  Button,
  CardHeader,
  Card
} from 'reactstrap';
import { useHistory } from "react-router-dom";


const user={
  username:"user@gmail.com",
  password:"user123",
}
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();


  

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
  
      e.preventDefault();
      if(email===user.username && password===user.password){ 
       props.history.push('/App1');
      }
      else{
          console.log('email or password invalid')  
      }
  
  }

  return (
    <Container >
   <center>  <Card style={{border:"1px solid blue" ,width:"40%",marginTop:"5rem"}} ><CardHeader style={{fontSize:20,fontWeight:"bold",marginBottom:"3%"}}>Sign In</CardHeader>
  <Form onSubmit={handleSubmit}>
      <Row  >
        
         <Col> <Label>Email</Label></Col>
         <Col> <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="myemail@email.com"
            onChange={(e) => setEmail(e.target.value)}
          /></Col>
      
      </Row>
      <Row>
     
        <Col>    <Label for="examplePassword">Password</Label></Col>
        <Col>     <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          /> </Col> 
       
      </Row>
      <Button type='submit' color='green' onSubmit={handleSubmit}>Submit</Button>
    </Form></Card> </center>
  </Container>
);
}


