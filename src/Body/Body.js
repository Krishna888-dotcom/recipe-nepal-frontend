import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col, Nav, Carousel } from "react-bootstrap";
import BodyWrapper from "./Style";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../Admin/TabPanel";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Bakery from "./Bakery";
import ScrollUpButton from "react-scroll-up-button";
import { Fastfood, FreeBreakfast, LocalDining, Cake } from "@material-ui/icons";

const Body = () => {
  let [value, setValue] = useState(0);
  const handleChange = (e, val) => {
    setValue(val);
  };

  return (
    <BodyWrapper>
      <div>
        <div>
          <Row>
            <Col>
              <div className="carousel__data">
                <video
                  class="video"
                  src={process.env.PUBLIC_URL + "body/food.mp4"}
                  autoPlay
                  loop
                  muted
                />
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col lg={12}>
              <div className="tab__toggle mt-2">
                <AppBar
                  position="static"
                  style={{
                    background: "green",
                    paddingLeft: 350,
                    marginBottom: "10px",
                    marginTop: "-10px"
                  }}
                >
                  <Tabs value={value} onChange={handleChange}>
                    <Tab
                      icon={<FreeBreakfast style={{ fontSize: "21px" }} />}
                      label="Breakfast"
                    />
                    <Tab
                      icon={<Fastfood style={{ fontSize: "21px" }} />}
                      label="Lunch"
                    />
                    <Tab
                      icon={<LocalDining style={{ fontSize: "21px" }} />}
                      label="Dinner"
                    />
                    <Tab
                      icon={<Cake style={{ fontSize: "21px" }} />}
                      label="Bakery"
                    />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <Breakfast />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Lunch />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Dinner />
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <Bakery />
                </TabPanel>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div>
      <ScrollUpButton
      StopPosition={0}
      ShowAtPosition={150}
      EasingType='easeOutCubic'
      AnimationDuration={500}
      ContainerClassName='ScrollUpButton__Container'
      TransitionClassName='ScrollUpButton__Toggled'
      style={{backgroundColor: "green"}}
      ToggledStyle={{}}
    />
      </div>
    </BodyWrapper>
  );
};

export default Body;
