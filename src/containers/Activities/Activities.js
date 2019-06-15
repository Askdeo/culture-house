import React, { useState } from 'react'

import classes from './Activities.css'

import ActivsAndClubs from '../../components/ActivsAndClubs/ActivsAndClubs';

import Circus from '../../assets/images/Activities/Circus.jpg'
import ClubForYough from '../../assets/images/Activities/ClubForYough.jpg'
import Clubs from '../../assets/images/Activities/Clubs.jpg'
import DanceArt from '../../assets/images/Activities/DanceArt.jpg'
import DecorativeAndAppliedArt from '../../assets/images/Activities/DecorativeAndAppliedArt.jpg'
import FolkloreArt from '../../assets/images/Activities/Folklore.png'
import PaintingArt from '../../assets/images/Activities/PaintingArt.jpg'
import SigningArt from '../../assets/images/Activities/SingingArt.jpg'
import TheaterArt from '../../assets/images/Activities/TheaterArt.jpg'


const Activities = (props) => {

    const [Activities, setActivities] = useState([
        {
            title: 'Цирковое искусство',
            img: Circus,
            link: '/activities/circus'
        },
        {
            title: 'Клуб Раннего развития',
            img: ClubForYough,
            link: '/activities/club-for-yough'
        },
        {
            title: 'Клубы по интересам',
            img: Clubs,
            link: '/activities/clubs'
        },
        {
            title: 'Танцевальное искусство',
            img: DanceArt,
            link: '/activities/dance-art'
        },
        {
            title: 'Декоративно-прикладное искусство',
            img: DecorativeAndAppliedArt,
            link: '/activities/decorative-art'
        },
        {
            title: 'Фольклорное искусство',
            img: FolkloreArt,
            link: '/activities/folklore-art'
        },
        {
            title: 'Вокальное искусство',
            img: SigningArt,
            link: '/activities/singing-art'
        },
        {
            title: 'Театральное искусство',
            img: TheaterArt,
            link: '/activities/theater-art'
        },
        {
            title: 'Изобразительное искусство',
            img: PaintingArt,
            link: '/activities/painting-art'
        },
    ])

    const AllActivs = Activities.map(activ => {
        return(
            <ActivsAndClubs title={activ.title} image={activ.img} link={activ.link}/>
        )
    })

    return (
        <div className={classes.Activities}>
                {AllActivs}
        </div>
    )
};

export default Activities;
