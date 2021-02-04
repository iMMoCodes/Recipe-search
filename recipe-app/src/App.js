import React, {useEffect,useState} from "react";
import Recipe from "./Recipe";
import './App.css';
require("dotenv").config();

const App = () => {

  const APP_ID = process.env.FOOD_SEARCH_APP_ID;
  const APP_KEY = process.env.FOOD_SEARCH_APP_KEY;
  
  const [recipes,setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  },[]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-btn" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
