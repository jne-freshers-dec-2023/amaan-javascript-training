import React,{useRef} from 'react';

const UseRefHook=()=>{
	const inputRef = useRef(0);
	
	const handleSubmit=()=>{
	alert(`Name: ${inputRef.current.value}`);
	}
	
	return(
	<>
	<h1>Hello</h1>
	<form onSubmit={handleSubmit}>
	<label>Name:</label>
	<input
	name="name"
	type="text"
	ref={inputRef}
	  
	  />
	  <button type="submit">Submit</button>
	</form>
	</>
	);
}
export default  UseRefHook;