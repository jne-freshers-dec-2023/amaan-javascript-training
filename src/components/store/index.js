import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {counter:0, showCounter:true}

const counterSlice = createSlice({
    name:  'app',
    initialState,
    reducers:{
        increament(state){
            state.counter++;
        },
        decreament(state){
            state.counter--;
        },
        increase(state,action){
            state.counter += action.payload;
        },
        toggle(state){
            state.showCounter=!state.showCounter;
        }
    }
});


// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INC") {
//     return {
//       counter: state.counter + 1,
//       showCounter:state.showCounter
//     };
//   }
//   if (action.type === "DEC") {
//     return {
//       counter: state.counter - 1,
//       showCounter:state.showCounter
//     };
//   }
//   if(action.type === "INCFIVE"){
//     return{
//         counter: state.counter + action.payload,
//         showCounter:state.showCounter
//     }
//   }
//   if(action.type === "TOG"){
//     return{
//         counter:!state.counter,
//         showCounter:state.showCounter
//     }
//   }

//   return state;
// };
const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
    }
});
export const counterActions = counterSlice.actions;

export default store;
