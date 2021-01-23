import React  from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.css';

import App2 from "./routes/App2"

import { BrowserRouter as Router, Route, } from 'react-router-dom';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


function App(props) {
  

  return (


      <Router>

         <Route exact path="/" component={App2} />


        

      </Router>
    

  );
}

export default App;
