import React from 'react';
import { Switch, Route } from 'react-router-dom';


import classes from './App.css';

import Layout from './containers/Layout/Layout';

import MainPage from './containers/MainPage/MainPage';
import Activities from './containers/Activities/Activities';
import AboutUs from './containers/AboutUs/AboutsUs';
import Documentation from './containers/Documentation/Documentation';
import Contacts from './containers/Contacts/Contacts';
import Festivals from './components/Festivals/Festivals';

import CircusClubs from './components/ActivsAndClubs/Circus/CircusClubs/CircusClubs';
import SingingArtClubs from './components/ActivsAndClubs/SigningArt/SingingArtClubs/SingingArtClubs';
import TheaterArtClubs from './components/ActivsAndClubs/TheaterArt/TheaterArtClubs/TheaterArtClubs';
import DanceArtClubs from './components/ActivsAndClubs/DanceArt/DanceArtClubs/DanceArtClubs';
import ClubForYoughClubs from './components/ActivsAndClubs/ClubForYough/ClubForYoughClubs/ClubForYoughClubs';
import PaintingArtClubs from './components/ActivsAndClubs/PaintingArt/PaintingArtClubs/SingingArtClubs';
import ClubsClubs from './components/ActivsAndClubs/Clubs/ClubsClubs/SingingArtClubs';
import DecorativeArtClubs from './components/ActivsAndClubs/DecorativeAndAppliedArt/DecorativeAndAppliedArtClubs/SingingArtClubs';
import FolkloreArtClubs from './components/ActivsAndClubs/FolkloreArt/FolkloreArtClubs/SingingArtClubs';

import AllClubsDetails from './components/ActivsAndClubs/AllClubsDetails/AllClubsDetails';

const App = (props) => {

  let routes = (
    <Switch>
      <Route path='/' exact component={MainPage}/>
      <Route path='/activities' exact component={Activities} />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/documentation' component={Documentation} />
      <Route path='/contacts' component={Contacts} />
      <Route path='/festivals' component={Festivals} />

      <Route path='/activities/:id' exact component={AllClubsDetails}/>
    </Switch>
  )

  return (
    <div className={classes.App}>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default App;
