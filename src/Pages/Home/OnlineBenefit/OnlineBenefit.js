import React from 'react';
import image from "../../../images/model.png"
import './OnlineBenefit.css'
const OnlineBenefit = () => {
    return (
        <>
            <hr className='w-75 mx-auto' />
            <div className='container my-5 '>
                <div className='model-section'>
                    <div className='model my-5'>
                        <img src={image} alt="model.img" />
                    </div>
                    <div className='model-content d-flex flex-column align-items-start ps-4 my-3'>
                        <h1 className='text-info fw-bold'>Direct to Consumer Pricing</h1>
                        <h3 className='fw-bold text-black-50'>Ride More For Less with Polygon Bikes</h3>
                        <p className='d-flex flex-wrap'>Why buy from Bikes Online? The Polygon bikes in our online bike shop are often half the price of comparable bikes in the market, and that is due to our direct to consumer business model. We source high-quality bikes from the manufacturer, cut out the middle-men, and pass on the savings to you - where they belong.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OnlineBenefit;