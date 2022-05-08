import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { quantity } = product;
    const url = `https://floating-woodland-12921.herokuapp.com/products/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    //Reduce Quantity
    const handleReduceQuantity = () => {
        let newQuantity = quantity - 1;
        const newProduct = { ...product, quantity: newQuantity }
        //copy all previous data if exist in product and setup new quantity 
        setProduct(newProduct);
        fetch(`https://floating-woodland-12921.herokuapp.com/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
    }

    //Restoke Handle 
    const handleRestoke = (event) => {
        event.preventDefault();
        const number = parseInt(event.target.quantity.value);
        let newQuantity = quantity + number;
        const newProduct = { ...product, quantity: newQuantity }
        //copy all previous data if exist in product and setup new quantity 
        setProduct(newProduct);
        fetch(`https://floating-woodland-12921.herokuapp.com/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
    }

    return (
        <div className="container">
            <div className="row" style={{ margin: '100px 0' }}>
                <div className="col-sm-12 col-md-12 col-lg-8">
                    <div className="card h-100 shadow-sm w-75">
                        <img src={product.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6>Name - {product.name}</h6>
                            <div className="clearfix mb-3">
                                <span className="float-start badge rounded-pill bg-info">Quantity: {quantity} </span>
                                <span className="float-end price-hp">{product.price}$</span>
                            </div>
                            <h4 className="card-title">{product.description}</h4>
                            <h6>Supplier - {product.supplier}</h6>
                            <div className="text-center my-4">
                                <button onClick={() => handleReduceQuantity()} className='btn btn-danger'>Delivered</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 my-5">
                    <h4>Restock</h4>
                    <form onSubmit={handleRestoke} className='p-3' style={{ backgroundColor: "rgba(0,0,255,0.1)" }}>
                        <input className='rounded border-0 ' type="number" name="quantity" placeholder='quantity' required /><br />
                        <input className='btn btn-danger my-3' type="submit" value="Restoke" />
                    </form>
                </div>
            </div>

            <div className="row" style={{ margin: '100px 0' }}>
                <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center">
                    <Link to="/inventory" className="btn btn-info">Manage Inventory</Link>
                </div>
            </div>
        </div>
    );
};

export default Inventory;