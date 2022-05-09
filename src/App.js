import React, {  useEffect } from "react";
import Header from "./pages/header";
import MainUnit from "./pages/mainUnit";
import DayliWeather from "./pages/dayliWeather";
import {  useDispatch, useSelector } from 'react-redux';
import {
    gotCarrentCity,
    gotCarrentWeather,
    gotFuturetWeather,
} from "./servise/servise";

function App() {
    const dispatch = useDispatch();

    const city = useSelector(state => state.searchReducer.search)
    const coordinates = useSelector(state => state.gotWeatherReducer.coordinates)
    const weatherData = useSelector(state => state.gotWeatherReducer.dataWeather )
    const futureWeatherData = useSelector(state => state.gotWeatherReducer.weatherForecast)
    
    
    const updateSearchList = (data) => {
        dispatch({type: "UPDATE_DATA", data})
    }
    useEffect(() => {
        gotCarrentCity(city).then((data) => updateSearchList(data));
    }, [city]);

    const updateCurrentCityData = (data) => {
        dispatch({type: "UPDATE_DATA_WEATHER", data})
    }

    const updateFutureWeatherData = (data) => {
        dispatch({type: "UPDATE_FORCAST_WEATHER", data})
    }

    useEffect(() => {
        gotCarrentWeather(coordinates).then((data) =>
            updateCurrentCityData(data)
        );

        document.getElementById("cityInput").value = "";
    }, [coordinates]);

    useEffect(() => {
        gotFuturetWeather(coordinates).then((data) =>
            updateFutureWeatherData(data)
        );
    }, [weatherData]);

    // console.log(futureWeatherData);

    return (
        <>
            <Header
            ></Header>
            {weatherData.cod === 200 ? (
                <MainUnit currentCityData={weatherData}></MainUnit>
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
