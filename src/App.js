import "./App.css";
import React, { useState, Component } from "react";
import DateInput from "./Components/DateInput";
import Photo from "./Components/Photo.js";

class App extends Component {

  //will be used to fetch and update the photo, and will need to be passed to the Photo component to render.
  state = {
    date: "",
    photo: ""
  };

//Fetching the APOD. If there is no date entered into the form, then it will return and show today's image
  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }

  //Displaying The Photo
  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

//update the state, and pass function down as a prop to DateInput. function will be called when the form is submitted, and update the state using the value entered into the form.

changeDate = e => {
  e.preventDefault();
  let dateFromInput = e.target[0].value;
  this.setState({ date: dateFromInput });
  this.getPhoto(dateFromInput);
  console.log(e.target);
};

handleClick = () => {
  console.log("clicked");
};

render() {
  return (
    <div>
      <h1>NASA's Astronomy Picture of the Day</h1>
      <DateInput
       changeDate={this.changeDate}
       date={this.state.date} />
      <Photo photo={this.state.photo} />
    </div>
  );
}
}

export default App;
