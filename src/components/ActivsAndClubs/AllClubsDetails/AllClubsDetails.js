import React, { useState } from 'react'

import classes from './AllClubsDetails.css';

const AllClubsDetails = (props) => {

    const [ allClubsDetails, setAllClubsDetails] = useState({
        circus: [
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            }
        ],
        singing: [
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            }
        ],
        painting: [
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            }
        ],
        forYough: [
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
        ],
        AppliedArt: [
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            }
        ],
        Folklore: [
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            }
        ],
        DanceArt: [
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            }
        ],
        Clubs: [
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            }
        ],
        Decorative: [
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            }
        ],
        Theater: [
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            },
            {
                'title': 'Title',
                'subtitle': '',
                'img': '',
                'director': 'Дианов'
            }
        ]
    })

    return (
        <div className={classes.SingingArtClubs}>
            <div className={classes.SingingArtClubsContainer}>
                <div className={classes.SingingArtClubsDescription}>
                    <h1 className={classes.SingingArtClubsTitle}>
                        Коллектив ***
                    </h1>
                </div>
                <div className={classes.SingingArtClubsPics}>

                </div>
            </div>
            <div className={classes.SingingArtClubsContainer} >
                <div className={classes.SingingArtClubsPics}>

                </div>
                <div className={classes.SingingArtClubsDescription}>
                    <h3></h3>
                    <h4></h4>
                    <p></p>
                </div>
            </div>
            <div className={classes.SingingArtClubsContainer}>
                <div className={classes.SingingArtClubsDescription}>
                    <h3></h3>
                    <h4></h4>
                    <p></p>
                </div>
                <div className={classes.SingingArtClubsPics}>
                    
                </div>
            </div>
            <div className={classes.SingingArtClubsContainer}>
                <div className={classes.SingingArtClubsPics}>

                </div>
                <div className={classes.SingingArtClubsDescription}>
                    <h3></h3>
                    <h4></h4>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default AllClubsDetails;