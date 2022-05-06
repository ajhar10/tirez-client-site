import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>TIREZ BICYCLE SHOP</h4>

                        <h5 className="list-unstyled">
                            <li>01639076052</li>
                            <li>Dhaka, Bangladesh</li>
                            <li>10 Streeet Mirpur</li>
                        </h5>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Stuff</h4>

                        <h5 className="list-unstyled">
                            <li>Ajhar RImon</li>
                            <li>Emtiaz Shariar</li>
                            <li>Ali Bokhary</li>
                        </h5>
                    </div>

                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} TIREZ SHOP | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>








        // <footer className='text-center py-3 text-light bg-dark w-100 position-absolute bottom-0 start-0'>
        //     <p>Copyright &copy; Tirez LLC {new Date().getFullYear()} All right reserved.</p>
        // </footer>

    );
};

export default Footer;