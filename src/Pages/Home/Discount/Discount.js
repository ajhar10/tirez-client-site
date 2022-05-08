import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../../images/discount.jpeg"

const Discount = () => {
    return (
        <div className='discount my-5'>
            <h3 className='fw-bold'><span style={{ color: "orange" }}>DISCOUNT </span>PRODUCTS</h3>
            <div className="container-fluid w-50 bg-trasparent my-4 p-3" style={{ position: "relative" }}>
                <div className="card h-100 shadow-lg">
                    <img src={image} className="card-img-top" alt="Cycle-img" />
                    <div className="card-body">
                        <div className="clearfix mb-3">
                            <span className="float-start badge rounded-pill bg-danger">20% discount</span>
                        </div>
                        <h5 className="card-title">RIMINI, 24 SPEED, 600A  </h5>
                        <p className='fw-bold'>Price : <del>&euro;400 </del> <span className='px-2 text-primary'>&euro;320</span></p>
                        <div className="text-center my-4">
                            <Link to='/addItem' className="btn btn-info">Add Item</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Discount;