import React, { useState, useEffect } from 'react'



import classes from './Slider.css'

import banner1 from '../../assets/images/Slider/banner1.jpg';
import banner2 from '../../assets/images/Slider/banner2.jpg';
import banner3 from '../../assets/images/Slider/banner3.png';


const Slider = (props) => {


    const [ images, setImages ] = useState( [
        {
            index:0,
            image: banner1,
            className: classes.Banner1
        },
        {
            index:1,
            image: banner2,
            className: classes.Banner2
        },
        {
            index:2,
            image: banner3,
            className: classes.Banner3
        }
    ] )

    const [ currentImage, setCurrentImage ] = useState(images[0]);

    const nextImageHandler = () => {
        if(currentImage.index !==2) {
            setCurrentImage(images[currentImage.index + 1])
        }
        
    };
    const prevImageHandler = () => {
        if(currentImage.index !== 0) {
            setCurrentImage(images[currentImage.index - 1])
        }
        
    };


    return (
         <div className={classes.Slider}>
            <div>
                <img className={classes.SliderPics} src={currentImage.image} alt=""/>
            </div>
            <div>
                <button onClick={prevImageHandler}>Назад</button>
                <button onClick={nextImageHandler} >Вперёд</button>
            </div>
            
        </div>
    )
}
export default Slider;
