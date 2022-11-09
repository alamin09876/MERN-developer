import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import Carsoule from './Carsoule/Carsoule';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Services></Services>
            <div className='mx-auto '>
                <Link to="/services">
                <button className="btn btn-primary font-bold mx-auto my-10 flex justify-center ">See All</button>
            </Link></div>
        </div>
    );
};

export default Home;