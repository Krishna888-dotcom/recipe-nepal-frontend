import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BodyWrapper from "./Style";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import EditRecipe from "./EditRecipe";
import swal from "sweetalert";
import StarRatings from "react-star-ratings";

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

export default function RecipeReviewCard() {
  const classes = useStyles();
  let [Bakery, setBakery] = useState([]);
  const [expanded, setExpanded] = React.useState(false);
  let [auth, setAuth] = useState({
    config: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  let [ratings, setRatings] = useState([]);
  let [saved, setSaved] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:88/myRatings", auth.config)
      .then((response) => {
        console.log(response);
        if (response.data.success == true) {
          setRatings(response.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:88/retrieveSave", auth.config)
      .then((response) => {
        console.log(response);
        if (response.data.success == true) {
          setSaved(response.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let mySaved = saved.map((val) => {
    return val.recipeId._id;
  });

  var totalRatings = {};
  if (ratings.length > 0) {
    for (var i of ratings) {
      totalRatings[i.recipe_id] = i.rating;
    }
  }

  const rateRecipe = (newRating, name) => {
    axios
      .post(
        "http://localhost:88/rate/recipe",
        {
          rating: newRating,
          recipeId: name,
        },
        auth.config
      )
      .then((response) => {
        if (response.data.success == true) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(totalRatings);

  useEffect(() => {
    axios
      .get("http://localhost:88/recipe/allrec/Bakery")
      .then((response) => {
        console.log(response);
        setBakery(response.data.recipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

  const saveRecipes = (e, id) => {
    axios
      .post("http://localhost:88/add/favourite", { recipeId: id }, auth.config)
      .then((response) => {
        if (response.data.success == true) {
         
          window.location.reload();
        } 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let userType = localStorage.getItem("usertype");

  return (
    <BodyWrapper>
      <Container fluid>
        <Row>
          {Bakery.map((food) => {
            return (
              <Col lg={4}>
                <Card
                  className={classes.root}
                  style={{ width: "400px" }}
                  
                >
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
                  <div style={{ overflow: "hidden" }}>
                    <img
                      src={`http://localhost:88/${food.recipeimg}`}
                      alt="imgg"
                      className="d-block"
                      style={{ width: "100%", height: "250px" }}
                    />
                  </div>
                  <CardActions disableSpacing>
                  {userType == "User" && (
                      <>
                        {mySaved.includes(food._id) ? (
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon
                              style={{ color: "red" }}
                              onClick={(event) => {
                                saveRecipes(event, food._id);
                              }}
                            />
                          </IconButton>
                        ) : (
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon
                              style={{ color: "grey" }}
                              onClick={(event) => {
                                saveRecipes(event, food._id);
                              }}
                            />
                          </IconButton>
                        )}

                       
                        <div style={{paddingLeft : "70px"}}>
                          <StarRatings
                            rating={food.reciperating}
                            starRatedColor="gold"
                            starDimension="30px"
                            starSpacing="3px"
                            numberOfStars={5}
                            name={food._id}
                            starHoverColor="gold"
                          />
                        </div>
                        
                      </>
                    )}

                    {userType == "Admin" && (
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
                        <div style={{paddingLeft : "50px"}}>
                          <StarRatings
                            rating={food.reciperating}
                            starRatedColor="gold"
                            starDimension="30px"
                            starSpacing="3px"
                            numberOfStars={5}
                            name={food._id}
                            starHoverColor="gold"
                          />
                        </div>
                        <EditRecipe recipes={food} key={`update${food._id}`} />
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
                    )}
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
                      <p style={{fontWeight: "bold"}}>Your rating to the recipe</p>
                      {totalRatings[food._id] ? (
                        <StarRatings
                          rating={totalRatings[food._id]}
                          starRatedColor="gold"
                          starDimension="30px"
                          starSpacing="3px"
                          numberOfStars={5}
                          changeRating={rateRecipe}
                          name={food._id}
                          starHoverColor="gold"
                        />
                      ) : (
                        <StarRatings
                          rating={food.reciperating}
                          starRatedColor="gold"
                          starDimension="30px"
                          starSpacing="3px"
                          numberOfStars={5}
                          changeRating={rateRecipe}
                          name={food._id}
                          starHoverColor="gold"
                        />
                      )}
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
