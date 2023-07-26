import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  Container,
  Col,
} from "react-bootstrap";
import FooterWrapper from "./Style"
import * as Icon from "react-bootstrap-icons";

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
      <div id="footer">
       
          <Row>
            <Col lg="2">
            
            </Col>
            <Col lg="8">
              <div>
                <h2>Recipe नेपाल</h2>
                <p>All recipes are part of Recipe Nepal Group. @ Copyright 2021 Recipe नेपाल. All rights reserved</p>
                <Row>
                  <Col></Col>
                  <Col lg="9">
                  <Row id="link">
                  <Col style={{paddingLeft: "50px"}}><a href="#">Privacy Policy</a></Col>
                  <Col><a href="#">Terms of Service</a></Col>
                  <Col><a href="#">Ad Choices</a></Col>
                  <Col style={{paddingRight: "30px"}}><a href="#">Web Accessibility</a></Col>
                  </Row>
                  </Col>
                  <Col>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg="2">
            
            </Col>

            

          </Row>
        
      </div>
      </FooterWrapper>
    );
  }
}

export default Footer;
