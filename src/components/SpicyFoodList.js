import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  // const [spicyFoodArray, setSpicyFoodArray] = useState([])

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray)
    // console.log(newFood);

  }

  const foodList = foods.map((food) => (
    <li key={food.id}>Name:{food.name} Cuisine:{food.cuisine} 
    Heat Level: {food.heatLevel}
    </li>
  ))

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
