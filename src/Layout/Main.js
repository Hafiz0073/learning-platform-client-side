import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import LeftSideNav from '../components/LeftSideNav/LeftSideNav';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto" >
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;