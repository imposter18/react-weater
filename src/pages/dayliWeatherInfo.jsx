import React from "react";

export default function DayliWeatherInfo({daily}){

    const {humidity,wind_speed,wind_gust, pressure,sunrise,sunset} = daily
    
    
    const getTime = (time)=>{
        const date = new Date(time * 1000)
        return date
    }
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
     }
       
    
    

    return (
        <div className="dayliWeatherInfo">
           <span> атмосферное давление {pressure} мм рт. ст</span>
           <span> рассвет {getTime(sunrise).toLocaleString("ru", options)},
                закат {getTime(sunset).toLocaleString("ru", options)}
           </span>
           <span> скорость ветра {wind_speed} м/с  с порывами до {wind_gust}м/с </span>
           <span> влажность {humidity}% </span>
          
        </div>
    )
}