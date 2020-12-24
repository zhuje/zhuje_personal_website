import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import '../style/style.navbar.css'
import About from "./About"
import Home from "./Home";
import Resume from "./Resume";

export class NavBarRouting extends React.Component {
  state = {
    courses: []
  }
  render() {
    return (
      <BrowserRouter>


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand jz_navBar_nudge " to="/home"> Jenny Zhu </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                  aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item ">
                <Link className="nav-link jz_navBar_spacing" to="/about"> About <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link jz_navBar_spacing" to="/resume"> Resume </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link jz_navBar_spacing" href="#"> Projects </a>
              </li>
            </ul>
          </div>
        </nav>

        <Route path="/home" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/resume" exact component={Resume}/>


      </BrowserRouter>
    );
  }
}
