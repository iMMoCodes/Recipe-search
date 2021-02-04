import React, {useEffect,useState} from "react";
import Recipe from "./Recipe";
import './App.css';
require("dotenv").config();

const App = () => {

  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="app">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-btn" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
