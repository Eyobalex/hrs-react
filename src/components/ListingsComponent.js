import React, {Component} from 'react';
import ReactDom from 'react-dom';

import {Col, Row, Card, CardHeader, CardFooter, CardText, CardTitle, CardImg, CardBody, CardLink, CardImgOverlay} from 'reactstrap';
import {Link} from "react-router-dom";


export default class Listings extends Component{

    render() {
        return (
            <main className="container">

                <Row className=" row-content">
                    <h2 className="col-12 mr-auto display-4">All Listings </h2>

                    {this.props.listings.map(listing => {
                return (
                            <Col sm={6} md={4} >
                                <Card className={"mt-4"}>
                                    <CardHeader>
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <CardImg src={listing.image} className={"img-thumbnail card-img-top embed-responsive-item"} alt={listing.title} width="100%" />
                                            <CardImgOverlay>
                                                <CardTitle>
                                                    <h2 className="text-light">{listing.title}</h2>
                                                </CardTitle>
                                            </CardImgOverlay>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText>
                                            {listing.description}
                                        </CardText>
                                    </CardBody>
                                    <CardFooter  >
                                        <Link to={`/listings/${listing.id}`} className={"page-link text-center"} >
                                               View Details
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </Col>

                )

            })}
                </Row>
            </main>
        )
    }
}