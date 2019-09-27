import React from "react";

//create a const form with input box so that the user can enter his/her desired place

const Form = props => (
	<form onSubmit={props.getWeather}>  {/* create a form  */}
		<input type="text" name="city" placeholder="City..."/>  {/* An input box for the user to enter the city */}
		<input type="text" name="country" placeholder="Country..."/> {/* An input box for the user to enter the country */}
		<button>Get Weather</button>  {/* when this button is clicked, then the information on the users desired city will be displayed*/}
	</form>
);

export default Form;
