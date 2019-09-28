import {ACTION_TYPES as A} from "./actionTypes";
import {initialState} from "../data/initialState";
import {baseUrl} from "../data/baseUrl";

const axios = require('axios');
export const fetchListings = () => (dispatch)  => {
    dispatch(listingsLoading(true));

    return fetch(baseUrl+ 'listings')
        .then(response => {
            if (response.ok){
                console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n from the server");
                return response;
            }else {
                let err = new Error(`ERROR ${response.status} : ${response.statusText}`);
                err.response = response;
                throw err;
            }
        },  error => {
            throw new Error(error.message)}).then(response => response.json())
        .then(listings => dispatch(getListings(listings)))
        .catch(err => {
            console.log(err);
            dispatch(listingsFailed(err.message))});
}

export const postListings = (listing) => dispatch => {
    // listing.date = new Date();
    // listing.featured = false;
    // listing.ownerId =1;
    return fetch(baseUrl + 'listings',
        {
            method : 'post',
            body : listing,
            headers : {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        }).then(response => {
        if (response.ok){
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n from the server");
            return response;
        }else {
            let err = new Error(`ERROR ${response.status} : ${response.statusText}`);
            err.response = response;
            throw err;
        }
    },  error => {
        throw new Error(error.message)}).then(response => response.json())
        .then(r => r.json())
        .then(l => dispatch(getListings(l)))
        .catch(e => dispatch(listingsFailed(e)));
}

export const getListings = (listings ) => ({
    type : A.GET_LISTINGS,
    payload : listings
});

export const listingsLoading = () => ({
    type : A.LISTING_LOADING
});

export const listingsFailed = (e) => ({
    type : A.LISTING_FAILED,
    payload : e
});

export  const fetchTestimonials = () => dispatch => {
    dispatch(testimonialsLoading(true));

    return fetch(baseUrl + 'testimonials')
        .then(r => {
            if (r.ok){
                return r;
            }
            else {
              let  err = new Error(`ERROR ${r.status} : ${r.statusText}`);
              err.response = r;
              throw err;
            }
        }, e => {throw new Error(e.message)})
        .then(r => r.json())
        .then(test => dispatch(getTestimonials(test)))
        .catch(e=> dispatch(testimonialsFailed(e)));
}

export const getTestimonials = (testimonials ) => ({
    type : A.GET_TESTIMONIALS,
    payload : testimonials
});


export const testimonialsLoading = () => ({
    type : A.TESTIMONIAL_LOADING
});

export const testimonialsFailed = (e) => ({
    type : A.TESTIMONIAL_FAILED,
    payload : e
});

export const fetchServices = () => dispatch => {
    dispatch(servicesLoading(true));

    return fetch(baseUrl + 'services')
        .then(r => {
            if (r.ok) return r;
            else {
               const err = new Error(`ERROR ${r.status} : ${r.statusText}`);
            }
        }, e => {throw new Error(e.message)})
        .then(r => r.json())
        .then(serv => dispatch(getServices(serv)))
        .catch(e => dispatch(servicesFailed(e)));
}
export const getServices = (testimonials) => ({
    type : A.GET_SERVICES,
    payload : testimonials
});

export const servicesLoading = () => ({
    type : A.SERVICE_LOADING
});

export const servicesFailed = (e) => ({
    type : A.SERVICE_FAILED,
    payload : e
});

