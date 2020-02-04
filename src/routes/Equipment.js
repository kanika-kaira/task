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
export default class Equipment extends Component {
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
            <div  >
                < div >
                    <Navbar style={{ backgroundColor: "#E0E0E0" }}>
                        <h1 style={{
                            color: "#7D0F0F",
                            fontWeight: "bold",

                        }}>Equipment</h1>
                        <NavbarToggler onClick={this.toggle} />
                    </Navbar>
                </div >

                <br />
                <div >
                    <TabNav tabs>
                        <NavItem>
                            <NavLink

                                style={{ backgroundColor: `${this.state.activTab === 0 ? "green" : ""}` }}
                                onClick={() => { this.toggleTab(0); }}
                            >
                                View
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                style={{ backgroundColor: `${this.state.activTab === 1 ? "green" : ""}` }}
                                onClick={() => { this.toggleTab(1); }}
                            >
                                Create
          </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                style={{ backgroundColor: `${this.state.activTab === 2 ? "green" : ""}` }}

                                onClick={() => { this.toggleTab(2); }}
                            >
                                Sensors
          </NavLink>
                        </NavItem>

                    </TabNav>
                </div>

                <TabContent activeTab={this.state.activTab}>
                    <TabPane tabId={0}>
                        <Card >
                            <CardBody> <h4 >view</h4>

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

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr >

                                                <td>7856</td>
                                                <td>gfegfds</td>
                                                <td>fgsgdg</td>
                                                <td>fgsgdg</td>
                                                <td>hgdfhg</td>

                                                <td
                                                    // onClick={() => this.toggle()}
                                                    style={{
                                                        color: 'blue',
                                                        cursor: 'pointer', fontWeight: 'bold'
                                                    }}>
                                                    Edit
                                </td>


                                            </tr>
                                            <tr >

                                                <td>7856</td>
                                                <td>gfegfds</td>
                                                <td>fgsgdg</td>
                                                <td>fgsgdg</td>
                                                <td>hgdfhg</td>

                                                <td
                                                    // onClick={() => this.toggle()}
                                                    style={{
                                                        color: 'blue',
                                                        cursor: 'pointer', fontWeight: 'bold'
                                                    }}>
                                                    Edit
                                </td>


                                            </tr>
                                            <tr >

                                                <td>7856</td>
                                                <td>gfegfds</td>
                                                <td>fgsgdg</td>
                                                <td>fgsgdg</td>
                                                <td>hgdfhg</td>

                                                <td
                                                    // onClick={() => this.toggle()}
                                                    style={{
                                                        color: 'blue',
                                                        cursor: 'pointer', fontWeight: 'bold'
                                                    }}>
                                                    Edit
                                </td>


                                            </tr>
                                            <tr >

                                                <td>7856</td>
                                                <td>gfegfds</td>
                                                <td>fgsgdg</td>
                                                <td>fgsgdg</td>
                                                <td>hgdfhg</td>

                                                <td
                                                    // onClick={() => this.toggle()}
                                                    style={{
                                                        color: 'blue',
                                                        cursor: 'pointer', fontWeight: 'bold'
                                                    }}>
                                                    Edit
                                </td>


                                            </tr>




                                        </tbody>
                                    </Table>

                                </div>

                            </CardBody>
                        </Card>

                    </TabPane>

                    <br />
                    <TabPane tabId={1}>
                        <Card >
                            <CardBody> <h4 >Add New Equipment:-</h4>

                                <Row>
                                    <Col lg="6">
                                        <Label >Equipment Name</Label>
                                    </Col>
                                    <Col lg="6">
                                        <Label >Brand</Label>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg="6">

                                        <Input name="equipmentname" placeholder="equipment name" />
                                    </Col>
                                    <Col lg="6">
                                        <Input name="brand" placeholder="brand name" />

                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col lg="6">
                                        <Label >Area Name</Label>
                                    </Col>
                                    <Col lg="6">
                                        <Label >Model</Label>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg="6">

                                        <Input name="areaname" placeholder="area name" />
                                    </Col>
                                    <Col lg="6">
                                        <Input name="model" placeholder="model" />

                                    </Col>
                                </Row>
                                <br />
                                <br />
                                <div className="text-center" style={{ width: '100%' }}>
                                    <Button color="dark" size='sm' >Submit</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </TabPane>
                    <TabPane tabId={2}>
                        <Card >
                            <CardBody><Row> <Col lg="6"><h4 >Sensors:-</h4></Col>
                                <Col lg="6"><Button color="primary" size='sm' onClick={this.toggleModal}>Add Sensor</Button>
                                </Col> </Row>

                                <div>

                                    <Table striped >
                                        <thead>

                                            <tr>
                                                <th>Equipment Name</th>
                                                <th>Brand</th>
                                                <th>Area Name</th>
                                                <th>Model</th>
                                                <th>Edit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr >


                                                <td>gfegfds</td>
                                                <td>fgsgdg</td>
                                                <td>fgsgdg</td>
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
                                                <CardBody> <h4 >Add New Equipment:-</h4>

                                                    <Row>
                                                        <Col lg="6">
                                                            <Label >Equipment:-</Label>
                                                        </Col>
                                                        <Col lg="6">
                                                            <Label >Type</Label>
                                                        </Col>
                                                    </Row>

                                                    <Row>
                                                        <Col lg="6">
                                                            <Select
                                                                value={selectedOption}
                                                                onChange={this.handleChange}
                                                                options={["Freezer", "ColdRoom", "Oven"].map(item => ({ value: item, label: item }))}
                                                            />

                                                        </Col>
                                                        <Col lg="6">
                                                            <Select
                                                                value={selectedOption}
                                                                onChange={this.handleChange}
                                                                options={["Freezer", "ColdRoom", "Oven"].map(item => ({ value: item, label: item }))}
                                                            />

                                                        </Col>
                                                    </Row>
                                                    <br />
                                                    <Row>
                                                        <Col lg="6">
                                                            <Label >Set Value</Label>
                                                        </Col>
                                                        <Col lg="6">
                                                            <Label >Location</Label>
                                                        </Col>
                                                    </Row>

                                                    <Row>
                                                        <Col lg="6">

                                                            <Input name="Setvalue" placeholder="Set Value" />
                                                        </Col>
                                                        <Col lg="6">
                                                            <Input name="brLocationand" placeholder="Location" />

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

                            </CardBody></Card>
                    </TabPane>
                </TabContent>
            </div >
        );

    }
}
