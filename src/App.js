import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './routes/login'
import RegisterPage from "./routes/register"
import History from "./routes/history"
import adminDashboard from "./routes/adminDashboard"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import forgotPassword from './routes/forgotPassword';

function App() {
  return (
    <Provider store={store}>

      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/adminDashboard" component={adminDashboard} />
          <Route exact path="/History" component={History} />
          <Route exact path="/forgotPassword" component={forgotPassword} />

        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
