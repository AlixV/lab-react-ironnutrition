import React from 'react';
// import { findDOMNode } from 'react-dom';
import FoodBox from './FoodBox';

const FoodList = (props) => {
    const { foodList } = props;

  return <div>

       { foodList.map((food)=>{
           return (
           <FoodBox
           name = {food.name}
           calories = {food.calories}
           image = {food.image}
           quantity = {food.quantity}
           />)

        })}
      

  </div>;
};

export default FoodList;
