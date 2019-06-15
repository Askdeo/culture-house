import React from 'react'
import classes  from './Events.css';

const  Events = (props) => {
    return (
        <div className={classes.Events}>
            <div className={classes.TextContainer}>
                <h3 className={classes.Title}>{props.title}</h3>
                <h4 className={classes.Subtitle}>{props.subtitle}</h4>
                <p className={classes.EventsText}>{props.text}</p>
                <p className={classes.EventsDate}>{props.date}</p>
                <p className={classes.EventsAddress}>{props.address}</p>
                <p className={classes.AgeRestriction}>{props.ageRestriction}</p>
            </div>
            <img src={props.imageSrc} alt='Мероприятие' className={classes.EventImage}/>
        </div>
    );
};

export default Events;