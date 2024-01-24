import React, { useState } from "react";

const initialUserInput = {
  "current-saving": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};
const UserInput = () => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    //...
    event.preventDefault();
    console.log("Your message has been submitted");
  };
  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput({ ...userInput, [input]: value });
  };

  return (
    <>
      <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(event) =>
                inputChangeHandler("current-saving", event.target.value)
              }
              value={userInput['current-saving']}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(event) =>
                inputChangeHandler("yearly-contribution", event.target.value)
              }
              value={userInput['yearly-contribution']}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(event) =>
                inputChangeHandler("expected-return", event.target.value)
              }
              value={userInput['expected-return']}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(event) =>
                inputChangeHandler("duration", event.target.value)
              }
              value={userInput['duration']}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </>
  );
};

export default UserInput;
