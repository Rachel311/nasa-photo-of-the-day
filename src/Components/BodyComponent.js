import React, { useState, useEffect } from "react";
import axios from "axios";

function BodyComponent() {
  const [nasaInfo, setNasaInfo] = useState([]);
  const [year, setYear] = useState(2021);
  const [month, setMonth] = useState(3);
  const [day, setDay] = useState(30);
  const [todaysDate, setTodaysdate] = useState(
    new Date().toUTCString().split(" ").splice(0, 4).join(" ")
  );

  const changeHandler1 = (e) => {
    setYear(e.target.value);
  };

  const changeHandler2 = (e) => {
    setMonth(e.target.value);
  };

  const changeHandler3 = (e) => {
    setDay(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=CcmGBnkxQhivVPDmnl999hJsnKeKXavVqHad5mtJ&date=${year}-${month}-${day}`
      )
      .then((res) => {
        console.log(res.data);
        setNasaInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, [year, month, day]);

  return (
    <div>
      <div>{todaysDate}</div>
      <img src={nasaInfo.url} />
      <p>Description... {nasaInfo.explanation}</p>
      <p>What Nasa photo of the Day do you want to see?</p>
      <>
        Year:
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={changeHandler1}
        />
        Month:
        <input
          type="text"
          placeholder="Month"
          value={month}
          onChange={changeHandler2}
        />
        Day:
        <input
          type="text"
          placeholder="Day"
          value={day}
          onChange={changeHandler3}
        />
      </>
    </div>
  );
}

export default BodyComponent;
