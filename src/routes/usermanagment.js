import React from "react";
import DatePicker from "react-datepicker";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Select from 'react-select';
import {
    TabPane,
    Container,
    Modal,
    ModalBody,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Dropdown,
    Card,
    CardBody,
    Table,
    Row,
    Nav as TabNav,
    TabContent,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,

} from 'reactstrap';
export default class usermanagment extends Component {
    state = {
        startDate: new Date(),
        expanded: false,
        startDate2: new Date(),
        dropdownOpen: false,
        selectedOption: null,
        activTab: 0,
        isOpen: false,
        modalType: ""

    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });

    };
    handleChange1 = date => {
        console.log(date)
        this.setState({
            startDate: date,

        });
    };

    handleChange2 = date => {
        console.log(date)
        this.setState({
            startDate2: date,

        });
    };

    toggle = () => {
        this.setState((state, props) => { return { isOpen: !state.isOpen } })

    }
    toggle1 = () => {
        this.setState((state, props) => { return { dropdownOpen: !state.dropdownOpen } })

    }
    toggleTab = tab => {
        if (this.state.activTab != tab) this.setState({ activTab: tab });
    }
    modalSubmit = (type) => {
        if (this.state.modalType === "add") {

        }
        else {

        }
    }
    toggleModal = (type, ) => {

        this.setState({
            isOpen: !this.state.isOpen,
            modalType: type,



        });
    };
    submit = () => {
        confirmAlert({
            title: 'Yes to remove',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => alert('Click Yes')
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        })
    };


    render() {
        const { selectedOption } = this.state;
        return (
            <div>
                < div >
                    <Navbar style={{ backgroundColor: "#E0E0E0" }}>
                        <h1 style={{
                            color: "#7D0F0F",
                            fontWeight: "bold",

                        }}>User Managment</h1>
                        <NavbarToggler onClick={this.toggle} />
                    </Navbar>
                </div >


                <br />

                <Card >
                    <CardBody>
                        <Row> <Col lg="6"><h4 >User:-</h4></Col>
                            <Col lg="6"><Button color="primary" size='sm' onClick={this.toggleModal}>Add User</Button>
                            </Col> </Row>

                        <div>

                            <Table striped >
                                <thead>

                                    <tr>
                                        <th>Area</th>
                                        <th>Brand</th>
                                        <th>Name</th>
                                        <th>Model</th>
                                        <th>No. of Sensors</th>
                                        <th>Edit</th>
                                        <th>Remove</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >


                                        <td>gfegfds</td>
                                        <td>fgsgdg</td>
                                        <td>fgsgdg</td>
                                        <td>hgdfhg</td>
                                        <td>hgdfhg</td>

                                        <td
                                            onClick={() => this.toggleModal('edit')}
                                            style={{
                                                color: 'blue',
                                                cursor: 'pointer', fontWeight: 'bold'
                                            }}>
                                            Edit
                               </td>
                                        <td
                                            onClick={this.submit}
                                            style={{
                                                color: 'blue',
                                                cursor: 'pointer', fontWeight: 'bold'
                                            }}>
                                            Remove
                               </td>


                                    </tr>
                                    <tr >


                                        <td>gfegfds</td>
                                        <td>fgsgdg</td>
                                        <td>fgsgdg</td>
                                        <td>hgdfhg</td>
                                        <td>hgdfhg</td>

                                        <td
                                            onClick={this.toggleModal}
                                            style={{
                                                color: 'blue',
                                                cursor: 'pointer', fontWeight: 'bold'
                                            }}>
                                            Edit
                               </td>

                                        < td
                                            onClick={this.submit}
                                            style={{
                                                color: 'blue',
                                                cursor: 'pointer', fontWeight: 'bold'
                                            }}>
                                            Remove
                               </td>
                                    </tr>
                                    <tr >


                                        <td>gfegfds</td>
                                        <td>fgsgdg</td>
                                        <td>fgsgdg</td>
                                        <td>hgdfhg</td>
                                        <td>hgdfhg</td>

                                        <td
                                            onClick={this.toggleModal}
                                            style={{
                                                color: 'blue',
                                                cursor: 'pointer', fontWeight: 'bold'
                                            }}>
                                            Edit
                               </td>
                                        < td
                                            onClick={this.submit}
                                            style={{
                                                color: 'blue',
                                                cursor: 'pointer', fontWeight: 'bold'
                                            }}>
                                            Remove
                               </td>

                                    </tr>
                                    <tr >


                                        <td>gfegfds</td>
                                        <td>fgsgdg</td>
                                        <td>fgsgdg</td>
                                        <td>hgdfhg</td>
                                        <td>hgdfhg</td>

                                        <td
                                            onClick={this.toggleModal}
                                            style={{
                                                color: 'blue',
                                                cursor: 'pointer', fontWeight: 'bold'
                                            }}>
                                            Edit
                                                     </td>
                                        < td
                                            onClick={this.submit}
                                            style={{
                                                color: 'blue',
                                                cursor: 'pointer', fontWeight: 'bold'
                                            }}>
                                            Remove
                               </td>

                                    </tr>


                                </tbody>
                            </Table>

                        </div>
                        <Modal isOpen={this.state.isOpen} style={{ marginTop: '15em' }} size='lg'
                            toggle={this.toggleModal}>
                            <ModalBody >
                                <Card style={{ fontSize: '1em' }}>
                                    <CardBody> <h4 >Are You Sure:-</h4>
                                        {/* <Col lg="6"><Button color="primary" size='sm' >Yes</Button></Col>

                                               <Col lg="6"><Button color="primary" size='sm' >No</Button></Col> */}
                                        <div className="container">
                                            <button onClick={this.submit}>Confirm dialog</button>
                                        </div>

                                    </CardBody>
                                </Card>


                            </ModalBody>
                        </Modal>


                        <Modal isOpen={this.state.isOpen} style={{ marginTop: '15em' }} size='lg'
                            toggle={this.toggleModal}>
                            <ModalBody >
                                <div style={{}} className="text-center">

                                    <Card style={{ fontSize: '1em' }}>
                                        <CardBody> <h4 >Add User:-</h4>

                                            <Row>
                                                <Col lg="6">
                                                    <Label >Name:-</Label>
                                                </Col>
                                                <Col lg="6">
                                                    <Label >User</Label>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col lg="6">

                                                    <Input name="Name" placeholder="Name" />
                                                </Col>
                                                <Col lg="6">
                                                    <Input name="Name" placeholder="Name" />

                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col lg="6">
                                                    <Label >Email</Label>
                                                </Col>
                                                <Col lg="6">
                                                    <Label >Password</Label>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col lg="6">

                                                    <Input name="Email" placeholder="Email" />
                                                </Col>
                                                <Col lg="6">
                                                    <Input name="Password" placeholder="Password" />

                                                </Col></Row>
                                            <br />
                                            <Row>
                                                <Col lg="6">
                                                    <Label >Mobile</Label>
                                                </Col>
                                                <Col lg="6">
                                                    <Label >Type</Label>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col lg="6">

                                                    <Input name="Mobile" placeholder="Mobile" />
                                                </Col>


                                                <Col lg="6">
                                                    <Select
                                                        value={selectedOption}
                                                        onChange={this.handleChange}
                                                        options={["Admin", "Manager", "Operator", "Other"].map(item => ({ value: item, label: item }))}
                                                    />

                                                </Col>
                                            </Row>
                                            <br />
                                            <br />
                                            <div className="text-center" style={{ width: '100%' }}>
                                                <Button color="dark" size='sm' onClick={this.modalSubmit}> Submit </Button>
                                            </div>
                                        </CardBody>
                                    </Card>


                                </div>

                            </ModalBody>
                        </Modal>

                    </CardBody>
                </Card>

            </div>



        );

    }
}