import './App.css';
require("dotenv").config();

const App = () => {

  const APP_KEY = process.env.FOOD_SEARCH_APP_KEY;
  const APP_ID = process.env.FOOD_SEARCH_APP_ID;
  
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form>
        <input type="text" />
        <button>Search</button>
      </form>
    </div>
  );
}

export default App;
