import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Layout = ({ Component }) => {
    return (
        <>
            <Header></Header>
            <Component></Component>
            <Footer></Footer>
        </>
    );
};

export default Layout;
