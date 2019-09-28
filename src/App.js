import React, {Component} from 'react';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import {Route, Switch, withRouter} from "react-router-dom";
import Listings from "./components/ListingsComponent";
import HouseDetail from "./components/HouseDetailComponent";
import AboutUsComponent from "./components/AboutUsComponent";
import Contact from "./components/ContactUsComponent";
import {connect} from "react-redux";
import {fetchListings, fetchServices, fetchTestimonials, postListings} from "./redux/actionCreators";
import UploadListing from "./components/UploadComponent";

const mapStateToProps = state => {
    return {
        listing: state.listings,
        test : state.testimonials,
        serv : state.services,
        users : state.users
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchListing : () =>  {dispatch(fetchListings())},
    fetchTestimonial : () => {dispatch(fetchTestimonials())},
    fetchService : () => {dispatch(fetchServices())},
    postListing : (listing) => {dispatch(postListings(listing))}
});

class App extends Component {

    componentDidMount() {
        this.props.fetchListing();
        this.props.fetchTestimonial();
        this.props.fetchService();
    }

    render() {
        const Detail = ({match}) => {
           return <HouseDetail listing={this.props.listing.listings.filter(listing => listing.id === parseInt(match.params.id, 10))[0]} />
        }

        return (
            <>
                <HeaderComponent />
                <Switch>

                    <Route exact path={"/home"} component={() => <HomeComponent listings={this.props.listing.listings.filter(listing => listing.id === 1 || listing.id === 2 ||listing.id === 3 )}
                                                                                listingsErr={this.props.listing.errors}
                                                                                listingsIsloading={this.props.listing.isLoading}
                                                                                tes={this.props.test.testimonials}
                                                                                ser={this.props.serv.services}/>}/>
                    <Route exact path={"/listings"} component={ () => <Listings listings={this.props.listing.listings}/>} />
                    <Route exact path={"/listings/:id"} component={ Detail } />
                    <Route exact path={"/about"} component={ AboutUsComponent } />
                    <Route exact path={"/contact"} component={ Contact } />
                    <Route exsct path={"/upload"} component={ () => < UploadListing post={this.props.postListing}/>}/>

                </Switch>
                <FooterComponent />
            </>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (App));