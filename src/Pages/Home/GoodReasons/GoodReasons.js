import React from 'react';
import { Card } from 'react-bootstrap';
import './GoodReasons.css';

const GoodReasons = () => {
    return (
        <div className="py-5 poppins-font">
            <div className="container">
                <div className="text-center pb-3">
                    <h1 className="text-danger">Reviews </h1>
                    <p>Our Beloved Customers Review.</p>
                </div>
                <div className="row good-reasons text-center">
                    <div className="col-md-4">
                        <Card className="m-3 p-3 shadow">

                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        {' '}
                                        Best bike shop ever! Very helpful service. They staff remember my name despite just coming in a few times.{' '}
                                    </p>
                                    <footer className="blockquote-footer bg-info h-50 rounded w-50 mx-auto text-white">
                                        <cite title="Source Title">T.J. Bunkall</cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-4">
                        <Card className="m-3 p-3 shadow">

                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        {' '}
                                        Tirez bike shop has a wonderful selection of bikes ! They will get you the bike you want or repair the bike .{' '}
                                    </p>
                                    <footer className="blockquote-footer bg-info h-50 rounded w-50 mx-auto text-white">
                                        <cite title="Source Title">Sergio</cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card className="m-3 p-3 shadow">

                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        {' '}
                                        Tirez is great and so is his staff. They are always willing to give advice on your biking needs. I highly recommend..{' '}
                                    </p>
                                    <footer className="blockquote-footer bg-info h-50 rounded w-50 mx-auto text-white">
                                        <cite title="Source Title">Lois O</cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoodReasons;