import React from 'react';
import { Link } from 'react-router-dom';
import '../Products/Products.css'

const Product = ({ product }) => {
    const { name, description, image, price, quantity, supplier } = product;
    return (

        <div className="col">
            <div className="card h-100 shadow-sm">
                <img src={image} className="card-img-top" alt="Cycle-img" />
                <div className="card-body">
                    <div className="clearfix mb-3">
                        <span className="float-start badge rounded-pill bg-primary">{quantity} available</span> <span className="float-end price-hp">{price}&euro;</span>
                    </div>
                    <h5 className="card-title">{name}</h5>
                    <div className="text-center my-4">
                        <Link to='/service' className="btn btn-warning">Buy</Link>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Product;