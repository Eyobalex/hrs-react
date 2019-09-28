import {initialState} from "../../data/initialState";
import {ACTION_TYPES as A} from "../actionTypes";

export const Services = (state = {isLoading : true, errors : [], services : [] }, action ) => {
    switch (action.type) {

        case A.GET_SERVICES:
            return {...state, isLoading: false, errors: [], services: action.payload}
        case A.SERVICE_LOADING:
            return {...state, isLoading: true, errors: [], services: []}
        case A.SERVICE_FAILED:
            return {...state, isLoading: false, errors: action.payload, services: []}

        default:
            return state;

    }
}