const redux = require('redux');

// Reducer: Manages the state modifications based on dispatched actions
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        // Increment the counter when the 'increment' action is dispatched
        return {
            counter: state.counter + 1
        };
    } else if (action.type === 'decrement') {
        // Decrement the counter when the 'decrement' action is dispatched
        return {
            counter: state.counter - 1
        };
    }
};

// Redux Store: Manages the state and the interaction with the reducer
const store = redux.createStore(counterReducer);

// Subscriber: Listens to state changes in the store
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

// Subscribe the subscriber to the store to receive updates
store.subscribe(counterSubscriber);

// Dispatching an 'increment' action 
store.dispatch({ type: 'increment' });
// Decrement action
store.dispatch({ type: 'decrement' });
