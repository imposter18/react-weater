import React from "react";

export default function MainUnit({currentCityData}) {
    let {name, main:{temp,feels_like, temp_min, temp_max, pressure}, weather:[{description,icon}], wind:{speed} } = currentCityData
    return (
        <div className="bodyWrapper">
            <div className="carentWeaterContainer">
                <div className="carrentWeater">
                    <h3 className="carrentWeater_city">{name}</h3>
                    <div className="carrentWeater_deg">
                        <span> {temp.toFixed(1)} °C</span>
                        <span> ощущается как {feels_like.toFixed(1)} °C</span>
                    </div>
                    <div className="carrentWeater_soon">{description}{<img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" /> }</div>
                    <div className="carrenrWeater_daily">
                        <div className="carrentWeater_day">минимальная температура {temp_min.toFixed(1)}</div>
                        {/* <i className="bi bi-dot"></i> */}
                        <div className="carrentWeater_night">максимальная температура {temp_max.toFixed(1)}</div>
                    </div>
                    <div className="carrentWeater_pressure">атмосферное давление {pressure} мм рт. ст</div>
                    <div className="carrentWeater_wind">ветер {speed} м/с</div>

                </div>
            </div>
        </div>
    );
}