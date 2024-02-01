import React, { useEffect,useState } from "react";


const AvailableMeals = () => {

  const  [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(()=>{
    document.title="Available Meals"
    const fetchMeals = async () =>{
      const res = await fetch('https://react-http-873cd-default-rtdb.firebaseio.com/meals.json');
      if(!res.ok) {
        throw new Error("Somrthing went wrong!");
      }
      const data = await res.json();

      const loadedMeals = [];
      for(let key in data){
        loadedMeals.push({
          id:key,
          ...data[key]
        })
        setMeals(loadedMeals);
        setIsLoading(false);
      }
    }
    fetchMeals().catch((error=>{
      setIsLoading(false);
      setHttpError(error.message);
    }))
  },[]);

  if(isLoading){
    return (<section>
      <p>Loading...</p>
    </section>)
  }
  if(httpError){
    return(
      <section>
        <p style={{color:"red"}} >{httpError}</p>
      </section>
    )
  }
    const dummyMeals =  meals.map(meal=>{
        return (
            <li style={{listStyleType:"none"}} key={meal.id}>
                <h2>{meal.name}</h2>
                <h3>{meal.description}</h3>
                <h4>${meal.price}</h4>        
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
