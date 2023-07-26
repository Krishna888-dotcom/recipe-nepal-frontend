import axios from "axios";
import { Component, state, changeHandler, submitData, e } from "react";

class AddRecipe extends Component {
    state = {
        recipetitle : '',
        recipeimg : '',
        recipedesc : '',
        recipecategory : '',
        foodtype : '',
        preptime: '',
        config :{
            headers :{
                authorization :`Bearer ${localStorage.getItem('token')}`
            }
        }
      }

changeHandler=(e)=>{
    this.setState({
        [e.target.name] : e.target.value 
    })
}

submitData = ()=>{
    e.preventDefault();
  
    axios.post('http://localhost:88/recipe/insert', this.state)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err.response());
    })
}
  render() { 
    return (
      <div>
        <form>
          <p>
            Recipe Name <input type="text" name="recipetitle" value={this.state.pname} 
            onChange = {this.changeHandler} />
          </p>
          <p>
            Recipe Imagee <input type="file" name="recipeimg" value={this.state.pname} 
            onChange = {this.changeHandler} />
          </p>
          <p>
          Recipe Description <input type="text" name="recipedesc" value={this.state.pname} 
            onChange = {this.changeHandler} />
          </p>
          <p>
            Food Category <input type="text" name="foodcategory" value={this.state.pname} 
            onChange = {this.changeHandler} />
          </p>
          <p>
            Food Type <input type="text" name="foodtype" value={this.state.pname} 
            onChange = {this.changeHandler} />
          </p>
          <p><button onClick={this.submitData}>Add Recipe</button></p>
        </form>
      </div>
    );
  }
}
