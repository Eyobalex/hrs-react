import React, {Component} from "react";
import {Col, Row, Card, CardImg, CardText, CardBody, CardTitle, CardFooter, CardHeader} from "reactstrap";
import {Link} from "react-router-dom";

const RenderItems = ({item, err, isLoading}) => {

    if (isLoading){
        return <div> Loading</div>
    }
    else if (err) {
        return <div>{err}</div>
    }
    else {
        return (
            <Col sm={4} className={"mb-3"}>
                <Card>
                    <CardHeader>
                        {item.image ? <div className="embed-responsive embed-responsive-16by9"> <CardImg className="img-thumbnail card-img-top embed-responsive-item" top width="100%" src={item.image} alt={(item.name) ? item.name : item.title}/> </div> : <></>}
                        <CardTitle> <h4> {(item.name) ? item.name : item.title} </h4></CardTitle>

                    </CardHeader>
                    <CardBody>
                        <CardText >{(item.description) ? item.description: item.testimonial} </CardText>
                    </CardBody>
                    {item.price ? (
                        <CardFooter >
                            <Link to={`/listings/${item.id}`}>
                                View More
                            </Link>
                        </CardFooter>
                    ) : <></>}

                </Card>

            </Col>
        );
    }

}

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <main className={"container"}>
                <Row className={"row-content"}>
                    <h2 className="col-12 col-sm-9 mr-auto display-4">Recently posted listings</h2>
                    {this.props.listings.map(listing => <RenderItems item={listing} err={this.props.listingsErr} isLoading={this.props.listingsIsloading}/> )}
                 </Row>
                <Row className={"row-content"}>
                    <h2 className="col-12 mr-auto display-4">Our Services</h2>
                    {this.props.ser.map(ser => <RenderItems item={ser}/> )}
                </Row>
                <Row className={"row-content"}>
                    <h2 className="col-12 mr-auto display-4">Testimonials</h2>
                    {this.props.tes.map(tes => <RenderItems item={tes}/> )}
                </Row>
            </main>
        );
    }
}

export default HomeComponent;