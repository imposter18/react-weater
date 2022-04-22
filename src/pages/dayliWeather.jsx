import React,{useState} from "react";
import DailyTab from "./dailyTab";
import DayliWeatherInfo from "./dayliWeatherInfo";

export default function DayliWeather ({futureWeatherData}){
    let { daily} = futureWeatherData
    
    const [indexDay, updateIndexDay] = useState(null)
    console.log(indexDay)
    return(
        <>
        <div className="dayliWeatherBlock">
        {daily.map((data, index) =>
            <DailyTab  className={ `dayliWeather ${index === indexDay? 'isActive': ''}`}  key={`${data.name}_${index}`} 
                data={data}
                index={index}
                onClick={(index)=>updateIndexDay(index)}
            ></DailyTab>
        )}
            
        </div>
        {indexDay !== null ? <DayliWeatherInfo daily={daily[indexDay]}></DayliWeatherInfo> : null
            
        }
        </>
    )



}