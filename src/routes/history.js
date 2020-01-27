import React from "react";
import DatePicker from "react-datepicker";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

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

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
am4core.useTheme(am4themes_animated);
export default class History extends React.Component {

    state = {
        startDate: new Date(),
        expanded: false,
        isOpen: false,
        dropdownOpen: false,
        selectedOption: null,
        activeTab: 1,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });

    };
    handleChange1 = date => {
        console.log(date)
        this.setState({
            startDate: date,

        });
    };
    toggle = () => {
        this.setState((state, props) => { return { isOpen: !state.isOpen } })

    }
    toggle1 = () => {
        this.setState((state, props) => { return { dropdownOpen: !state.dropdownOpen } })

    }
    toggleTab = tab => {
        if (this.state.activeTab != tab) this.setState({ activTab: tab });
    }


    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);

        chart.paddingRight = 20;

        let data = [];
        let visits = 10;
        for (let i = 1; i < 50; i++) {
            visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
            data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits, test: visits / 2, fun: visits * 2 });
        }

        chart.data = data;

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        const temp = { value: 0, test: 0, fun: 0 }

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;


        const colorArray = ["red", "green", "black"]

        chart.cursor = new am4charts.XYCursor();

        let scrollbarX = new am4charts.XYChartScrollbar();


        Object.keys(temp).forEach((item, index) => {

            let series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.dateX = "date";
            series.dataFields.valueY = item
            series.stroke = am4core.color(colorArray[index]);
            series.fill = am4core.color(colorArray[index]);
            series.tooltipText = "{valueY.value}";
            scrollbarX.series.push(series);


        })

        chart.scrollbarX = scrollbarX;

        this.chart = chart;



        let chart1 = am4core.create("chart1div", am4charts.XYChart);

        chart1.paddingRight = 20;

        // let data1 = [];
        // let visits = 10;
        // for (let i = 1; i < 50; i++) {
        //     visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        //     data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits, test: visits / 2, fun: visits * 2 });
        // }

        chart1.data = data;

        let dateAxis1 = chart1.xAxes.push(new am4charts.DateAxis());
        dateAxis1.renderer.grid.template.location = 0;

        const temp1 = { value: 0, test: 0, fun: 0 }

        let valueAxis1 = chart1.yAxes.push(new am4charts.ValueAxis());
        valueAxis1.tooltip.disabled = true;
        valueAxis1.renderer.minWidth = 35;


        // const colorArray = ["red", "green", "black"]

        chart1.cursor = new am4charts.XYCursor();

        let scrollbarX1 = new am4charts.XYChartScrollbar();


        Object.keys(temp1).forEach((item, index) => {

            let series = chart1.series.push(new am4charts.LineSeries());
            series.dataFields.dateX = "date";
            series.dataFields.valueY = item
            // series.stroke = am4core.color(colorArray[index]);
            // series.fill = am4core.color(colorArray[index]);
            series.tooltipText = "{valueY.value}";
            scrollbarX1.series.push(series);


        })

        chart1.scrollbarX = scrollbarX1;

        this.chart1 = chart1;

    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
        if (this.chart1) {
            this.chart1.dispose();
        }
    }

    render() {
        const { selectedOption } = this.state;
        return (
            <div >

                < div >
                    <Navbar style={{ marginLeft: `${this.state.expanded ? "20vw" : "4vw"}`, backgroundColor: "#E0E0E0" }}>
                        <h1 style={{
                            color: "#7D0F0F",
                            fontWeight: "bold",

                        }}>Historical Data Dashboard</h1>
                        <NavbarToggler onClick={this.toggle} />
                    </Navbar>
                </div >



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


                <div style={{ maxHeight: "70vh", overflowY: "scroll" }}> <div style={{ marginLeft: `${this.state.expanded ? "20vw" : "8vw"}` }}>
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={["Freezer", "ColdRoom", "Oven"].map(item => ({ value: item, label: item }))}
                    />

                </div>
                    <div style={{ marginLeft: `${this.state.expanded ? "20vw" : "8vw"}` }}>
                        <TabNav tabs>
                            <NavItem>
                                <NavLink

                                    style={{ backgroundColor: `${this.state.activTab === 0 ? "green" : ""}` }}
                                    onClick={() => { this.toggleTab(0); }}  >
                                    Equipment Details
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ backgroundColor: `${this.state.activTab === 1 ? "green" : ""}` }}
                                    onClick={() => { this.toggleTab(1); }}
                                >
                                    Historical Data
          </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ backgroundColor: `${this.state.activTab === 2 ? "green" : ""}` }}

                                    onClick={() => { this.toggleTab(2); }}
                                >
                                    Graph
          </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ backgroundColor: `${this.state.activTab === 3 ? "green" : ""}` }}

                                    onClick={() => { this.toggleTab(3); }}
                                >
                                   Report
          </NavLink>
                            </NavItem>
                        </TabNav>

                    </div>


                    <br />
                    <Card style={{ marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, fontSize: '1em' }}>
                        <CardBody>   <h4 >Equipment Details:-</h4>
                            <pre> {`
                            Name : - Cold Freezer
                            Area : - 15 m
                            Select Value : - -15 degree C
                            Pressure Value : - 20 pascal`}
                            </pre></CardBody>
                    </Card>
                    <br />
                    <Card style={{ marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, fontSize: '1em' }}>
                        <CardBody> <h4 >Historical Data:-</h4><Table>
                            <Row style={{ display: "flex", maxWidth: "50vw", marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, }} >
                                <Col><p> Enter Dates</p></Col>
                                <Col style={{}} className=" text-center" >
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleChange1}
                                    />
                                </Col>
                                <div style={{ margin: "0 5px 0 0" }} className="" >  To </div>

                                <Col className=" text-center" >
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleChange1}
                                    />
                                </Col></Row>
                        </Table>
                            <Row>
                                <Col> <div id="chartdiv" style={{ width: "30%", height: "400px", marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, fontSize: '1em' }}></div></Col>
                                <Col>   <div id="chart1div" style={{ width: "30%", height: "400px", marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, fontSize: '1em' }}></div></Col>
                            </Row>

                            <Table striped >
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>1st CLMN Temp</th>
                                        <th>Wf I Temp</th>
                                        <th>Feed Temp</th>
                                        <th>Wf I Cond</th>
                                        <th>Phase Cond</th>

                                    </tr>
                                </thead>
                                <tbody>


                                    <tr >
                                        <td >HH:MM:SS</td>
                                        <td >DEG C </td>
                                        <td >DEG C</td>
                                        <td> &mu;/cm </td>
                                        <td>&mu;/cm</td>
                                        <td></td>
                                    </tr>
                                    <tr >
                                        <td >01:54:43</td>
                                        <td >546.7 </td>
                                        <td >34.8 </td>
                                        <td> 00.55 </td>
                                        <td>00.58</td>
                                        <td>STABILIZATION</td>

                                    </tr>
                                    <tr >
                                        <td >01:54:43</td>
                                        <td >546.7 </td>
                                        <td >34.8 </td>
                                        <td> 00.55 </td>
                                        <td>00.58</td>
                                        <td>STABILIZATION</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </CardBody></Card>
                    <br />
                    <Card style={{ marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, fontSize: '1em' }}>
                        <CardBody><h4 >Report:-</h4>
                            <Row>
                                <Button color="primary" size='sm' >TODAY</Button>
                                <Button color="success" size='sm' style={{ margin: "0 5vw" }}>WEEK</Button>
                                <Button color="secondary" size='sm'>MONTH</Button>
                                <Button color="info" size='sm' style={{ margin: "0 5vw" }}>QUATER</Button>
                                <Button color="warning" size='sm'>YEAR</Button>
                                <Button color="danger" size='sm' style={{ margin: "0 5vw" }}>YTD</Button>
                            </Row>
                        </CardBody>
                        <CardBody>

                            <Row style={{ display: "flex", maxWidth: "50vw", marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, }} >
                                <Col><p> Enter Dates</p></Col><Col style={{}} className=" text-center" >
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleChange1}
                                    />
                                </Col>
                                <div style={{ margin: "0 5px 0 0" }} className="" >  To </div>

                                <Col className=" text-center" >
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleChange1}
                                    />
                                </Col>
                                <Col><i className="fa fa-fw fa-download" style={{ fontSize: '1.75em' }} /></Col>
                            </Row></CardBody></Card>
                </div ></div>

        );
    }
}