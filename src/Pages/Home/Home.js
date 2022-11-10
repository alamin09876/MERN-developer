import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../title/Title';
import COurses from '../Courses/Courses/COurses';
import UpcomingCourses from '../upcomingCourses/UpcomingCourses';
import AboutMe from './AboutMe/AboutMe';
import Banner from './Banner/Banner';
import Carsoule from './Carsoule/Carsoule';
import Services from './Services/Services';


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <COurses></COurses>
            <div className='mx-auto '>
                <Link to="/services">
                <button className="btn btn-primary font-bold mx-auto my-10 flex justify-center ">See All</button>
            </Link></div>
            <AboutMe></AboutMe>
            <UpcomingCourses></UpcomingCourses>
        </div>
    );
};

export default Home;