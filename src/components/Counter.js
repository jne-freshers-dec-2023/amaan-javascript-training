import { useDispatch, useSelector } from "react-redux";
import classes from './Counter.module.css';
import { counterActions } from "./store";


const Counter = () => {
const dispatch = useDispatch();
const counter = useSelector(state=> state.counter.counter)
const show = useSelector(state=> state.counter.showCounter)


  const incrementHandler=()=>{
    dispatch(counterActions.increament())
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decreament());
  }
  const increseHndler=()=>{
    dispatch(counterActions.increase(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseHndler}>Increse by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}; 

export default Counter;
