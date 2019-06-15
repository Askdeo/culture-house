import React from 'react';

import classes from './Layout';

import NavBar from '../../components/Navigation/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const Layout = (props) => {

    return (
        <div className={classes.Layout}>
            <NavBar/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
