import { useState } from "react";

const SimpleInput = (props) => {
    const [name, setName] = useState('');
    const [nameIsValid, setNameIsValid] = useState(true);

    const nameInputChangeHandler = (event)=>{
        setName(event.target.value)
    };
    const formSubmissionHandler=(event)=>{
        event.preventDefault();
        if(name.trim() === ''){
            setNameIsValid(false);
            return;
        }

        console.log(name);
    }

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" onChange={nameInputChangeHandler}/>
            </div>
            {!nameIsValid && <p className="error-text">Name must not be empty</p> }
            <button type="submit">Submit</button>
            
        </form>

    )
}
export default SimpleInput; 
