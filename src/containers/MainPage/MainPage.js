import React from 'react';
import { connect } from 'react-redux';

import classes from './MainPage.css';

import SliderForActivs from '../../components/SliderForActivs/SliderForActivs';
import InsteadOfSlider from '../../components/Slider/InsteadOfSlider/InsteadOfSlider';
// import Slider from '../../components/Slider/Slider'
import Events from '../../components/Events/Events';
// import News from '../../components/News/News.js';
import Logo from '../../assets/images/Logo.PNG';
import VK from '../../assets/images/socialNet/icons8-vk-в-круге-96.png';
import Facebook from '../../assets/images/socialNet/icons8-facebook-96.png'
import Instagram from '../../assets/images/socialNet/icons8-instagram-96.png'
import Calendar from '../../assets/images/Calender.png'

const MainPage = (props) => {

    const events = props.events.map(event => {
        return (
            <Events 
                text={event.text}
                imageSrc={event.image}
                title={event.title}
                subtitle={event.subtitle}
                date={event.date}
                address={event.address}
                ageRestriction={event.ageRestriction}
                />
        )
    })
    
    return (
        <div className={classes.MainPage}>
            <div className={classes.ImageContainer}>
                <div className={classes.SocialContainer}>
                    <div>
                        <a href="https://vk.com/dkzvezdnii45"><img className={classes.Social} src={VK} alt="VK"/></a>
                        <p className={classes.SocialText}>Мы Вконтакте</p>
                    </div>
                    
                    <div>
                        <a href="https://www.facebook.com/groups/zvezdnii45/"><img className={classes.Social} src={Facebook} alt="Facebook"/></a>
                        <p className={classes.SocialText}>Мы на Facebook</p>
                    </div>
                    
                    <div>
                        <a href="https://www.instagram.com/paxra_dkzvezdnii/"><img className={classes.Social} src={Instagram} alt="Instagram"/></a>
                        <p className={classes.SocialText}>Мы в Instagram</p>
                    </div>
                </div>
                <img className={classes.Logo} src={Logo} alt="Дом Культуры Звёздный"/>
                <div className={classes.Calendar}>
                    <a style={{ textDecoration: 'none'}} href=""><img className={classes.CalendarIcon} src={Calendar} alt="Календарь"/>
                    <p>Расписание Занятий</p>
                    </a>
                </div> 
            </div>
            <SliderForActivs/>
            <InsteadOfSlider/>
            {/* <Slider/> */}
            {/* <News/> */}
            <hr/>
            <h2 className={classes.EventsHeader}>Ближайшие Мероприятия</h2>
            <div className={classes.EventsContainer}>
                {events}
            </div>
            <div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        events: state.events.events
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
