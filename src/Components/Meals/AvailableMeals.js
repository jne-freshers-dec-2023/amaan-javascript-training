import React from "react";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
    const dummyMeals =  DUMMY_MEALS.map(meal=>{
        return (
            <li key={meal.id}>
                <h2>{meal.name}</h2>
                <h3>{meal.description}</h3>
                <h4>{meal.price}</h4>        
            </li>
            
   ) });
  return (
    <>
      <section>
        <ul>
            {dummyMeals}
                
        </ul>
      </section>
    </>
  );
};

export default AvailableMeals;
