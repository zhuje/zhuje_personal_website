import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import '../style/style.navbar.css'
import About from "./About"
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects"
import Contact from "./Contact"

export class NavBarRouting extends React.Component {
    state = {
        courses: []
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 jz_navbar_col2" >

                        </div>
                        <div className="col-12 col-lg-10 jz_navbar_col10">
                            <nav className=" navbar navbar-expand-lg navbar-light bg-light">
                                <Link className="navbar-brand jz_navBar_nudge " to="/about"> Jenny
                                    Zhu </Link>
                                <button className="navbar-toggler" type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarTogglerDemo02"
                                        aria-controls="navbarTogglerDemo02"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                        <li className="nav-item ">
                                            <Link className="nav-link jz_navBar_spacing"
                                                  to="/about"> About <span
                                                className="sr-only">(current)</span></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link jz_navBar_spacing"
                                                  to="/resume"> Resume </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link jz_navBar_spacing"
                                                  to="/projects"> Projects </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link jz_navBar_spacing"
                                                  to="/contact"> Contact </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                <Route path="/home" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/resume" exact component={Resume}/>
                <Route path="/projects" exact component={Projects}/>
                <Route path="/contact" exact component={Contact}/>


            </BrowserRouter>
        );
    }
}
