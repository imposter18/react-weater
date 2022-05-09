import { createStore, combineReducers,applyMiddleware  } from "redux";
import {searchReducer} from "./searchReducer"
import {dataReducer } from "./searchListReducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import {gotWeatherReducer} from './gotWeatherReducer'
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    searchReducer,
    dataReducer,
    gotWeatherReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()