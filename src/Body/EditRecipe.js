import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";

const EditRecipe = (props) => {
  let { recipes } = props;
  let [recipe, setRecipe] = useState({
    activeItemClassicTabs3: "1",
    recipetitle: recipes.recipetitle,
    recipeimg: "",
    recipedesc: recipes.recipedesc,
    foodcategory: recipes.foodcategory,
    foodtype: recipes.foodtype,
    preptime: recipes.preptime,
    id: recipes._id,
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
    // this.setState({
    //   [e.target.name]: e.target.value, //jun ma type gareko tesko value set garde
    // });
  };

  const imageHandler = (e) => {
    var { name, files } = e.target;
    setRecipe({
      ...recipe,
      [name]: files[0],
    });
    // this.setState({
    //   [e.target.name]: e.target.files[0], //jun ma type gareko tesko value set garde
    // });
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
    fData.append("id", recipe.id);
    axios
      .put("http://localhost:88/recipe/update", fData, recipe.config)
      .then((response) => {
        console.log(response.data.success);
        if (response.data.success == true) {
          swal({
            title: "Success",
            text: response.data.message,
            icon: "success",
            timer: 3000,
          }).then(() => {
            window.location.href = "/";
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

  useEffect(() => {
    var foodtype = document.querySelector(`#foodtype`);
    var foodcategory = document.querySelector(`#foodcategory`);
    if (recipes.foodtype == "Lunch") {
      foodtype.options[0].selected = true;
    } else if (recipes.foodtype == "Breakfast") {
      foodtype.options[1].selected = true;
    } else if (recipes.foodtype == "Dinner") {
      foodtype.options[2].selected = true;
    } else if (recipes.foodtype == "Bakery") {
      foodtype.options[3].selected = true;
    }

    if (recipes.foodcategory == "Veg") {
      foodcategory.options[0].selected = true;
    } else if (recipes.foodcategory == "Non-Veg") {
      foodcategory.options[1].selected = true;
    }
  }, []);

  return (
    <React.Fragment>
      <div
        class="modal fade"
        id={`edit${recipes._id}`}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit {recipe.recipetitle}
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
                    id="foodcategory"
                    onChange={(event) => {
                      changeHandler(event);
                    }}
                    required
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
                    value={recipe["foodtype"]}
                    id="foodtype"
                    onChange={(event) => {
                      changeHandler(event);
                    }}
                    required
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
                  Update Recipe
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditRecipe;
