import React from "react";

export default function DayliWeather ({futureWeatherData}){
    let {current :{dt}} = futureWeatherData
    // let df = 235673389076
    let dat = new Date(dt * 1000)
    console.log( dat)



    return(
        <div className="dayliWeather">
            {/* <span>{date}</span> */}

        </div>
    )



}