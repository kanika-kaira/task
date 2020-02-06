import React, { Component } from 'react'
import {
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Card,
    CardBody,
    Alert,
    Fragment,
} from 'reactstrap';
import { User } from "../provider/index"
import { Link }
    from 'react-router-dom';
import EmailValidator from 'email-validator'
import PasswordValidator from 'password-validator'
import { } from "../routes/register"
import { userInfo } from 'os';
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false,
            emailValidation: true,
            passwordValidation: true,
            invalidPassword: false,
            forgotPassword: false,
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        console.log('ssss', this.state)
        if (e.target.value) {

            console.log('rereer', e)
            this.setState({
                email: e.target.value,
                // disabled: false
            });
            // const { email, password } = e.target;
            // this.setState({ email:email,password:password });
        }
        else {
            console.log('elelele')
        }
    }

    handleChangePassword = (e) => {
        if (e.target.value) {

            console.log('rereer', e)
            this.setState({
                password: e.target.value,
                // disabled: false
            });
            // const { email, password } = e.target;
            // this.setState({ email:email,password:password });
        }
        else {
            console.log('elelele')
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }
    }
    login = () => {
        let schema = new PasswordValidator();
        schema.
            is().min(4).
            is().max(16)
        //has().lowercase().
        // has().uppercase().
        // has().digits()
        //has().not().spaces()
        // has().symbols()
        let passwordValidation = schema.validate(this.state.password)
        let emailValidation = EmailValidator.validate(this.state.email)
        console.log('cdcddc', this.state.password, passwordValidation)
        if (passwordValidation && emailValidation) {
            let payload = {

                email: this.state.email,
                password: this.state.password
            }
            console.log(payload)

            User.login(payload)
                .then((res) => {
                    console.log("login successfull", res)
                    User.setUser(res);
                    this.props.history.push('/usermanagment')

                })
                .catch(err => {
                    console.log("login error", err.msg)
                    this.setState({ invalidPassword: true, forgotPassword: true })
                })

        }
        else {
            console.log('erererer', emailValidation, passwordValidation)
            this.setState({
                emailValidation: emailValidation,
                passwordValidation: passwordValidation,
            })
        }
    }

    componentDidMount = () => {
        if (User.getUser()) {
            this.props.history.push('/usermanagment')

        }

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
                            {(this.state.emailValidation == false) && (
                                <div>
                                    <Alert color='danger'>
                                        Invalid email!
                          </Alert>
                                </div>
                            )}
                        </FormGroup>
                        <FormGroup >
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" onChange={this.handleChangePassword} />
                            {submitted && !password &&
                                <div className="help-block">Password is required</div>
                            }
                            {(this.state.passwordValidation == false) && (
                                <div>
                                    <Alert color='danger'>
                                        Password must be atleast 8 characters with atleast 1 digit and a special character!
                          </Alert>
                                </div>
                            )}

                            {(this.state.invalidPassword == true) && (
                                <div>
                                    <Alert color='danger'>
                                        INVALID PASSWORD
                         </Alert>
                                </div>
                            )}
                        </FormGroup>
                        <FormGroup >
                            <br />
                            <Button color="success" size='sm' onClick={this.login}>
                                {' '}
                                Login</Button>
                            {this.state.forgotPassword == true && (
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
