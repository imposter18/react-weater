const initialState = {
    coordinates: [],
    dataWeather: "no data",
    weatherForecast : {}
}


export const gotWeatherReducer = (state = initialState, action)=>{
    switch(action.type){

        case("UPDATE_COORDINATES"):
            return {...state, coordinates: action.data}

        case "UPDATE_DATA_WEATHER":
            return {...state, dataWeather: action.data}
        case "UPDATE_FORCAST_WEATHER":
            return {...state, weatherForecast: action.data}
            
        default:
            return state 
           
    }
};