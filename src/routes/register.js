import React, { Component } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Card, CardBody,
} from 'reactstrap';
import { Link }
    from 'react-router-dom';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                submitted: false
            },

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {

        const { user, submitted } = this.state;
        return (
            <div style={{
                height: "90vh",
                display: "grid",
                placeContent: "center",
            }}>
                <div className="col-md-6 col-md-offset-3" style={{
                    minWidth: "50vw",
                }}>
                    <h2>Register</h2>
                    <Form name="form" onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                            {submitted && !user.firstName &&
                                <div className="help-block">First Name is required</div>
                            }
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                            {submitted && !user.lastName &&
                                <div className="help-block">Last Name is required</div>
                            }
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                            {submitted && !user.username &&
                                <div className="help-block">Username is required</div>
                            }
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                            {submitted && !user.password &&
                                <div className="help-block">Password is required</div>
                            }
                        </FormGroup>
                        <div >
                            <Button color="primary">Register</Button>

                        </div>
                    </Form>
                </div></div>
        );
    }
}
