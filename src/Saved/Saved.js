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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";

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

export default function Saved() {
  const classes = useStyles();
  let [Saved, setSaved] = useState([]);
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
      .get("http://localhost:88/retrieveSave",auth.config)
      .then((response) => {
        console.log(response);
        setSaved(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let userType = localStorage.getItem("usertype");

  return (
  
      <Container fluid>
        <Row>
          {Saved.map((food) => {
            return (
              <Col lg={4}>
                <Card className={classes.root} style={{ width: "400px" }}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        U
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
                        {food.recipeId.foodcategory}
                      </Col>
                      <Col
                        lg="5"
                        style={{
                          fontWeight: "bold",
                          color: "grey",
                          fontSize: "13px",
                        }}
                      >
                        Time: {food.recipeId.preptime}
                      </Col>
                    </Row>
                  </div>
                  <div style={{ overflow: "hidden" }}>
                    <img
                      src={`http://localhost:88/${food.recipeId.recipeimg}`}
                      alt="imgg"
                      className="d-block"
                      style={{ width: "100%", height: "250px" }}
                    />
                  </div>
                  <CardActions disableSpacing>
                   
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
                      <p>{food.recipeId.recipedesc}</p>
                    </CardContent>
                  </Collapse>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

  );
}
