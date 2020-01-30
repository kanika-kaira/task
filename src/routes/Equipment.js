import React from "react";
import DatePicker from "react-datepicker";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Component } from 'react'
import {
    TabPane,
    Container,
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
        isOpen: false,
        dropdownOpen: false,
        selectedOption: null,
        activTab: 0,

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

    render() {
        return (
            <div>
                <SideNav
                    expanded={this.state.expanded}
                    onToggle={(expanded) => {
                        this.setState({ expanded });
                        console.log(expanded)
                    }}
                    onSelect={(selected) => {
                        // Add your code here
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="User Management">
                        <NavItem eventKey="User Management">
                            <NavIcon>

                                <i className="fa fa-fw fa-user-plus" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                User Management
            </NavText>
                        </NavItem>

                        <NavItem eventKey="Equipment Configuration">
                            <NavIcon>
                                <i className="fa fa-fw fa-wrench" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Equipment Configuration
            </NavText>
                        </NavItem>
                        <NavItem eventKey="Live Data Dashboard">
                            <NavIcon>
                                <i className="fa fa-fw fa-database" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Live Data Dashboard
            </NavText>
                        </NavItem>
                        <NavItem eventKey="Historical Data Dashboard">
                            <NavIcon>
                                <i className="fa fa-fw fa-history" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Historical Data Dashboard
            </NavText>
                        </NavItem>
                        <NavItem eventKey="Report">
                            <NavIcon>
                                <i className="fa fa-fw fa-file" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Report
            </NavText>
                        </NavItem>
                        <NavItem eventKey="Analytics">
                            <NavIcon>
                                <i className="fa fa-fw fa-hourglass" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Analytics
            </NavText>
                        </NavItem>
                        <NavItem eventKey="Communication Configurations">
                            <NavIcon>
                                <i className="fa fa-fw fa-mobile" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Communication Configurations
            </NavText>
                        </NavItem>
                        <NavItem eventKey="Alarm Configuration">
                            <NavIcon>
                                <i className="fa fa-fw fa-clock" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Alarm Configuration
            </NavText>
                        </NavItem>

                    </SideNav.Nav>
                </SideNav>
                <br />
                <div style={{ marginLeft: `${this.state.expanded ? "20vw" : "8vw"}` }}>
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
                        <Card style={{ marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, fontSize: '1em' }}>
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
                        <Card style={{ marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, fontSize: '1em' }}>
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
                        <Card style={{ marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, fontSize: '1em' }}>

                            <CardBody> <h4 >Sensors:-</h4>

                            </CardBody></Card>
                    </TabPane>
                </TabContent>
            </div >
        );

    }
}
