import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../Products/Products.css'

const Product = ({ product }) => {
    const { _id, name, description, image, price, quantity, supplier } = product;
    const navigate = useNavigate();
    const handleInventory = id => {
        navigate(`products/${id}`)
    }
    return (

        <div className="col">
            <div className="card h-100 shadow-sm">
                <img src={image} className="card-img-top" alt="Cycle-img" />
                <div className="card-body">
                    <div className="clearfix mb-3">
                        <span className="float-start badge rounded-pill bg-primary">{quantity} available</span> <span className="float-end price-hp">{price}&euro;</span>
                    </div>
                    <div className=''>
                        <h5 className="card-title">{name}</h5>
                        <p>{description}</p>
                        <p>Supplier: {supplier}</p>
                    </div>
                    <div className="text-center my-4">
                        {/* <Link to='/service' className="btn btn-warning">stock update</Link> */}
                        <Button onClick={() => handleInventory(_id)} variant="primary">stock update</Button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Product;