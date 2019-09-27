import React from 'react';
import './weather.css'; //importing file css 

import Titles from './components/Titles';  //import Titles 
import Forms from './components/Forms';  //import Forms
import Weather from './components/Weather';  //import Weather

const API_KEY = "c3e2450390a7ddd288819a6944c3c4d2";  //API Key, that authenticates the source of an API request

//The next step is to initialise a component

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  } // initialising a state containing an object

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value; //create a variable for city 
    const country = e.target.elements.country.value; //create a variable for country
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`); //create a variable that containsan await function which fetches the API 
    const data = await api_call.json(); //convert api_call to a json 

    if (city && country) {  //using if/else statement to determine whether user has entered a valid city and country, which will then display the weather information
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {  //else if the user entered an invalid input, the weather information will not display
      this.setState({
        temperature: undefined, //if this happens, the code will automatically give an error
        city: undefined,  // the data is set to undefined 
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values." //an error message that will appear when an invalid entry was added
      });
    }
  }
  
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Forms getWeather={this.getWeather} />

                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  /> {/* using this.state to call on the state that was created and assign the details from the API */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;