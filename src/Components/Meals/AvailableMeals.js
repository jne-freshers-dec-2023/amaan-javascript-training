import React, { useEffect,useState } from "react";


const AvailableMeals = () => {

  const  [meals, setMeals] = useState([]);

  useEffect(()=>{
    document.title="Available Meals"
    const fetchMeals = async () =>{
      const res = await fetch('https://react-http-873cd-default-rtdb.firebaseio.com/meals.json');
      const data = await res.json();

      const loadedMeals = [];
      for(let key in data){
        loadedMeals.push({
          id:key,
          ...data[key]
        })
        setMeals(loadedMeals);
      }
    }
    fetchMeals();
  },[]);

    const dummyMeals =  meals.map(meal=>{
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
