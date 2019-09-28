import React, {Component} from 'react';

export default class About extends Component{
    render() {
        return (
            <main className="container">
                <div className="row bg-light">

                    <div className="col-9">
                        <h3>About Us</h3>
                    </div>

                    <hr/>
                </div>

                <div className="row row-content">
                    <div className="col-12 col-sm-6">
                        <h2>Our History</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores dicta earum
                            excepturi facere hic minima natus nesciunt obcaecati provident, quae quisquam repellat
                            repellendus sit voluptates? Accusamus adipisci alias debitis
                            dolores, fugiat hic incidunt ipsum iste labore maxime, obcaecati placeat ut velit? Debitis
                            eius expedita molestias perferendis repellat saepe vitae..</p>
                        <p>Lorem ipsum dolor sit voluptatem! Asperiores autem consequatur ipsum dolor sit voluptatem!
                            Asperiores autem consequatur ipsum dolor sit voluptatem! Asperiores autem consequatur
                            consequuntur. .</p>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <h2 className="card-header bg-secondary text-white">Facts at a glance</h2>
                            <div className="card-body">
                                <dl className="row">
                                    <dt className="col-6">Started</dt>
                                    <dd className="col-6">3 Feb. 2013</dd>
                                    <dt className="col-6">Major Stake Holder</dt>
                                    <dd className="col-6">Addisu Gemeda.</dd>
                                    <dt className="col-6">Last Year's Turnover</dt>
                                    <dd className="col-6">$1,250,375</dd>
                                    <dt className="col-6">Employees</dt>
                                    <dd className="col-6">40</dd>
                                    <dt className="col-6">HQ</dt>
                                    <dd className="col-6">123 yemen road, yemen</dd>
                                </dl>
                            </div>
                        </div>
                    </div>

                </div>


            </main>
        );
    }
}