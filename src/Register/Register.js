import React, { Component, state, registerUser, cancelCourse } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import swal from 'sweetalert'
import RegisterWrapper from "./Style"

class Register extends Component {
  state = {
    fullname: "",
    username: "",
    email: "",
    password: "",
  };

  registerUser = (e) => {
    e.preventDefault();
    const userdata = {
      fullname: this.state.fullname,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post("http://localhost:88/user/register", userdata)
      .then((response) => {
        if(response.data.success == true)
        {
          window.location.href = "/login";
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
      .catch();
  };
  render() {
    return (
      <RegisterWrapper>
      <React.Fragment>
        <Container>
          <Row>
            <Col></Col>
            <Col className="colls" style={{border: "groove", backgroundColor: "whitesmoke"}}>
              <Form style={{marginTop: 30}}>
                <Form.Group controlId="formBasicFullname">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.fullname}
                    onChange={(event) => {
                      this.setState({ fullname: event.target.value });
                    }}
                    placeholder="Enter Fullname"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    value={this.state.email}
                    onChange={(event) => {
                      this.setState({ email: event.target.value });
                    }}
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

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
                style={{marginLeft:130, marginTop: 15, marginBottom: 10}}
                  variant="primary"
                  onClick={this.registerUser}
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
      </RegisterWrapper>
    );
  }
}

export default Register;
