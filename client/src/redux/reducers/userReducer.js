import { GET_ALL_USERS, GET_USER } from "../types"


const initialState={
    users:[],
    user:null
}

function userReducer(state=initialState,{type,payload}){
    switch(type){
        case GET_ALL_USERS:
            return {
                ...state,users:payload
            }
        case GET_USER:
            return {
                ...state,user:payload
            }
        default:
            return state
    }
}
export default userReducer