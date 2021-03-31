import React, { useState, useEffect } from 'react';
import axios from 'axios';



function BodyComponent(){
    const [nasaInfo, setNasaInfo] = useState([]);
    const [year, setYear] = useState(2021);
    const [month, setMonth] = useState(3);
    const [day, setDay] = useState(30);
    const [todaysDate, setTodaysDate] = useState()

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
        axios.get(

        )
        .then((res) => {
            console.log(res.data);
            setNasaInfo(res.data);
        })
        .catch((err) => console.log(err));
    },[year, month, day])
    return (

    )
}

