import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter  as Router, Route, Link } from "react-router-dom";
import Home from '../components/pages/home.jsx'
import About from '../components/pages/about.jsx'

class AppRoute extends Component {
  render(){
    return(
      <div>
        <Router >
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    )
  }
}

export default AppRoute;