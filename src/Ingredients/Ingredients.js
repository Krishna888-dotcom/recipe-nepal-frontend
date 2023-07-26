import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
// import Card from '@material-ui/core/Card';
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IngredientWrapper from "./Style"
import ScrollUpButton from "react-scroll-up-button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginLeft: "20px",
    marginRight: "20px",
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

export default function Ingredients() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <IngredientWrapper>
    <Container fluid>
      <Row>
        <Card className={classes.root}>
          <CardHeader title="Popular Ingredients" />

          <CardContent>
            <Container fluid>
              <Row>
                <Col lg="3">
                  <Card className="card" style={{ width: "18rem"}}>
                    <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/salt.png"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Salt or नून</Card.Title>
                      <Card.Text>
                      Salt is used almost everywhere in the world and it is usually a part of every meal.
                      
                      </Card.Text>
                      <Button variant= "primary" href="https://www.daraz.com.np/products/stc-aayo-noon-salt-1kg-i103650383-s1024364562.html?spm=a2a0e.searchlist.list.1.652d463cA4uJoC&search=1" target="_blank" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/turmeric.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Turmeric or बेसार</Card.Title>
                      <Card.Text>
                      Turmeric is a spice that comes from the turmeric plant. It is commonly used in Asian food. 
                      You probably know turmeric as the main spice in curry. 
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/garlic.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Garlic or लसून</Card.Title>
                      <Card.Text>
                      Garlic is most often used as a flavoring agent but can also be eaten as a vegetable.
                       It is used to flavor many foods, such as salad dressings, vinaigrettes, marinades,
                        sauces, vegetables, meats, soups, and stews.
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/coriander.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Coriander or धनिया</Card.Title>
                      <Card.Text>
                      Cilantro is versatile and is used in almost every dish, even around the world. But surprisingly, 
                      most people still don’t know how this spice is healthy for the body.
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </CardContent>
          <CardActions disableSpacing>
            <Button
            style={{backgroundColor: "black", marginRight:"20px"}}
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </Button>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Container fluid>
              <Row>
                <Col lg="3">
                  <Card style={{ width: "18rem" }}>
                  <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/ginger.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Ginger or अदुवा</Card.Title>
                      <Card.Text>
                      With its aromatic smell and spicy flavor, not only does ginger add a unique essence to food but 
                      it also decreases the risk of obesity, diabetes, heart disease, and overall mortality
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/jeera.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Cumin or जीरा</Card.Title>
                      <Card.Text>
                      Cumin is an essential spice for nepalese curries and chutneys. 
                      The spice also works well in a variety of rice dishes, stews, soups, breads, 
                      pickles, barbecue sauces, and chili con carne recipes.
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/methi.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Fenugreek seed or मेथि</Card.Title>
                      <Card.Text>
                      Fenugreek seeds do not normally feature in other cuisines but they are used in almost every Nepalese kitchen.
                      Despite the bitter taste, this seed also has a lot of health benefits.
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/chilli.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Green Chilli or हरियो खुर्सानि</Card.Title>
                      <Card.Text>
                      Grenn chillies are widely used and very spicy food is not considered healthy but 
                      eating chillies in the right amount can be good for you.
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </CardContent>
          </Collapse>
        </Card>
      </Row>
</Container>
<Container fluid>
      <Row style={{marginTop:20}}>
        <Card className={classes.root}>
          <CardHeader title="Authentic Ingredients" />

          <CardContent>
            <Container fluid>
              <Row>
                <Col lg="3">
                  <Card style={{ width: "18rem" }}>
                  <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/bay.png"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Bay leaf or तेज पत्ता</Card.Title>
                      <Card.Text>
                      The bay leaf is an aromatic leaf commonly used in cooking. 
                      It can be used whole or in a dried or ground form
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/cinnamon.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Cinnamon or दाल्चिनि</Card.Title>
                      <Card.Text>
                      Cinnamon is a spice that is made from the inner bark of trees scientifically known as Cinnamomum. 
                      It has been used as an ingredient throughout history.
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/hing.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Asafoetida or हिन्ग</Card.Title>
                      <Card.Text>
                      Asafoetida is used in savory dishes, often to add a more full flavor by mimicking 
                      the taste of onions, garlic, egg, and even meat.
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/jimbu.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Himalayan leaf or जिम्बु</Card.Title>
                      <Card.Text>
                      Jimbu is an herb belonging to the onion family, used extensively in 
                      some regions of Nepal and in some central Himalayan states.
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </CardContent>
          <CardActions disableSpacing>
            <Button
            style={{backgroundColor: "black", marginRight:"20px"}}
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </Button>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Container fluid>
              <Row>
                <Col lg="3">
                  <Card style={{ width: "18rem" }}>
                  <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/jwano.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Thyme or ज्वानो</Card.Title>
                      <Card.Text>
                      Thyme is the herb (dried aerial parts) of some members of the genus Thymus of aromatic perennial 
                      evergreen herbs in the mint family Lamiaceae.
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/nutmeg.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Nutmeg or जायफल</Card.Title>
                      <Card.Text>
                      Slightly sweeter than mace, nutmeg is essential to bechamel sauce and also goes well with baked or stewed fruit, custards, eggnog, punches, curries, sauces 
                      , pasta, and vegetables.
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/timur.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Schezwan pepper or टिमुर</Card.Title>
                      <Card.Text>
                      Sichuan pepper is a spice commonly used in the Sichuan cuisine of China's southwestern Sichuan Province.
                       When eaten it produces a tingling, numbing effect
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/star.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Star Anise</Card.Title>
                      <Card.Text>
                      Star anise is a spice made from the fruit of the Chinese evergreen tree Illicium verum.
                       It's aptly named for the star-shaped pods from which the 
                      spice seeds are harvested and has a flavor
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </CardContent>
          </Collapse>
        </Card>
      </Row>
    </Container>
    <Container fluid>
      <Row style={{marginTop:20}}>
        <Card className={classes.root}>
          <CardHeader title="Exquisite Ingredients" />

          <CardContent>
            <Container fluid>
              <Row>
                <Col lg="3">
                  <Card style={{ width: "18rem" }}>
                  <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/truffle.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Alba White Truffle</Card.Title>
                      <Card.Text>
                      Truffles are tubers that grow a few inches underground. 
                      They thrive close to roots of hardwood trees like oaks, hazelnut, and chestnut.
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/caviar.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Caviar</Card.Title>
                      <Card.Text>
                      Caviar is a food consisting of salt-cured roe of the family Acipenseridae.
                       Caviar is considered a delicacy and is eaten as a garnish or a spread.
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/gold.png"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Edible Gold</Card.Title>
                      <Card.Text>
                      Edible gold is a particular type of gold authorized by the European Union and the United States as a food additive,
                       under the code E 175.
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/gooseneck.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Gooseneck Barnacles</Card.Title>
                      <Card.Text>
                      The edible part of the goose barnacles are the stems. These are usually boiled for only a few 
                      seconds in salt water with a bay leaf.
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </CardContent>
          <CardActions disableSpacing>
            <Button
            style={{backgroundColor: "black", marginRight:"20px"}}
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </Button>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Container fluid>
              <Row>
                <Col lg="3">
                  <Card style={{ width: "18rem" }}>
                  <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/pista.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Iranian Pistachio</Card.Title>
                      <Card.Text>
                      One of the advantages of Iranian pistachio is its high kernel ratio. it means you get more edible 
                      kernels for the same amount of Iranian pistachios than any other pistachios in the world
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/beef.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Kobe Beef</Card.Title>
                      <Card.Text>
                      Kobe beef is a very particular variety of Wagyu (Japanese Cattle) called Tajima-Gyu that is 
                      raised to strict standards in the prefecture of Hyogo.
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/kopi.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Kopi Luwak</Card.Title>
                      <Card.Text>
                      The most expensive coffee in the world is passes through the digestive system of a civet 
                      (a cat like creature) before it reaches your cup.
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="3">
                <Card style={{ width: "18rem" }}>
                <div style={{overflow: "hidden"}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "ingredients/saffron.jpg"} />
                    </div>
                    <Card.Body>
                      <Card.Title>Saffron</Card.Title>
                      <Card.Text>
                      Saffron is a spice derived from the flower of Crocus sativus, commonly known as the "saffron crocus".
                      collected and dried for use mainly as a seasoning and colouring agent in food. 
                      </Card.Text>
                      <Button variant= "primary" style={{backgroundColor: "teal", marginLeft:"60px"}} >Order online</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </CardContent>
          </Collapse>
        </Card>
      </Row>
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
    </Container>
    </IngredientWrapper>
  );
}
