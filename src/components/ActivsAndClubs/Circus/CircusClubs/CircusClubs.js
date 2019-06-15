import React from 'react'
import classes  from './CircusClubs.css';

const CircusClubs = (props) => {
    return (
        <div className={classes.CircusClubs}>
            <div className={classes.CircusHeader}>
                <div className={classes.CircusInfo}>
                    <div className={classes.CircusTitle}>
                        <h3>
                            Ведущий творческий коллектив г.Москва,
                            коллектив циркового искусства.
                        </h3>
                        <h2> "На Бис!"</h2>
                    </div>
                    <p className={classes.CircusText}>

                    </p>
                </div>
                <div className={classes.CircusDirector}>
                    <h3 className={classes.CircusTitle}>
                        Руководитель Дианов Ахмед Белянович
                    </h3>
                    <img src="" alt=""/>
                    <p className={classes.CircusText}>

                    </p>
                </div>
            </div> 
            <div className={classes.CircusPics}>

            </div>
        </div>
    )
}

export default CircusClubs;
