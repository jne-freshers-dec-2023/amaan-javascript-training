// import React, { useState, useEffect, useCallback } from 'react';
import UseRefHook from './components/UseRefHook';
import User from './components/User';
import Users from './components/Users';

// import './App.css';

const App=()=> {
  // // useState Hook
  // const [showPara, setShowPara] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);

  // console.log("App Running");

    //useCallback Hook
  // const toggleParaHandler = useCallback(()=>{
  //   if (allowToggle) {
  //   setShowPara((prevShowPara)=> !prevShowPara);
  //   }
  //   }, []);

  //   const allowToggleHandler=()=>{
  //     setAllowToggle(true);
  //   }

  // useEffect Hook
  // useEffect(() => {
  //   console.log('Component did mount or showPara changed.');
    
  // }, [showPara]);



  // const toggleParaHandler = () => {
  //   setShowPara((prevShowPara) => !prevShowPara);
  // };

  return (
    <div className="app">
      {/* <h1>Hi tAmaan!</h1>
     <p>This is New Paragraph!</p>
      <button onClick={allowToggleHandler}>Allow Toggling</button>
      <button onClick={toggleParaHandler}>Toggle Paragraph!</button> */}

      <UseRefHook/>
      <User name="Amaan Shaikh" />
      <Users/>

    </div>
  );
}

export default App;
