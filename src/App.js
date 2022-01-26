import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { useState } from "react";
import initialFoodList from './foods.json';
import FoodList from './components/FoodList';
import Form from "./components/Form";
import Search from './components/Search';


function App() {
  const [foodList, setFoodList] = useState(initialFoodList);
  const [searchedString, setSearchedString] = useState("")

  const addFood = (food) => {
		setFoodList([...foodList, food]);
	};

  let searchedFood = null;
  if (searchedString !== "") {
    searchedFood = foodList.filter((food) => {
      return food.name.toLowerCase().includes(searchedString.toLowerCase())
    })
  }else{
    searchedFood = foodList;
  }


  return (
    <div className="App">

    <h1> Add food</h1>
    <Form addFood={addFood} />

    <Search
				searchedString={searchedString}
				callbackSearch={setSearchedString}
			/>


    <FoodList foodList={searchedFood}/>
    {/* <ContactList contacts={searchedContacts} callbackDelete={deleteContact} /> */}

      
    </div>
  );
}

export default App;

