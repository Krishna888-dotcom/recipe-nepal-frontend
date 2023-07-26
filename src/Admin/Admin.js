import React, {
  Component,
  state,
  toggleClassicTabs3,
  TabsClassic3,
  changeHandler,
  submitData,
  imageHandler,
  dispatch,
  redirect,
  e,
} from "react";
import swal from "sweetalert";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AdminWrapper from "./Style";
import axios from "axios";

class Admin extends Component {
  state = {
    activeItemClassicTabs3: "1",
    recipetitle: "",
    recipeimg: "",
    recipedesc: "",
    foodcategory: "Veg",
    foodtype: "Lunch",
    preptime: "",
    config: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value, 
    });
  };

  imageHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0],
    });
  };

  toggleClassicTabs3 = (tab) => () => {
    if (this.state.activeItemClassicTabs3 !== tab) {
      this.setState({
        activeItemClassicTabs3: tab,
      });
    }
  };
  submitData = (e) => {
    e.preventDefault();

    const fData = new FormData();
    fData.append("recipetitle", this.state.recipetitle);
    fData.append("recipeimg", this.state.recipeimg);
    fData.append("recipedesc", this.state.recipedesc);
    fData.append("foodcategory", this.state.foodcategory);
    fData.append("foodtype", this.state.foodtype);
    fData.append("preptime", this.state.preptime);
    axios
      .post("http://localhost:88/recipe/insert", fData, this.state.config)
      .then((response) => {
        console.log(response.data.success);
        if(response.data.success == "true")
        {
            swal({
                "title":"Success",
                "text":response.data.message,
                "icon":"success",
                "timer" : 3000
               
            })
            .then(() => {
              window.location.href = "/Admin";
          })
            
            
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
        console.log(err);
      });
  };

  render() {
    return (
      <AdminWrapper>
        <MDBContainer id="container">
          <div
            className="classic-tabs"
            class="shadow-lg p-3 mb-5 bg-white rounded"
          >
            <MDBNav classicTabs className="mt-5 head">
              <MDBNavItem>
                <MDBNavLink
                  className="navvv"
                  link
                  to="#"
                  active={this.state.activeItemClassicTabs3 === "1"}
                  onClick={this.toggleClassicTabs3("1")}
                >
                  <MDBIcon icon="plus" size="2x" class="icon" />
                  <br />
                  Add Recipe
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent
              className="card mb-5"
              activeItem={this.state.activeItemClassicTabs3}
            >
              <MDBTabPane tabId="1">
                <MDBContainer>
                  <Form method="post" onSubmit={this.submitData}>
                    <Form.Group>
                      <Form.Label class="heading">Recipe Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="recipetitle"
                        value={this.state.recipetitle}
                        onChange={this.changeHandler}
                        placeholder="Enter Recipe Title"
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label class="heading">Food Image</Form.Label>
                      <Form.Control
                        type="file"
                        name="recipeimg"
                       
                        onChange={this.imageHandler}
                        placeholder="Choose file"
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label class="heading">
                        Recipe Description
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        type="text"
                        name="recipedesc"
                        value={this.state.recipedesc}
                        onChange={this.changeHandler}
                        placeholder="Enter Recipe Description"
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label class="heading">Food Category</Form.Label>
                      <Form.Control
                        as="select"
                        name="foodcategory"
                        value={this.state.foodcategory}
                        onChange={this.changeHandler}
                      >
                        <option>Veg</option>
                        <option>Non-Veg</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label class="heading">Food Type</Form.Label>
                      <Form.Control
                        as="select"
                        name="foodtype"
                        value={this.state.foodtype}
                        onChange={this.changeHandler}
                      >
                        <option>Lunch</option>
                        <option>Breakfast</option>
                        <option>Dinner</option>
                        <option>Bakery</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label class="heading">Preparation Time</Form.Label>
                      <Form.Control
                        type="text"
                        name="preptime"
                        value={this.state.preptime}
                        onChange={this.changeHandler}
                        placeholder="Enter Preparation Time"
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit" id="addrecipe">
                      Add Recipe
                    </Button>
                  </Form>
                </MDBContainer>
              </MDBTabPane>
            </MDBTabContent>
          </div>
        </MDBContainer>
      </AdminWrapper>
    );
  }
}

export default Admin;
