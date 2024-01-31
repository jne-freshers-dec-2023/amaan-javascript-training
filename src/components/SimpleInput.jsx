import { useState } from "react";

const SimpleInput = (props) => {
    const [name, setName] = useState('');

    const nameInputChangeHandler = (event)=>{
        setName(event.target.value)
    };
    const formSubmissionHandler=(event)=>{
        event.preventDefault();
        console.log(name);
    }

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" onChange={nameInputChangeHandler}/>
            </div>
            <button type="submit">Submit</button>
        </form>

    )
}
export default SimpleInput; 
