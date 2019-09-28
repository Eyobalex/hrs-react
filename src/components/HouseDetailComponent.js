import React, {Component} from 'react';
import {Col, Row, CardTitle, Card, CardText, CardBody, CardImg, CardHeader, CardImgOverlay} from 'reactstrap';

export default class HouseDetail extends Component{
    render() {
        return (
            <main className="container">
                <Row className="row-content">
                    <Col>
                        <h2 className="col-12 col-sm-9 mr-auto display-4">{this.props.listing.title}</h2>

                        <Card>
                            <CardHeader>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <CardImg src={this.props.listing.image} className={"img-thumbnail card-img-top embed-responsive-item"} alt={this.props.listing.title} width="100%" />
                                </div>
                            </CardHeader>
                            <CardBody>
                                <CardText>
                                    {this.props.listing.description}
                                </CardText>
                                <CardText>
                                    <dl className="row">
                                        <dt className="col-6">Price</dt>
                                        <dd className="col-6">${this.props.listing.price}</dd>
                                        <dt className="col-6">Date</dt>
                                        <dd className="col-6"> {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(this.props.listing.date)))}</dd>
                                    </dl>
                                </CardText>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </main>
        );
    }
}