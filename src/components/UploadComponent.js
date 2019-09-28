import React, {Component} from 'react';
import {Control, Errors, LocalForm} from "react-redux-form";


export default class UploadListing extends Component{


    handleSubmit = val => {
        this.props.post(val);
    }

    render() {
        return (
            <main className="container">
                <div className="row bg-light">
                    <div className="col-9">
                        <h3>Upload New House</h3>
                    </div>
                    <hr/>
                </div>


                <div className="row row-content">
                    <div className="col-12">
                        <h3>Upload new house</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className="form-group row">
                                <label htmlFor="firstName" className="col-md-2 col-form-label">Title</label>
                                <div className="col-md-10">
                                    <Control.text type="text" className="form-control" id="title"  name="title" model={".title"}
                                           placeholder="Title"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="price" className="col-md-2 col-form-label">Price</label>
                                <div className="col-md-10">
                                    <Control.text type="number" className="form-control" id="price" name="price" model={".price"}
                                           placeholder="Price"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="image" className="col-md-2 col-form-label">Image</label>
                                <div className="col-md-10">
                                    <Control.file  className="form-control" id="image" name="image" model={".image"}
                                                  />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="feedback" className="col-md-2 col-form-label">Description</label>
                                <div className="col-md-10">
                                    <Control.textarea className="form-control" id="description" name="description" rows="12"
                                              placeholder="Please leave your description" model=".description"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="offset-md-2 col-md-10">
                                    <button className="btn btn-secondary" type="submit">Submit</button>
                                </div>
                            </div>
                        </LocalForm>
                    </div>
                    <div className="col-12 col-md">
                    </div>
                </div>

            </main>
        );
    }
}