import React, { useState } from 'react';

const Form = ({addFood}) => {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage ] = useState("");
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const food = {name : name, calories : calories, image : image, quantity : 0}; // poutr strocker chaque value
        console.log(food);
        addFood(food);
        setName(""); // permet vider field
        setCalories("");
        setImage("");
    };

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input 
            type="text" 
            name="name" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='calories'>Calories</label>
        <input 
            type="number" 
            name="calories" 
            id="calories" 
            value={calories} 
            onChange={(e) => setCalories(e.target.value)}
        />
        <label htmlFor='image'>Image</label>
        <input 
            type="text"
            name="image" 
            id="image" 
            value={image} 
            onChange={(e) => setImage(e.target.value)}
        />
        <button>Add Food</button>

      </form>
  )
};

export default Form;
