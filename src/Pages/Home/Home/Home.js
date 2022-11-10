import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import About from '../../About/About';
import Appoinment from '../../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Appoinment></Appoinment>
            <About></About>
        </div>
    );
};

export default Home;