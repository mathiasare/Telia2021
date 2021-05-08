import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from '../views/HomePage'
import AdminPage from '../views/AdminPage'
import '../css/navbar.css'
class NavBar extends Component {

    render() { 
        return ( 
<Router>
      <div>
        <nav>
            <div className = "navBar">

              <Link to="/" className="navLink">Home</Link>


              <Link to="/admin" className="navLink">Admin</Link>
          </div>
        </nav>
        <Switch>
          
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
        );
    }

    
}
 
export default NavBar;