import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { grey, red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CuisineWrapper from "./Style"
import ScrollUpButton from "react-scroll-up-button";

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

export default function Cuisines() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CuisineWrapper>
    <Container fluid>
      <Row>
        <Col lg="4">
          <Card className={classes.root}>
            <CardHeader title="Khas Cuisine" />
            <div style={{overflow: "hidden"}}>
            <img
              src={process.env.PUBLIC_URL + "cuisines/khas.jpg"}
              alt="imgg"
              className="d-block"
              style={{ width: "100%", height: "200px" }}
            />
            </div>
            <CardContent>
              <Typography variant="body2" color="black" component="p">
                Dal-bhat-tarkari is the standard meal eaten twice daily
                traditionally by the Khas people and recently a daily menu all
                over Nepal.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
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
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>
                  with land suitable for irrigated rice paddies in short supply,
                  other grains supplement or even dominate. Wheat becomes
                  unleavened flat bread (roti or chapati). Maize (makai),
                  buckwheat (fapar), barley (jau), or millet (kodo) become
                  porridge-like (dhido or ato). Tarkari can be spinach and fresh
                  greens (sag), fermented and dried greens (gundruk or sinki),
                  white radish (mula), potatoes (alu), green beans (simi),
                  tomatoes (golbeda), cauliflower (kauli), cabbage (bandakopi),
                  pumpkin (farsi), etc.
                </Typography>
                <Typography paragraph>
                  The climate of the hilly region remains moderate throughout
                  the year. This kind of climate is perfect for horticulture.[2]
                  Fruits traditionally grown in the hills include mandarin
                  orange (suntala), kaffir lime (kagati), lemon (nibuwa), Asian
                  pear (nashpati), and bayberry (kaphal). mangoes (aanp), apples
                  (syauu), peach (aaru), plum (aalcha or aarubakhara), apricot
                  (kurpani) .[3] In some seasons there is an excess amount of
                  these fruits produced. These excess fruits are often preserved
                  or otherwise made use of in the form of Alcohol, pickles,
                  dried fruits and fruit juice.
                </Typography>
                <Typography>
                  Dahi (yogurt) and curried meat (masu) or fish (machha) are
                  served as side dishes when available. Chicken (kukhura) and
                  fish are usually acceptable to all including the Khas Brahmin
                  (Bahun) caste. Observant Hindus never eat beef (gaiko masu).
                  They also eschew buffalo and yak meat as being too cow-like.
                  Domestic pork (sungurko masu) was traditionally only eaten by
                  aadibasi, however wild boar (bangur ko masu) was traditionally
                  hunted and eaten by magars. A strain derived from wild boar is
                  now raised in captivity and used for meat that is increasingly
                  popular with Pahari ethnicities and castes that did not
                  traditionally eat pork.Khas Chhettris,however, eat Bandel
                  (wild boar) as it is considered clean due to its forest
                  habitat though they do not eat pork meat.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Col>

        <Col lg="4">
          <Card className={classes.root}>
            <CardHeader title="Tibetan Cuisine" />
            <div style={{overflow: "hidden"}}>
            <img
              src={process.env.PUBLIC_URL + "cuisines/thukpa.jpg"}
              alt="imgg"
              className="d-block"
              style={{ width: "100%", height: "200px" }}
            />
            </div>
            <CardContent>
              <Typography variant="body2" color="black" component="p">
                The tibetan cuisine is highly influenced fromt the Tibet and 
                is especially used in the himalaya and the trans-himalaya region.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
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
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>
                Himalayan cuisine is influenced culturally by Tibetan and closely related ethnic groups in the
                 Himalaya and Trans-Himalaya. The Himalayan region is not fertile as compared to other regions.
                  Moreover, the climate is cold throughout the year with heavy snowfalls.[4] 
                  The food crops grown in this region are buckwheat, millet, naked barley, common beans, 
                  and high-altitude rice.[5] Potatoes are another important staple crop and food. Substantial 
                  amounts of rice are imported from the lowlands.
                </Typography>
                <Typography paragraph>
                Because of the cold temperature, people often prefer warm foods like soup, thukpa, tea and 
                strong alcohols. Grains are made into alcoholic beverages (see below). Butter tea is made by
                 mixing butter or ghyu (घ्यु)/ghee and salt into a strong brew of tea. This tea preparation
                  is also commonly mixed with tsampa flour to make a kind of fast food, which is especially 
                  eaten while traveling.
                </Typography>
                <Typography>
                People in this region eat dhido (millet or barley cooked dough), potato curry, momo 
                (dumplings), yak or goat or sheep meat, milk, thukpa, Laping or strong alcohol like tongba 
                (millet juice) for their regular diet. This region also imports rice from other regions and 
                "consumes daal-bhat-tarkari from time to time.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Col>

        <Col lg="4">
          <Card className={classes.root}>
            <CardHeader title="Thakali Cuisine" />
            <div style={{overflow: "hidden"}}>
            <img
              src={process.env.PUBLIC_URL + "cuisines/thakali.jpg"}
              alt="imgg"
              className="d-block"
              style={{ width: "100%", height: "200px" }}
            />
            </div>
            <CardContent>
              <Typography variant="body2" color="black" component="p">
              Thakali cuisine—transitional between Himalayan and lowland cuisines—is eaten 
              by Thakali people living in Thak-Khola Valley
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
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
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>
                His cuisine is also served in inns (bhattis) run by Thakalis alongside other trade routes 
                and in Pokhara and other towns in the hills of central Nepal, that were said to offer the 
                best food and accommodations before the great proliferation of facilities catering to foreign 
                trekkers. Very few Thakali own their own yaks, so butter made from the yak milk is usually purchased 
                at the market, along with other staples like rice, tea, lentils, sugar and spices. After butter is 
                produced, a hard cheese called chhurpi is made with the buttermilk.
                </Typography>
                <Typography paragraph>
                Thakali cuisine is less vegetarian than Pahari cuisine. Yak and yak-cow hybrids locally known as Jhopa
                 were consumed by the lower castes. All castes eat the meat of local sheep called Bheda and Chyangra or
                  Chiru imported from Tibet. Meat is sliced into thin slices and dried on thin poles near 
                  the cooking fire. Blood sausage is also prepared and dried. Dried meat is added to vegetable curries or 
                  sauteed in ghee and dipped into timur-ko-choup which is a mixture of red chili powder, Sichuan pepper,
                   salt and local herbs. This spice mixture also seasons new potatoes, or eggs which may be boiled, fried 
                   or made into omelets.
                </Typography>
                <Typography>
                Since most Thakali people were engaged in trade, they could import vegetables, fruits and eggs from lower
                 regions. A large variety of vegetables were consumed daily, some—especially daikon radish 
                 and beetroot—dried and often prepared with mutton. Soup prepared from spinach known as gyang-to was
                  served with a pinch of timur-ko-choup. Apples were introduced following the arrival of foreign 
                  horticulturists[8] and are now widely enjoyed.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: 30 }}>
        <Col lg="4">
          <Card className={classes.root}>
            <CardHeader title="Newa Cuisine" />
            <div style={{overflow: "hidden"}}>
            <img
              src={process.env.PUBLIC_URL + "cuisines/newari.jpg"}
              alt="imgg"
              className="d-block"
              style={{ width: "100%", height: "200px" }}
            />
            </div>
            <CardContent>
              <Typography variant="body2" color="black" component="p">
              Newars are an urbanized ethnic group originally living in the Kathmandu Valley, but now also in bazaar 
              towns elsewhere in the world and Middle Hills.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
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
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>
                Although daily Newar food practices consist mostly of components from the generic hill cuisine, 
                during ritual, ceremonial and festive eating, Newar dishes can be much more varied than the 
                generic Pahade/Pahari ones. Newari cuisine makes wide use of buffalo meat. For vegetarians,
                 meat and dried fish can be replaced by fried tofu or cottage cheese. The cuisine has a wide
                range of fermented preparations, whereas Pahade/Pahari cuisine has beyond a few aachar condiments
                </Typography>
                <Typography paragraph>
                Kwāti (क्वाति soup of different beans), kachilā (कचिला spiced minced meat), chhoylā (छोयला water buffalo meat 
                marinated in spices and grilled over the flames of dried wheat stalks), pukālā (पुकाला fried meat),
                 wo (व: lentil cake), paun kwā (पाउँक्वा sour soup), swan pukā (स्वँपुका stuffed lungs), syen (स्येँ fried liver),
                  mye (म्ये boiled and fried tongue), sapu mhichā (सःपू म्हिचा leaf tripe stuffed with bone marrow) 
                  and sanyā khunā (सन्या खुना jellied fish soup) are some of the popular festival foods.
                </Typography>
                <Typography>
                Dessert consists of dhau (धौ yogurt), sisābusā (सिसाबुसा fruits) and mari (मरि sweets). 
                There are achaars made with aamli fruit. Thwon (थ्वँ rice beer) and aylā (अयला local alcohol) 
                are the common alcoholic liquors that Newars make at home.
                There is great importance of food in Newari culture.[9] Newari cuisine is one of the most delicious food with 
                intense flavorings.[10] There are dishes for every edible part of buffalo meat (cooked and uncooked) that
                includes intestine, stomach and brain.[11] That's another reason why they are famous.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Col>

        <Col lg="4">
          <Card className={classes.root}>
            <CardHeader title="Lohorung Cuisine" />
            <div style={{overflow: "hidden"}}>
            <img
              src={process.env.PUBLIC_URL + "cuisines/lohorung.jpg"}
              alt="imgg"
              className="d-block"
              style={{ width: "100%", height: "200px" }}
            />
            </div>
            <CardContent>
              <Typography variant="body2" color="black" component="p">
              Lohorung are indigenous to eastern Nepal. They have a variety of food in their cuisine 
              made from local ingredients. Some of them are Wachipa, Wamik, Masikdaam, Sibring, Sel roti, 
              Bawari, Dhule Achar, Saruwa, Chamre, Dibu, and so on.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
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
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>
                Lohorung are a janajati or ethnic native people of eastern Nepal.The Lohorung homeland is Sankhuwasabha
                 district in the northern part of the Arun watershed, a tributary to the Koshi. At present they are found 
                 in eight other districts of Nepal: Ilam, Jhapa, Sunsari, Morang, Dhankuta, Terhathum, Lalitpur 
                 and Kathmandu. They also live in northeastern states of India: Darjeeling and Kalimpong in West Bengal,
                  Sikkim and Assam, and even Bhutan, Australia, United Kingdom and United States.
                </Typography>
                <Typography paragraph>
                The Lohorung language belongs to the Kiranti group of Sino-Tibetan languages. 
                Lohorung Yakhkhaba Yuyong is a non-profit organization advocating for the Lohorung community. 
                It is based in Kathmandu, Nepal.
                </Typography>
                <Typography>
                  Dahi (yogurt) and curried meat (masu) or fish (machha) are
                  served as side dishes when available. Chicken (kukhura) and
                  fish are usually acceptable to all including the Khas Brahmin
                  (Bahun) caste. Observant Hindus never eat beef (gaiko masu).
                  They also eschew buffalo and yak meat as being too cow-like.
                  Domestic pork (sungurko masu) was traditionally only eaten by
                  aadibasi, however wild boar (bangur ko masu) was traditionally
                  hunted and eaten by magars. A strain derived from wild boar is
                  now raised in captivity and used for meat that is increasingly
                  popular with Pahari ethnicities and castes that did not
                  traditionally eat pork.Khas Chhettris,however, eat Bandel
                  (wild boar) as it is considered clean due to its forest
                  habitat though they do not eat pork meat.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Col>

        <Col lg="4">
          <Card className={classes.root}>
            <CardHeader title="Middle Hills Cuisine" />
            <div style={{overflow: "hidden"}}>
            <img
              src={process.env.PUBLIC_URL + "cuisines/pork.jpg"}
              alt="imgg"
              className="d-block"
              style={{ width: "100%", height: "200px" }}
            />
            </div>
            <CardContent>
              <Typography variant="body2" color="black" component="p">
                People in middle hills are always intersted in the meaty product and 
                most of the time buffalo and pork meats are used in their authentic foods.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
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
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>
                Buffalo meat and pork are eaten by many janajati (indigenous nationalities with customs departing from
                 Hindu norms). More traditionally, Magars ate pork but not water buffalo while the superficially similar
                  Gurung did the opposite. Further east, Tamang, Rai and Limbu have unique ethnic foods including kinema 
                  (fermented soybeans), yangben (Reindeer Moss), preparations of bamboo shoots, bread made from millet or
                   buckwheat, and traditional Limbu drink tongba (millet beer).
                </Typography>
                <Typography paragraph>
                  The climate of the hilly region remains moderate throughout
                  the year. This kind of climate is perfect for horticulture.[2]
                  Fruits traditionally grown in the hills include mandarin
                  orange (suntala), kaffir lime (kagati), lemon (nibuwa), Asian
                  pear (nashpati), and bayberry (kaphal). mangoes (aanp), apples
                  (syauu), peach (aaru), plum (aalcha or aarubakhara), apricot
                  (kurpani) .[3] In some seasons there is an excess amount of
                  these fruits produced. These excess fruits are often preserved
                  or otherwise made use of in the form of Alcohol, pickles,
                  dried fruits and fruit juice.
                </Typography>
                <Typography>
                  Dahi (yogurt) and curried meat (masu) or fish (machha) are
                  served as side dishes when available. Chicken (kukhura) and
                  fish are usually acceptable to all including the Khas Brahmin
                  (Bahun) caste. Observant Hindus never eat beef (gaiko masu).
                  They also eschew buffalo and yak meat as being too cow-like.
                  Domestic pork (sungurko masu) was traditionally only eaten by
                  aadibasi, however wild boar (bangur ko masu) was traditionally
                  hunted and eaten by magars. A strain derived from wild boar is
                  now raised in captivity and used for meat that is increasingly
                  popular with Pahari ethnicities and castes that did not
                  traditionally eat pork.Khas Chhettris,however, eat Bandel
                  (wild boar) as it is considered clean due to its forest
                  habitat though they do not eat pork meat.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: 30 }}>
        <Col lg="4">
          <Card className={classes.root}>
            <CardHeader title="Terai Cuisine" />
            <div style={{overflow: "hidden"}}>
            <img
              src={process.env.PUBLIC_URL + "cuisines/terai.jpg"}
              alt="imgg"
              className="d-block"
              style={{ width: "100%", height: "200px" }}
            />
            </div>
            <CardContent>
              <Typography variant="body2" color="black" component="p">
              Food in the Terai south of Sivalik Hills refers to mirror cuisines such as Maithili cuisine
               in the east, Tharu cuisine in the west, and Bhojpuri cuisine in the center and near west of
                Madhesh region of Nepal.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
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
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>
                Terai diets can be more varied than in the Middle Hills because of greater variety of crops grown 
                locally plus cash crops imported from cooler microclimates in nearby hill regions, as well as 
                from other parts of Greater Nepal. Fruit commonly grown in the Terai include mango (aap), litchi,
                 papaya (armewa/mewa), banana (kera/kela/kola) and jackfruit (katahar/katahal).
                </Typography>
                <Typography paragraph>
                A typical terai set includes basmati rice with ghee, pigeon pea daal, tarkari (cooked variety of vegetable),
                 tarua (battered raw vegetables known as taruwa/baruwa such as potato, brinjal/aubergine, chili, 
                 cauliflower etc. deep fried in the oil), papad/papadum, mango/lemon pickles and yogurt. 
                 For non-vegetable items, they consume mostly fish or goat curry. Traditionally there never used to be
                  poultry items but nowadays, due to urbanization, poultry items are common, too.
                </Typography>
                <Typography>
                Taro root is an important crop in the region. The leaves and roots are eaten. Sidhara
                 is a mixture of taro root, dried fish and turmeric that is formed into cakes and dried for preservation.
                  The cakes are broken up and cooked with radish, chili, garlic and other spices to accompany boiled rice.
                   Snails are cleansed, boiled and spiced to make ghonghi.[19] Another short compendium of Tharu and Maithil recipes
                    includes roasted crab, wheat flatbread fried in mustard oil, and fried taro leaf cakes.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Col>

        <Col lg="4">
          <Card className={classes.root}>
            <CardHeader title="Himalayan Cuisine" />
            <div style={{overflow: "hidden"}}>
            <img
              src={process.env.PUBLIC_URL + "cuisines/himalayan.jpg"}
              alt="imgg"
              className="d-block"
              style={{ width: "100%", height: "200px" }}
            />
            </div>
            <CardContent>
              <Typography variant="body2" color="black" component="p">
              Himalayan cuisine is influenced culturally by Tibetan and closely related ethnic groups in the 
              Himalaya and Trans-Himalaya. 
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
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
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>
                The Himalayan region is not fertile as compared to other regions. Moreover, the climate is cold 
                throughout the year with heavy snowfalls.[4] The food crops grown in this region are buckwheat,
                 millet, naked barley, common beans, and high-altitude rice.[5] Potatoes are another important 
                 staple crop and food. Substantial amounts of rice are imported from the lowlands.
                </Typography>
                <Typography paragraph>
                Because of the cold temperature, people often prefer warm foods like soup, thukpa, tea and strong 
                alcohols. Grains are made into alcoholic beverages (see below). Butter tea is made by mixing butter
                 or ghyu (घ्यु)/ghee and salt into a strong brew of tea. This tea preparation is also commonly mixed 
                 with tsampa flour to make a kind of fast food, which is especially eaten while traveling.
                </Typography>
                <Typography>
                The cattle raised in this region are yak, chauries (yak and cow crossed), Himalayan goats, 
                and sheep.[6] People raise these animals for meat, milk, cheese, and dahi (yogurt). 
                Most of the Himalayan regions are hard to reach. There is no proper means of transportation because 
                of higher altitudes and it is a considerable challenge to build good road transportation. Hence only 
                rice and some spices like salt are imported from other regions by air transport or by using animals 
                as their means of transportation.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Col>

        <Col lg="4">
          <Card className={classes.root}>
            <CardHeader title="Sweets" />
            <div style={{overflow: "hidden"}}>
            <img
              src={process.env.PUBLIC_URL + "cuisines/sweet.jpg"}
              alt="imgg"
              className="d-block"
              style={{ width: "100%", height: "200px" }}
            />
            </div>
            <CardContent>
              <Typography variant="body2" color="black" component="p">
              Dessert is not a well-established concept in the Nepali cuisine and sweets made with milk, 
              yogurt and cheese are often eaten for breakfast as standalone meals.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
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
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>
                Nepal produces a variety of fruits (persimmons, apples, mangoes, tangerines, kiwis) and nuts that are
                 featured in locally prepared sweets. Dessert is not a well-established concept in the Nepali cuisine 
                 and sweets made with milk, yogurt and cheese are often eaten for breakfast as standalone meals. 
                 Sometimes grated carrots are used instead of flour, or semolina, rice, corn or puffed lotus seeds.
                  Barfi is made with some combination of lentils, fruits, flour and thickened milk.
                </Typography>
                <Typography paragraph>
                Halwa is a sweetened semolina pudding with green cardamom, cashews, raisins and shredded coconut.
                 Like other Nepalese sweets, Nepalese puddings are prepared using ghee. Dumplings called lal mohan 
                 are deep fried like fritters and soaked in cardamom-flavored sweet syrup.
                </Typography>
                <Typography>
                At the festival of Yomari Purnima celebrated in December, to thank the goddess of grains 
                Annapurna after the harvest, the Newar make sweet dumplings (yomari) with rice flour filled
                 with sesame seeds, and brown sugar or molasses. In the predominately Hindu country, 
                 sweet peda made with thickened milk (khuwaa) are offered to the Hindu gods.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: 30 }}>
        <Col lg="4">
          <Card className={classes.root}>
            <CardHeader title="Snacks" />
            <div style={{overflow: "hidden"}}>
            <img
              src={process.env.PUBLIC_URL + "cuisines/samos.jpg"}
              alt="imgg"
              className="d-block"
              style={{ width: "100%", height: "200px" }}
            />
            </div>
            <CardContent>
              <Typography variant="body2" color="black" component="p">
              Nepali people, normally have their snacks before leaving for work, school, or colleges.
               So, there is a system of having a healthy, but lighter meal during snacks time accompanied by tea.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
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
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>
                Snacks include maize popped or parched called khaja (literally, "Eat and run."); beaten rice (baji or chiura),
                 dry-roasted soybeans (bhatmas, Nepali: भटमास), dried fruit candy (lapsi), and South Asian foods like the
                  samosa and South Asian sweets. International snacks like biscuits (packaged cookies), potato chips and
                   wai wai (Nepali: वाइ वाइ, instant noodles) are all coming into widespread use. Whereas, 
                   some youths in Nepal prefer western snacks as they are easy to get and less time-consuming.
                </Typography>
                <Typography paragraph>
                Meals are traditionally eaten seated on the floor although restaurants as well as affluent homes 
                have dining tables with chairs or benches. A large mound of bhat, dhindo or a pile of rotis is 
                served on a jharke thal (a large plate) or a khande thal (a compartment plate). On the jharke thal,
                 the rice is surrounded by smaller mounds of prepared vegetables, fresh chutney or preserved pickles, 
                 and sometimes curd/yogurt, fish or meat.
                </Typography>
                <Typography>
                Separate glasses and bowls are instead used for different dishes, while serving on smaller plates
                 or when serving to honoured guest or elders of the family. The most notable of this is the 
                 separate thals and bowls that are given to elders and honoured guests that are made of a separate
                  metal alloy (jharke). Although it is vague on the specifics to what 'jharke' can be quantified to
                   be due to the change in the actual metallic composition of jharke for the past few generations 
                   and there being no one standard. Thus, jharke thals, bowls etc. can all vary in appearance from
                    locality, era, craftsmanship, and more, however the sentiment still remains. On a khande thal, 
                    there are separate small compartments for chutney and tarkari and other dishes.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Col>

        <Col lg="4">
          <Card className={classes.root}>
            <CardHeader title="Drinks" />
            <div style={{overflow: "hidden"}}>
            <img
              src={process.env.PUBLIC_URL + "cuisines/lassi.jpg"}
              alt="imgg"
              className="d-block"
              style={{ width: "100%", height: "200px" }}
            />
            </div>
            <CardContent>
              <Typography variant="body2" color="black" component="p">
              Tea (chiya) usually taken with milk and sugar, juice of sugarcane (sarbat), 
              and buttermilk (mahi) are common non-alcoholic drinks.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
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
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>
                Tea (chiya) usually taken with milk and sugar, juice of sugarcane (sarbat), and buttermilk (mahi) 
                are common non-alcoholic drinks. Alcoholic drinks include raksi, spirits made in rustic distilleries,
                 and jaand/jard, homemade beer made from rice. At higher elevations there is millet beer 
                 Tongba,nigaar and chhyaang.
                </Typography>
                <Typography paragraph>
                Western culture has influence in Nepali/Nepalese cuisine. Western food like bread, cereals, bagels,
                 pizzas, sandwiches, burgers, and pastas, and drinks like Coke, Fanta, and Sprite are common in cities
                  and places where there are a reasonable number of tourists. Middle-class families residing in cities
                   consume these foods on a daily basis. One can find them in almost all the restaurants around cities.
                </Typography>
                <Typography>
                Food is traditionally eaten with the right hand. Touching or eating food with the left hand,
                 which is traditionally used for washing off, after stool, is considered unhygienic, and taboo.
                  The hands should be washed before eating, and the hand and mouth should be rinsed after. 
                  It is customary to wash your lips after eating. The use of spoons, and more recently forks,
                   is also increasing, and inquiring if one is available is acceptable. The washing of hands 
                   and mouth is not necessary, before or after, when eating with a spoon.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Col>

        <Col lg="4"></Col>
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
    /></div>
    </Container>
    </CuisineWrapper>
  );
}
