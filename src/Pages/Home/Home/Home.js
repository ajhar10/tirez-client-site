import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Bannar from '../Bannar/Bannar';
import Discount from '../Discount/Discount';
import GoodReasons from '../GoodReasons/GoodReasons';
import OnlineBenefit from '../OnlineBenefit/OnlineBenefit';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>

            <Bannar></Bannar>
            <Products></Products>
            <Discount></Discount>
            <OnlineBenefit></OnlineBenefit>
            <GoodReasons></GoodReasons>
            <Footer></Footer>
        </>
    );
};

export default Home;