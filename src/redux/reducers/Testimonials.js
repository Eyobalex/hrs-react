import {initialState} from "../../data/initialState";
import {ACTION_TYPES as A} from "../actionTypes";

export const Testimonials = (state ={isLoading : true, errors : [], testimonials : [] }, action ) => {
    switch (action.type) {

        case A.GET_TESTIMONIALS:
            return {...state, isLoading: false, errors: [], testimonials: action.payload}
        case A.TESTIMONIAL_LOADING:
            return {...state, isLoading: true, errors: [], testimonials: []}
        case A.TESTIMONIAL_FAILED:
            return {...state, isLoading: false, errors: action.payload, testimonials: []}
        default:
            return state;

    }
}