import React from 'react';
import { Link } from 'react-router-dom';
import './Bannar.css';

const Bannar = () => {
    return (
        <div className="banner d-flex justify-content-center align-items-center poppins-font">
            <div className="text-white fw-bold text-uppercase text-center">
                <h1>TIME TO BYE</h1>
                <p>Enjoy Every moments</p>
                <button className="btn btn-outline-light m-3">About us</button>
                <button className="btn btn-info">Contact us</button>
            </div>
        </div>
    );
};

export default Bannar;