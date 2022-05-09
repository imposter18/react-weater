const initialState = {
    data: "ggg"
}


export const dataReducer = (state = initialState, action)=>{
    switch(action.type){
        case "UPDATE_DATA":
            return {...state, data: action.data}
            break;
        default:
            return state 
            break;
    }
};