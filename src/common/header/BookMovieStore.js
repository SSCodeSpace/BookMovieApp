import { createStore } from "redux";


const userDetails = {
    "isLoggedIn": "false",
    "userToken": "",
    "baseAppURL": ""

}

function BookMovieReducer(state = userDetails, action) {

    switch (action.type) {
        case "LOAD_HOME":
            console.log('LOAD_HOME dispatch triggered with ' + action.payload)
            state = { ...state, "baseAppURL": action.payload }
            console.log('Inside redux store - ' + state.baseAppURL)
            return state;
        case 'FETCH_STATE': {
            return {
                ...state,
            } 
        }

        default:
            return state;
    }


}

export default createStore(BookMovieReducer);