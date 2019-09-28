import React, {Component} from "react";

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <footer className="bg-a">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-5 align-self-center">
                                <div className="text-center">
                                    <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i
                                        className="fa fa-google-plus fa-lg"></i>+</a>
                                    <a className="btn btn-social-icon btn-facebook"
                                       href="http://www.facebook.com/profile.php?id="> <i
                                        className="fa fa-facebook fa-large"></i></a>
                                    <a className="btn btn-social-icon btn-linkedin"
                                       href="http://www.linkedin.com/in/"><i className="fa fa-linkedin fa-lg"></i></a>
                                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i
                                        className="fa fa-twitter fa-lg"></i></a>
                                    <a className="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i
                                        className="fa fa-youtube fa-lg"></i></a>
                                    <a className="btn btn-social-icon" href="mailto:"><i
                                        className="fa fa-envelope fa-lg"></i></a>
                                </div>
                            </div>
                        </div>
                        <hr className="bg-light" />
                            <div className="row">
                                <div className="col-12 mt-3 text-center">
                                    <p>&copy;  Copyright HRS All Rights Reserved 2019.</p>
                                </div>
                            </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default FooterComponent;