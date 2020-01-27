import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Card, CardBody,
} from 'reactstrap';
export default class adminDashboard extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <SideNav
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
        );
    }
}
