import {ACTION_TYPES as A} from "../actionTypes";

export const Listings = (state = {isLoading : true, errors : null, listings : []}, action ) => {
    switch (action.type) {

        case A.GET_LISTINGS:
            return {...state, isLoading: false, errors: null, listings: action.payload}
        case A.LISTING_LOADING:
            return {...state, isLoading: true, errors: null, listings: []}
        case A.LISTING_FAILED:
            return {...state, isLoading: false, errors: action.payload, listings: []}
        default:
            return state;
    }
}