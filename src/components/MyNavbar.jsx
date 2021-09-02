import { Navbar, Nav } from 'react-bootstrap'
import Registration from './Registration';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from '../App';

const MyNavbar = (props) => {

    return (


        <Router>
            <div>

                <Navbar collapseOnSelect expand="lg" bg={props.color} variant={props.color}>
                    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/home">Home</Link>
                            <Link to="/registration">Registration</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Switch>
                    <Route path="/home">
                        <App />
                    </Route>
                    <Route path="/registration">
                        <Registration />
                    </Route>
                </Switch>

            </div>
        </Router>


    )
}

export default MyNavbar