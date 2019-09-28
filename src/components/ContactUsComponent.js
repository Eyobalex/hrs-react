import React, {Component} from 'react';

export default class Contact extends Component{
    render() {
        return (
            <main className="container">
                <div className="row bg-light">
                    <div className="col-9">
                        <h3>Contact Us</h3>
                    </div>
                    <hr/>
                </div>


                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <form>
                            <div className="form-group row">
                                <label htmlFor="firstName" className="col-md-2 col-form-label">First Name</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" id="firstName" name="firstName"
                                           placeholder="First Name"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="lastName" className="col-md-2 col-form-label">Last Name</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" id="lastName" name="lastName"
                                           placeholder="Last Name"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="telnum" className="col-12 col-md-2 col-form-label">Phone Number</label>
                                <label htmlFor="areacode" className="col-form-label sr-only">Area code</label>
                                <div className="col-5 col-md-3">
                                    <input type="tel" className="form-control" id="areacode" placeholder="Area Code"
                                           name="areacode"/>
                                </div>
                                <div className="col-7 col-md-7">
                                    <input type="tel" className="form-control" id="telnum" name="telnum"
                                           placeholder="Phone Number"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="emailId" className="col-md-2 col-form-label">Email</label>
                                <div className="col-md-10">
                                    <input type="email" className="form-control" id="emailId" name="emailId"
                                           placeholder="Email"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6 offset-md-2">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="approve" name="approve"/>
                                            <label htmlFor="approve" className="form-check-label"><strong>Can we contact
                                                you?</strong></label>
                                    </div>
                                </div>
                                <div className="col-md-3 offset-md-1">
                                    <select name="optCont" id="" className="form-control">
                                        <option value="tel">Phone</option>
                                        <option value="email">Email</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="feedback" className="col-md-2 col-form-label">Feedback</label>
                                <div className="col-md-10">
                                    <textarea className="form-control" id="feedback" name="feedback" rows="12"
                                              placeholder="Please leave your feedback"></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="offset-md-2 col-md-10">
                                    <button className="btn btn-secondary" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-md">
                    </div>
                </div>

            </main>
        );
    }
}