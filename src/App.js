import "./App.css";
import React, { useState, useEffect } from "react";
import Loader from './Components/Loader/Loader';
// import DateInput from "./Components/DateInput";
import PhotoOfTheDay from './Components/PhotoOfTheDay/PhotoOfTheDay.js';
import axios from 'axios';

function App() {
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [explanation, setExplanation] = useState();
  const [copyright, setCopyright] = useState();

  const apiKey = 'CyqCxRyaRcKUgKJHGf8LWvzM1WaQCSEa7q28I73T';
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      )
      .then(response => {
        setDate(response.data.date);
        setTitle(response.data.title);
        setUrl(response.data.url);
        setExplanation(response.data.explanation);
        setCopyright(response.data.copyright);
      })
      .catch(error => console.log(error));
  }, []);
  // console.log(title);
  if (!url) return <Loader />;

return(

  <div className='App'>
    <p>
    {/* <Loader /> */}
        <PhotoOfTheDay
          date={date}
          title={title}
          url={url}
          explanation={explanation}
          copyright={copyright}
        />
    </p>
  </div>

)

}

export default App;
