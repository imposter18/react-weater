const initialState = {
    search: "267"
}


export const searchReducer = (state = initialState, action)=>{
    switch(action.type){
        case "UPDATE_SEARCH":
            return {...state, search: action.data}
            break;
        default:
            return state 
            break;
    }
};