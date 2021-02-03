import './App.css';
require("dotenv").config();

const App = () => {

  const APP_KEY = process.env.FOOD_SEARCH_APP_KEY;
  const APP_ID = process.env.FOOD_SEARCH_APP_ID;
  
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-btn" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
