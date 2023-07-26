import { extend } from "jquery";
import React, { Component, state, loginUser } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import swal from 'sweetalert'
import LoginWrapper from "./Style"

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  loginUser = (e) => {
    e.preventDefault();
    const logindata = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post("http://localhost:88/user/login", logindata)
      .then((response) => {
        if(response.data.success == true)
        {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", logindata.username);
          localStorage.setItem("usertype", response.data.usertype);
          localStorage.setItem("userId", response.data._id);
  
          window.location.href = "/";
        }

        else
        {
          swal({
            "title":"Error",
            "text":response.data.message,
            "icon":"error"
          })
        }
       
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <LoginWrapper>
      <React.Fragment>
        <Container>
          <Row>
            <Col></Col>
            <Col className="colls" style={{border: "groove", height: "300px", backgroundColor: "whitesmoke"}}>
              <Form style={{marginTop: 30}}>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.username}
                    onChange={(event) => {
                      this.setState({ username: event.target.value });
                    }}
                    placeholder="Enter Username"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={this.state.password}
                    onChange={(event) => {
                      this.setState({ password: event.target.value });
                    }}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button
                style={{marginLeft:130, marginTop: 15}}
                  variant="primary"
                  onClick={this.loginUser}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </React.Fragment>
      </LoginWrapper>
    );
  }
}

export default Login;
