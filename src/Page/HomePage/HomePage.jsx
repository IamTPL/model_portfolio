import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Header from '../../Components/Header/Header';
import About from '../../Components/About/About';
import LatestProjects from '../../Components/LatestProjects/LatestProjects';
import Footer from '../../Components/Footer/Footer';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <LatestProjects></LatestProjects>
        </div>
    );
};

export default HomePage;
