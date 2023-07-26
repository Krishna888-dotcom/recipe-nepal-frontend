import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Body from "../Body/Body";
import Cuisines from "../Cuisines/Cuisines"
import Ingredients from "../Ingredients/Ingredients";
import Admin from "../Admin/Admin";
import MyRecipe from "../MyRecipe/MyRecipe";
import Register from "../Register/Register";
import Saved from "../Saved/Saved"
import Login from "../Login/Login"


const Router = (props) => {
  return (
    <Switch>
      <Route path="/" component={Body} exact />
      <Route path="/Cuisines" component={Cuisines} />
      <Route path="/Ingredients" component={Ingredients} />
      <Route path="/Admin" component={Admin} />
      <Route path="/MyRecipe" component={MyRecipe} />
      <Route path="/Saved" component={Saved} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
    </Switch>
  );
};

export default Router;
