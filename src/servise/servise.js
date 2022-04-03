export { gotCarrentCity, gotCarrentWeather, gotFuturetWeather };

function gotFuturetWeather(coordinates) {
    let [lat, lon] = coordinates;
    return fetch(
        `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=6fc4a14a5e3c0def761ec7bce1909234&lang=ru`
    ).then((response) => response.json());
}

function gotCarrentWeather(coordinates) {
    let [lat, lon] = coordinates;
    return fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=6fc4a14a5e3c0def761ec7bce1909234&lang=ru`
    ).then((response) => response.json());
}
function gotCarrentCity(city) {
    return fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=6fc4a14a5e3c0def761ec7bce1909234`
    ).then((response) => response.json());
}
