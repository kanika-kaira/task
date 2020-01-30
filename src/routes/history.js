import React from "react";
import DatePicker from "react-datepicker";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';
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

const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const fileExtension = '.xlsx';
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
am4core.useTheme(am4themes_animated);
export default class History extends React.Component {

    state = {
        startDate: new Date(),
        expanded: false,
        startDate2: new Date(),
        isOpen: false,
        dropdownOpen: false,
        selectedOption: null,
        activTab: 0,
        custs: [],
        maxdata: 90,

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
    // download = () => {
    //     html2canvas(document.getElementById("chart4")).then(function (canvas) {
    //         document.body.appendChild(canvas);
    //         console.log(canvas)
    //     });

    // }

    exportToCSV = (csvData, fileName) => {
        let temp = [];
        const NOS = Math.ceil(csvData.length / this.state.maxdata)

        for (let i = 0; i < NOS; i++) {
            temp.push(csvData.slice(this.state.maxdata * i, this.state.maxdata * (i + 1)))
        }


        let temp1 = []
        let temp2 = {}
        temp.forEach((item, index) => {
            let ws = XLSX.utils.json_to_sheet(item)
            let sheetName = `data${index == 0 ? "" : index}`
            temp1.push(sheetName)
            temp2 = { ...temp2, [sheetName]: ws }
        })
        const wb = { Sheets: temp2, SheetNames: temp1 };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);



    }







    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        // let chart4 = am4core.create("chart4", am4charts.XYChart);
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


        chart1.data = data;

        let dateAxis1 = chart1.xAxes.push(new am4charts.DateAxis());
        dateAxis1.renderer.grid.template.location = 0;

        const temp1 = { value: 0, test: 0, fun: 0 }

        let valueAxis1 = chart1.yAxes.push(new am4charts.ValueAxis());
        valueAxis1.tooltip.disabled = true;
        valueAxis1.renderer.minWidth = 35;

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



        let chart2 = am4core.create("chart2div", am4charts.XYChart);

        chart2.paddingRight = 20;


        chart2.data = data;

        let dateAxis2 = chart2.xAxes.push(new am4charts.DateAxis());
        dateAxis2.renderer.grid.template.location = 0;

        const temp2 = { value: 0, test: 0, fun: 0 }

        let valueAxis2 = chart2.yAxes.push(new am4charts.ValueAxis());
        valueAxis2.tooltip.disabled = true;
        valueAxis2.renderer.minWidth = 35;
        const colorArray2 = ["black", "purple", "magenta"]
        chart2.cursor = new am4charts.XYCursor();

        let scrollbarX2 = new am4charts.XYChartScrollbar();


        Object.keys(temp2).forEach((item, index) => {

            let series = chart2.series.push(new am4charts.LineSeries());
            series.dataFields.dateX = "date";
            series.dataFields.valueY = item
            series.stroke = am4core.color(colorArray2[index]);
            series.fill = am4core.color(colorArray2[index]);
            series.tooltipText = "{valueY.value}";
            scrollbarX2.series.push(series);


        })

        chart2.scrollbarX = scrollbarX2;

        this.chart2 = chart2;


        let custs = []
        for (let i = 0; i <= 1000; i++) {
            custs.push({
                firstName: `first${i}`, lastName: `last${i}`,
                email: `abc${i}@gmail.com`, address: `000${i} street city, ST`, zipcode: `0000${i}`
            });
        }
        this.setState({
            custs: custs
        })
        chart.exporting.menu = new am4core.ExportMenu();
        chart.exporting.filePrefix = "chart";
        chart1.exporting.menu = new am4core.ExportMenu("abc");
        chart1.exporting.filePrefix = "chart1";
        chart2.exporting.menu = new am4core.ExportMenu("abc");
        chart2.exporting.filePrefix = "chart2";
      

    }


    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
        if (this.chart1) {
            this.chart1.dispose();
        }
        if (this.chart2) {
            this.chart2.dispose();
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


                <div style={{ maxHeight: "80vh", overflowY: "scroll" }}> <div style={{ marginLeft: `${this.state.expanded ? "20vw" : "8vw"}` }}>
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
                                    onClick={() => { this.toggleTab(0); }}
                                >
                                    Live Data
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ backgroundColor: `${this.state.activTab === 1 ? "green" : ""}` }}
                                    onClick={() => { this.toggleTab(1); }}
                                >
                                    Graph
          </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ backgroundColor: `${this.state.activTab === 2 ? "green" : ""}` }}

                                    onClick={() => { this.toggleTab(2); }}
                                >
                                    History
          </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ backgroundColor: `${this.state.activTab === 3 ? "green" : ""}` }}

                                    onClick={() => { this.toggleTab(3); }}
                                >
                                    Reports
          </NavLink>
                            </NavItem>
                        </TabNav>


                    </div>
                    <TabContent activeTab={this.state.activTab}>
                        <TabPane tabId={0}>


                            <br />
                            <Card style={{ marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, fontSize: '1em' }}>
                                <CardBody>   <h4 >Equipment Details:-</h4>
                                    <pre> {`
                            Name : - Cold Freezer
                            Area : - 15 m
                            Select Value : - -15 degree C
                            Pressure Value : - 20 pascal`}
                                    </pre>
                                    <br />
                                    <Table striped >
                                        <thead>
                                            <tr>
                                                <th>S.No.</th>
                                                <th>Type</th>
                                                <th>Zone</th>
                                                <th>Set Value</th>
                                                <th>Process Value</th>

                                            </tr>
                                        </thead>
                                        <tbody>


                                            <tr >
                                                <td >0</td>
                                                <td >Temperature</td>
                                                <td >Top</td>
                                                <td> 34</td>
                                                <td>32</td>

                                            </tr>
                                            <tr >
                                                <td >1</td>
                                                <td >Temperature</td>
                                                <td >Bottom </td>
                                                <td>34</td>
                                                <td>36</td>


                                            </tr>
                                            <tr >
                                                <td >2</td>
                                                <td >Temperature</td>
                                                <td >Top Left</td>
                                                <td> 1 Bar</td>
                                                <td>1.1 Bar</td>

                                            </tr>
                                            <tr >
                                                <td >3</td>
                                                <td >Pressure</td>
                                                <td >Top Left</td>
                                                <td> 2.55 </td>
                                                <td>1.2 Bar</td>

                                            </tr>
                                            <tr >
                                                <td >4</td>
                                                <td >Pressure</td>
                                                <td >Top Right</td>
                                                <td> 1.55 </td>
                                                <td>34</td>

                                            </tr>
                                            <tr >
                                                <td >5</td>
                                                <td >Pressure</td>
                                                <td >Top</td>
                                                <td>1 Bar </td>
                                                <td>0.78 Bar</td>

                                            </tr>
                                            <tr >
                                                <td >6</td>
                                                <td >Middle</td>
                                                <td >55%</td>
                                                <td> 00.55 </td>
                                                <td>60%</td>

                                            </tr>

                                        </tbody>
                                    </Table>


                                </CardBody>
                            </Card>
                        </TabPane>

                        <br />
                        <TabPane tabId={1}>
                            <Card style={{ marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, fontSize: '1em' }}>
                                <CardBody> <h4 >Historical Data:-</h4>
                                    <Row >
                                        <Col lg="2">Enter Dates</Col>
                                        <Col lg="4">
                                            <DatePicker
                                                selected={this.state.startDate}
                                                onChange={this.handleChange1}
                                                showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={15}
                                                timeCaption="time"
                                                dateFormat="MMMM d, yyyy h:mm aa"
                                            />
                                        </Col>
                                        <Col lg="2" >  To </Col>

                                        <Col lg="4" >
                                            <DatePicker
                                                selected={this.state.startDate2}
                                                onChange={this.handleChange2}
                                                showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={15}
                                                timeCaption="time"
                                                dateFormat="MMMM d, yyyy h:mm aa"
                                            />
                                        </Col></Row>





                                    <Row>
                                        {/* <Button color="danger" size='sm' onClick={() => { this.download() }} style={{ margin: "0 5vw" }}>ss</Button> */}

                                        {/* <div id="chart4" style={{ width: "80%", height: "400px", marginLeft: `${this.state.expanded ? "20vw" : "8vw"}` }} > */}

                                        <div id="chartdiv" style={{ width: "80%", height: "400px", marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, fontSize: '1em' }}></div>
                                        <div id="chart1div" style={{ width: "80%", height: "400px", marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, fontSize: '1em' }}></div>
                                        <div id="chart2div" style={{ width: "80%", height: "400px", marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, fontSize: '1em' }}></div>

                                        {/* </div> */}
                                    </Row>
                                </CardBody>
                            </Card>
                        </TabPane>
                        <TabPane tabId={2}>
                            <Card style={{ marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, fontSize: '1em' }}>

                                <CardBody> <h4 >Data:-</h4>

                                    <Row >
                                        <Col lg="2">Enter Dates</Col>
                                        <Col lg="4">
                                            <DatePicker
                                                selected={this.state.startDate}
                                                onChange={this.handleChange1}
                                                showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={15}
                                                timeCaption="time"
                                                dateFormat="MMMM d, yyyy h:mm aa"
                                            />
                                        </Col>
                                        <Col lg="2" >  To </Col>

                                        <Col lg="4" >
                                            <DatePicker
                                                selected={this.state.startDate2}
                                                onChange={this.handleChange2}
                                                showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={15}
                                                timeCaption="time"
                                                dateFormat="MMMM d, yyyy h:mm aa"
                                            />
                                        </Col></Row>
                                    <br />
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
                        </TabPane>
                        <br />
                        <TabPane tabId={3}>
                            <Card style={{ marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, fontSize: '1em' }}>
                                <CardBody><h4 >Report:-</h4>
                                    <Row>
                                        <Button color="primary" size='sm' onClick={(e) => this.exportToCSV(this.state.custs, "file.xlsx")} >TODAY</Button>
                                        <Button color="success" size='sm' onClick={(e) => this.exportToCSV(this.state.custs, "file.xlsx")} style={{ margin: "0 5vw" }}>WEEK</Button>
                                        <Button color="secondary" size='sm' onClick={(e) => this.exportToCSV(this.state.custs, "file.xlsx")}>MONTH</Button>
                                        <Button color="info" size='sm' onClick={(e) => this.exportToCSV(this.state.custs, "file.xlsx")} style={{ margin: "0 5vw" }}>QUATER</Button>
                                        <Button color="warning" size='sm' onClick={(e) => this.exportToCSV(this.state.custs, "file.xlsx")}>YEAR</Button>
                                        <Button color="danger" size='sm' onClick={(e) => this.exportToCSV(this.state.custs, "file.xlsx")} style={{ margin: "0 5vw" }}>YTD</Button>
                                    </Row>



                                    <Row style={{ display: "flex", alignItems: "center", marginTop: "10vh", marginLeft: `${this.state.expanded ? "20vw" : "8vw"}`, }} >
                                        <Col lg="2">Enter Dates</Col>
                                        <Col lg="4">
                                            <DatePicker
                                                selected={this.state.startDate}
                                                onChange={this.handleChange1}
                                                showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={15}
                                                timeCaption="time"
                                                dateFormat="MMMM d, yyyy h:mm aa"
                                            />
                                        </Col>
                                        <Col lg="1"> To </Col>

                                        <Col lg="4" >
                                            <DatePicker
                                                selected={this.state.startDate2}
                                                onChange={this.handleChange2}
                                                showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={15}
                                                timeCaption="time"
                                                dateFormat="MMMM d, yyyy h:mm aa"
                                            />
                                        </Col>
                                        <Col lg="1">
                                            <i className="fa fa-fw fa-download" style={{ fontSize: '1.75em' }} />
                                        </Col>
                                    </Row></CardBody></Card>
                        </TabPane>
                    </TabContent>
                </div ></div >


        );
    }
}