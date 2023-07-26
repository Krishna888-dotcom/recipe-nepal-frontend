import React, {
  useState,
  useEffect,
  toggleClassicTabs3,
  TabsClassic3,
  changeHandler,
  submitData,
  imageHandler,
  dispatch,
  redirect,
  e,
} from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BodyWrapper from "./Style";
import axios from "axios";
import { Container, Col, Row, Modal, Form } from "react-bootstrap";
import swal from "sweetalert";
import EditMyRecipe from "./EditMyRecipe"


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MyRecipe() {
  let [recipe, setRecipe] = useState({
    activeItemClassicTabs3: "1",
    recipetitle: "",
    recipeimg: "",
    recipedesc: "",
    foodcategory: "Veg",
    foodtype: "__",
    preptime: "",
    config: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  const changeHandler = (e) => {
    var { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });

  };

  const imageHandler = (e) => {
    var { name, files } = e.target;
    setRecipe({
      ...recipe,
      [name]: files[0],
    });

  };

  const toggleClassicTabs3 = (tab) => () => {
    if (this.state.activeItemClassicTabs3 !== tab) {
      this.setState({
        activeItemClassicTabs3: tab,
      });
    }
  };
  const submitDataToDB = (e) => {
    e.preventDefault();

    let fData = new FormData();
    fData.append("recipetitle", recipe.recipetitle);
    fData.append("recipeimg", recipe.recipeimg);
    fData.append("recipedesc", recipe.recipedesc);
    fData.append("foodcategory", recipe.foodcategory);
    fData.append("foodtype", recipe.foodtype);
    fData.append("preptime", recipe.preptime);
    axios
      .post("http://localhost:88/recipe/insert", fData, recipe.config)
      .then((response) => {
        console.log(response.data.success);
        if (response.data.success == "true") {
          swal({
            title: "Success",
            text: response.data.message,
            icon: "success",
            timer: 3000,
          }).then(() => {
            window.location.href = "/MyRecipe";
          });
        } else {
          swal({
            title: "Error",
            text: response.data.message,
            icon: "error",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const classes = useStyles();
  let [breakfast, setBreakfast] = useState([]);
  const [expanded, setExpanded] = React.useState(false);
  let [auth, setAuth] = useState({
    config: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  useEffect(() => {
    axios
      .get("http://localhost:88/recipe/allrec/__")
      .then((response) => {
        console.log(response);
        setBreakfast(response.data.recipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let user = localStorage.getItem("userId");
  var breakfastData = breakfast.filter((val) => {
    return val.userId == user;
  });

  const deleteRecipe = (e, id) => {
    axios
      .delete("http://localhost:88/recipe/delete/" + id, auth.config)
      .then((response) => {
        if (response.data.success == true) {
          swal({
            title: "Success",
            text: response.data.message,
            icon: "success",
          });
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BodyWrapper>
      <Container fluid class="container">
        <Row style={{ marginBottom: "30px" }}>
          <>
            <Button
              style={{ marginLeft: "600px" }}
              variant="contained"
              color="secondary"
              onClick={handleShow}
              className={classes.button}
              startIcon={<AddIcon />}
            >
              Add New
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Add New Recipe</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form method="post" onSubmit={submitDataToDB}>
                  <Form.Group>
                    <Form.Label class="heading">Recipe Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="recipetitle"
                      value={recipe["recipetitle"]}
                      onChange={(event) => {
                        changeHandler(event);
                      }}
                      placeholder="Enter Recipe Title"
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label class="heading">Food Image</Form.Label>
                    <Form.Control
                      type="file"
                      name="recipeimg"
                      accept="image/*"
                      onChange={(event) => {
                        imageHandler(event);
                      }}
                      placeholder="Choose file"
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label class="heading">Recipe Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      type="text"
                      name="recipedesc"
                      value={recipe["recipedesc"]}
                      onChange={(event) => {
                        changeHandler(event);
                      }}
                      placeholder="Enter Recipe Description"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label class="heading">Food Category</Form.Label>
                    <Form.Control
                      as="select"
                      name="foodcategory"
                      value={recipe["foodcategory"]}
                      onChange={(event) => {
                        changeHandler(event);
                      }}
                      required
                    >
                      <option>Veg</option>
                      <option>Non-Veg</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label class="heading">Preparation Time</Form.Label>
                    <Form.Control
                      type="text"
                      name="preptime"
                      value={recipe["preptime"]}
                      onChange={(event) => {
                        changeHandler(event);
                      }}
                      placeholder="Enter Preparation Time"
                      required
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      marginLeft: 170,
                    }}
                    type="submit"
                    id="addrecipe"
                  >
                    Add Recipe
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                {/* <Button variant="primary" type="submit" name="addRecipe" id="addrecipe">Add</Button> */}
              </Modal.Footer>
            </Modal>
          </>
        </Row>
        <Row>
          {breakfastData.map((food) => {
            return (
              <Col lg={4}>
                <Card className={classes.root} style={{ width: "400px" }}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                      </Avatar>
                    }
                    title={food.recipetitle}
                  />
                  <div style={{ marginTop: "-20px" }}>
                    <Row>
                      <Col lg="4"></Col>
                      <Col
                        lg="3"
                        style={{
                          fontWeight: "bold",
                          color: "grey",
                          fontSize: "13px",
                        }}
                      >
                        {food.foodcategory}
                      </Col>
                      <Col
                        lg="5"
                        style={{
                          fontWeight: "bold",
                          color: "grey",
                          fontSize: "13px",
                        }}
                      >
                        Time: {food.preptime}
                      </Col>
                    </Row>
                  </div>
                  <img
                    src={`http://localhost:88/${food.recipeimg}`}
                    alt="imgg"
                    className="d-block"
                    style={{ width: "100%", height: "250px" }}
                  />

                  <CardActions disableSpacing>
                  <>
                        <IconButton
                          aria-label="edit"
                          data-toggle="modal"
                          data-target={`#edit${food._id}`}
                        >
                          <Edit style={{ color: "green" }} />
                        </IconButton>

                        <IconButton
                          aria-label="delete"
                          data-toggle="modal"
                          data-target={`#delete${food._id}`}
                        >
                          <Delete style={{ color: "red" }} />
                        </IconButton>
                        <EditMyRecipe recipes={food} key={`update${food._id}`} />
                        <div
                          class="modal fade"
                          id={`delete${food._id}`}
                          tabindex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                  Delete {food.recipetitle}
                                </h5>
                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <p>
                                  Do you really want to delete{" "}
                                  {food.recipetitle}?
                                </p>
                                <div className="text-center">
                                  <button
                                    className="btn btn-danger btn-md w-50"
                                    name="delete__recipe"
                                    type="button"
                                    onClick={(event) => {
                                      deleteRecipe(event, food._id);
                                    }}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Procedure:</Typography>
                      <p>{food.recipedesc}</p>
                    </CardContent>
                  </Collapse>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </BodyWrapper>
  );
}
