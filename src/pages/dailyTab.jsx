import React from "react";

export default function DailyTab ({data,index,onClick,className}){
    let {dt, temp:{day, night}, weather:[{description, icon}]} = data
    let month = ['Янв', 'Фев', 'Март', 'Апр','Май','Июнь', 'Июль' , 'Авг' ,' Сент', 'Окт', 'Ноя', 'Дек' ]
    let dayData = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб',]

    let dat = new Date(dt * 1000)
    let datDat = dat.getDate()
    let datMonth = dat.getMonth()
    let datDay = dat.getDay()
    return(
        <div onClick={()=>onClick(index)} className={className}>
            <span className="dayliWeather__dat">{` ${dayData[datDay]}, ${datDat} ${month[datMonth]}`}</span> 
            {/* <span>{` ${month[datMonth]}`}</span> 
            <span>{` ${month[datMonth]}`}</span>  */}
            <span>{`День ${day}`}</span>
            <span>{`Ночь ${night}`}</span>
            <span className="dayliWeather__img" ><img className="dayliWeather__icon" src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" /></span>
            <span>{` ${description}`}</span>

        </div>
    )



}