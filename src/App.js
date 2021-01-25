import React, { useState } from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.css';
import Login from './routes/login'
import App1 from "./routes/App1"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideNav from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


function App(props) {
  const [expanded, setexpanded] = useState(false);
  function logout() {
    localStorage.clear();
    window.location.href = '/'
  }

  return (


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
               

              </SideNav.Nav>
            </SideNav>)}



            <main style={{ marginLeft: `${expanded ? "18vw" : "5vw"}` }}>
              {/* <Route exact path="/" component={Login} /> */}
              <Route exact path="/App1" component={App1} />


        
            </main>
          </React.Fragment>
        )}
        />

      </Router>
    

  );
}

export default App;
