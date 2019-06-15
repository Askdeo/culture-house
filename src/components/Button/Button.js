import React from 'react'

import classes from './Button.css';
import ArrowDown from '../../assets/images/Button.png';

const Button = (props) => {
    return (
        <div className={classes.ButtonContainer}>
            <button onClick={props.onClick}>
                <img className={classes.ArrowDown} src={ArrowDown} alt="Arrow Down"/>
            </button>
        </div>
    )
}

export default Button;
