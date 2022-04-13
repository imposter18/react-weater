import React, { useState, useEffect } from "react";
import Header from "./pages/header";
import MainUnit from "./pages/mainUnit";
import DayliWeather from "./pages/dayliWeather";
import {
    gotCarrentCity,
    gotCarrentWeather,
    gotFuturetWeather,
} from "./servise/servise";

function App() {
    let [city, updateCity] = useState("");
    let [cityData, updateCityData] = useState([]);
    let [currentCity, updateCurrentCity] = useState([]);
    let [currentCityData, updateCurrentCityData] = useState({});
    let [futureWeatherData, updateFutureWeatherData] = useState({});

    function update(value) {
        updateCity(value);
    }
    useEffect(() => {
        gotCarrentCity(city).then((data) => updateCityData(data));
    }, [city]);

    useEffect(() => {
        gotCarrentWeather(currentCity).then((data) =>
            updateCurrentCityData(data)
        );

        document.getElementById("cityInput").value = "";
    }, [currentCity]);

    useEffect(() => {
        gotFuturetWeather(currentCity).then((data) =>
            updateFutureWeatherData(data)
        );
    }, [currentCityData]);

    console.log(futureWeatherData);

    return (
        <>
            <Header
                cityData={cityData}
                updateItem={(value) => update(value)}
                updateCurrentCity={updateCurrentCity}
            ></Header>
            {currentCityData.cod === 200 ? (
                <MainUnit currentCityData={currentCityData}></MainUnit>
            ) : null}
            {futureWeatherData.hasOwnProperty("current") ? (
                <DayliWeather
                    futureWeatherData={futureWeatherData}
                ></DayliWeather>
            ) : null}
        </>
    );
}

export default App;
