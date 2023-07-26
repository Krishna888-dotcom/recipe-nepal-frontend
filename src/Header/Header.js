import React, { Component, state, toggleCollapse, logout } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBRow,
} from "mdbreact";
import * as Icon from "react-bootstrap-icons";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import HeaderWrapper from "./Style";

class Header extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  logout = () => {
    console.log("clicked");
    localStorage.clear();
    window.location.href = "/";
  };

  render() {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("usertype") == "Admin"
    ) {
      var menu = (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home" id="navbar">
            Recipe नेपाल
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-auto">
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
              <NavLink to="/Cuisines" activeClassName="active">
                Cuisines
              </NavLink>
              <NavLink to="/Ingredients" activeClassName="active">
                Ingredients
              </NavLink>
              <NavLink to="/Admin" activeClassName="active">
                Dashboard
              </NavLink>
            </Nav>

            <Nav className="ml-auto">
              <div style={{ paddingTop: "10px" }}>
                <Icon.PersonSquare size={25} />
              </div>
              <NavDropdown
                style={{ fontWeight: "bold", width: "120px" }}
                title={localStorage.getItem("usertype")}
                id="basic-nav-dropdown"
              >
                <Button
                  onClick={this.logout}
                  style={{
                    fontWeight: "bold",
                    width: "100px",
                    height: "40px",
                    marginLeft: "10px",
                  }}
                  variant="danger"
                >
                  Log Out
                </Button>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    } else if (localStorage.getItem("token")) {
      var menu = (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home" id="navbar">
            Recipe नेपाल
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-auto">
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
              <NavLink to="/Cuisines" activeClassName="active">
                Cuisines
              </NavLink>
              <NavLink to="/ingredients" activeClassName="active">
                Ingredients
              </NavLink>
              <NavLink to="/myrecipe" activeClassName="active">
                MyRecipe
              </NavLink>
              <NavLink to="/saved" activeClassName="active">
                Saved
              </NavLink>
            </Nav>

            <Nav className="ml-auto">
              <div style={{ paddingTop: "10px" }}>
                <Icon.PersonSquare size={25} />
              </div>
              <NavDropdown
                style={{ fontWeight: "bold", width: "150px"}}
                title={localStorage.getItem("username")}
                id="basic-nav-dropdown"
              >
                <Button
                  onClick={this.logout}
                  style={{
                    fontWeight: "bold",
                    width: "100px",
                    height: "40px",
                    marginLeft: "20px",
                  }}
                  variant="danger"
                >
                  Log Out
                </Button>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    } else {
      var menu = (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home" id="navbar">
            Recipe नेपाल
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-auto">
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
              <NavLink to="/Cuisines" activeClassName="active">
                Cuisines
              </NavLink>
              <NavLink to="/ingredients" activeClassName="active">
                Ingredients
              </NavLink>
            </Nav>

            <Nav className="ml-auto">
              <NavLink to="/login" id="login" activeClassName="active" exact>
                Login
              </NavLink>
              <h2>/</h2>
              <NavLink
                to="/Register"
                id="register"
                activeClassName="active"
                exact
              >
                Register
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
    return (
      <>
        <HeaderWrapper>
          <div>{menu})</div>
        </HeaderWrapper>
        
      </>
    );
  }
}

export default Header;
