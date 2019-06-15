import React from 'react';
import { Link } from 'react-router-dom'
import Slider from "react-slick";

import  classes from './SliderForActivs.css';


// images for slider

import img1 from '../../assets/images/Activities/Circus.jpg';
import img2 from '../../assets/images/Activities/ClubForYough.jpg';
import img3 from '../../assets/images/Activities/Clubs.jpg';
import img4 from '../../assets/images/Activities/DanceArt.jpg';
import img5 from '../../assets/images/Activities/DecorativeAndAppliedArt.jpg';
import img6 from '../../assets/images/Activities/Folklore.png';
import img7 from '../../assets/images/Activities/PaintingArt.jpg';
import img8 from '../../assets/images/Activities/SingingArt.jpg';
import img9 from '../../assets/images/Activities/TheaterArt.jpg';


export const Sliders = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3500,
        draggable: true,
        pauseOnDotsHover: true,
        pauseOnFocus: true
      };
    return (
      <Slider {...settings}>
        <div className={classes.ImageSliderForAcrivsContainer}>
          <img className={classes.ImageSldierForActivs} src={img1} alt="ims"/>
          <Link to='/activities'><h2>Цирковое Искусство</h2></Link>
        </div>
        <div className={classes.ImageSliderForAcrivsContainer}>
            <img className={classes.ImageSldierForActivs} src={img2} alt="ims"/>
            <Link to='/activities'><h2>Клуб Раннего Развития</h2></Link>
        </div>
        <div className={classes.ImageSliderForAcrivsContainer}>
            <img className={classes.ImageSldierForActivs} src={img3} alt="ims"/>
            <Link to='/activities'><h2>Клубы По Интересам</h2></Link>
        </div>
        <div className={classes.ImageSliderForAcrivsContainer}>
            <img className={classes.ImageSldierForActivs} src={img4} alt="ims"/>
            <Link to='/activities'><h2>Танцевальное Искусство</h2></Link>
        </div>
        <div className={classes.ImageSliderForAcrivsContainer}>
            <img className={classes.ImageSldierForActivs} src={img5} alt="ims"/>
            <Link to='/activities'><h2>Декоративно-Прикладное Искусство</h2> </Link>
        </div>
        <div className={classes.ImageSliderForAcrivsContainer}>
            <img className={classes.ImageSldierForActivs} src={img6} alt="ims"/>
            <Link to='/activities'><h2>Фольклорное Искусство</h2></Link>
        </div>
        <div className={classes.ImageSliderForAcrivsContainer}>
            <img className={classes.ImageSldierForActivs} src={img7} alt="ims"/>
            <Link to='/activities'><h2>Изобразительное Искусство</h2></Link>
        </div>
        <div className={classes.ImageSliderForAcrivsContainer}>
            <img className={classes.ImageSldierForActivs} src={img8} alt="ims"/>
            <Link to='/activities'><h2>Вокальное Искусство</h2></Link>
        </div>
        <div className={classes.ImageSliderForAcrivsContainer}>
            <img className={classes.ImageSldierForActivs} src={img9} alt="ims"/>
            <Link to='/activities'><h2>Театральное Искусство</h2></Link>
        </div>
      </Slider>
    )
}



export default Sliders;