import React from 'react'
import { NavLink } from 'react-router-dom';

import classes from './NavigationBar';



 const NavigationBar = (props) => {
    return (
        <div className={classes.NavigationBar}>
            <NavLink to='/'>
                Главная
            </NavLink>
            <NavLink to='/activities'>
                Коллективы
            </NavLink>
            <NavLink to='/about-us'>
                О нас
            </NavLink>
            <NavLink to='/documentation'>
                Документы
            </NavLink>
            <NavLink to='/contacts'>
                Контакты
            </NavLink>
        </div>
    );
};



export default NavigationBar;