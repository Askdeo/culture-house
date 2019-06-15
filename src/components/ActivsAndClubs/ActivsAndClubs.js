import React from 'react'
import { Link } from 'react-router-dom'


import classes from './ActivsAndClubs.css'

const ActivsAndClubs= (props) => {
    return (
        <Link to={props.link}>
            <div className={classes.ActivsAndClubs}>
            <h1>{props.title}</h1>
            <img src={props.image} alt="img"/>
                {/* <Button/> */}
            </div>
        </Link>
    );
};

export default ActivsAndClubs;
