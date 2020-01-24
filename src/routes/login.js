import React, { Component } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Card, CardBody,
} from 'reactstrap';
import { Link }
    from 'react-router-dom';
import { } from "../routes/register"
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { email, value } = e.target;
        this.setState({ [email]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }
    }
    login() {


    }
    forgotPassword() {

    }


    render() {

        const { email, password, submitted } = this.state;
        return (
            <div style={{
                height: "90vh",
                display: "grid",
                placeContent: "center",
            }}> <div className="col-md-6 col-md-offset-3 border"
                style={{
                    minWidth: "50vw",

                }}
            >


                    <h2 style={{
                        color: "#ff9505",
                        fontWeight: "bold",
                        textAlign: 'center'

                    }}>Login</h2>
                    <Form name="form" onSubmit={this.handleSubmit} >
                        <FormGroup >
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" onChange={this.handleChange} />
                            {submitted && !email &&
                                <div>email is required</div>
                            }
                        </FormGroup>
                        <FormGroup >
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" onChange={this.handleChange} />
                            {submitted && !password &&
                                <div className="help-block">Password is required</div>
                            }
                        </FormGroup>
                        <FormGroup >
                            <br />
                            <Button color="success" size='sm' onClick={this.login}>
                                {' '}
                                Login</Button>
                            {this.state.forgot_password && (
                                <Link to='/register' style={{ marginLeft: 3 }} onClick={this.forgotPassword}>forget password?</Link>
                            )}
                            {/* <Button color="link" >Register</Button> */}
                            <br />
                            <Link to='/register'>Register</Link>

                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}
