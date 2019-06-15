import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavBar.css';


const NavBar = (props) => {
    
    return (
        <nav className={classes.NavBar}>
            <ul className={classes.LinksList}>
                <div>
                    <li>
                        <NavLink className={classes.Link} exact to='/'>
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={classes.Link} to="/activities">
                            Коллективы
                        </NavLink>
                        <NavLink className={classes.Link} to='/festivals'>
                            Фестивали
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={classes.Link} to="/about-us">
                            О нас
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={classes.Link} to="/documentation">
                            Документы
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={classes.Link} to="/contacts">
                            Контакты
                        </NavLink>
                    </li>
                </div>
            </ul>
        </nav>
      );
    
};


export default NavBar;