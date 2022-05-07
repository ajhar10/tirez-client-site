import React from 'react';
import useProduct from '../../../custom_hook/useProduct';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useProduct();
    const homeProduct = products.slice(0, 6);
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
        </div>
    );
};

export default Products;