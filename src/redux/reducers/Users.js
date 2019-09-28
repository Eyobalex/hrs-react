import {initialState} from "../../data/initialState";
import {ACTION_TYPES as A} from "../actionTypes";


export const Users = (state = initialState.users, action ) => {
    switch (action.type) {
        case A.GET_USERS:
            return {...state, isLoading: false, errors: [], users: action.payload}
        case A.USER_LOADING:
            return {...state, isLoading: true, errors: [], users: state.users.users}
        case A.USER_FAILED:
            return {...state, isLoading: false, errors: action.payload, users: state.users.users}

        default:
            return state;

    }
}