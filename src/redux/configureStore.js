import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {Users} from "./reducers/Users";
import {Listings} from "./reducers/Listings";
import {Testimonials} from "./reducers/Testimonials";
import {Services} from "./reducers/Services";
import {logger} from "redux-logger";
import {createForms} from "react-redux-form";
import {formState} from "../data/formState";

export const ConfigureStore = () => {
    return createStore(combineReducers({
        users : Users,
        listings : Listings,
        testimonials : Testimonials,
        services : Services,
        ...createForms({formState : formState})
    }),
        applyMiddleware(thunk, logger))
}



