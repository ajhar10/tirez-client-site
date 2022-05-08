import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../../custom_hook/useProduct';
import Loading from '../../Shared/Loading/Loading';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useProduct();
    const homeProduct = products.slice(0, 6);
    if (products.length == 0) {
        return (<>
            <h3 className='fw-bold py-4 mt-2'>OUR <span className='fs-2' style={{ color: "orange" }}>PRODUCTS </span></h3>
            <Loading></Loading>
        </>)
    } else {
        return (
            <div className='products py-4'>
                <h3 className='fw-bold'>OUR <span className='fs-2' style={{ color: "orange" }}>PRODUCTS </span></h3>
                <div className="container-fluid bg-trasparent my-4 p-3" style={{ position: "relative" }}>
                    <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-3 g-3">
                        {
                            homeProduct.map(product => <Product key={product._id} product={product}></Product>)
                        }

                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center">
                    <Link to="/inventory" className="btn btn-info">Manage Inventory</Link>
                </div>
            </div>
        )
    };
};

export default Products;