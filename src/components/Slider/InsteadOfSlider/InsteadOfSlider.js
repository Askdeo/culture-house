import React from 'react'

import classes from './InsteadOfSlider.css'

const InsteadOfSlider = (props) => {
    return (
        <div className={classes.InsteadOfSlider}>
            <div>
                <h2 className={classes.Title}>Приглашаем!</h2>
            </div>
            <div className={[classes.SliderPics, classes.Banner1].join(' ')}>

            </div>
            <div className={[classes.SliderPics, classes.Banner2].join(' ')}>

            </div>
            <div className={[classes.SliderPics, classes.Banner3].join(' ')}>

            </div>
            <div className={[classes.SliderPics, classes.Banner4].join(' ')}>

            </div>
            <div className={[classes.SliderPics, classes.Banner5].join(' ')}>

            </div>
        </div>
    )
}

export default InsteadOfSlider;
