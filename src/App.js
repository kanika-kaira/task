import React, { useState } from 'react';
import logo from './logo.svg';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './routes/login'
import RegisterPage from "./routes/register"
import History from "./routes/history"
import Equipment from "./routes/Equipment"
import area from "./routes/area"
import usermanagment from "./routes/usermanagment"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button, Link } from 'reactstrap';
import forgotPassword from './routes/forgotPassword';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Select from 'react-select';


function App(props) {
  const [expanded, setexpanded] = useState(false);
  function logout() {
    localStorage.clear();
    window.location.href = '/'
  }

  return (
    <Provider store={store}>


      <Router>

        <Route render={({ location, history }) => (
          <React.Fragment>
            {(location.pathname != '/') && (<SideNav

              onSelect={(selected) => {
                const to = '/' + selected;
                if (location.pathname !== to) {
                  setexpanded(false)
                  history.push({ pathname: to, state: { expanded: expanded } });
                }
              }}
              expanded={expanded}
              onToggle={(expanded) => {
                setexpanded(expanded);
                console.log(expanded)
              }}
            // onSelect={(selected) => {
            //   // Add your code here
            // }}

            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="UserManagement">
                <NavItem eventKey="usermanagment">
                  <NavIcon>

                    <i className="fa fa-fw fa-user-plus" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                    User Management
            </NavText>

                </NavItem>


                <NavItem eventKey="Equipment" >
                  <NavIcon>
                    <i className="fa fa-fw fa-wrench" style={{ fontSize: '1.75em' }} />
                  </NavIcon>


                  <NavText>
                    Equipment
                            </NavText>

                </NavItem>

                <NavItem eventKey="area">
                  <NavIcon>
                    <i on className="fa fa-fw fa-adn" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                    Area
            </NavText>
                </NavItem>
                <NavItem eventKey="History">
                  <NavIcon>
                    <i className="fa fa-fw fa-history" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                    Historical Data Dashboard
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
                <Button color="link" onClick={logout}>logout</Button>

              </SideNav.Nav>
            </SideNav>)}



            <main style={{ marginLeft: `${expanded ? "18vw" : "5vw"}` }}>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/Equipment" component={Equipment} />
              <Route exact path="/History" component={History} />
              <Route exact path="/usermanagment" component={usermanagment} />
              <Route exact path="/area" component={area} />
              <Route exact path="/forgotPassword" component={forgotPassword} />
            </main>
          </React.Fragment>
        )}
        />

      </Router>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/Equipment" component={Equipment} />
          <Route exact path="/History" component={History} /
          <Route exact path="/forgotPassword" component={forgotPassword} />

        </Switch>
      </Router> */}
    </Provider>

  );
}

export default App;
