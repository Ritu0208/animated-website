import React from 'react';
import web from '../images/web.svg';
import Comman from './Comman';

const Home = () => {
    return (
        <>
          <Comman name='Grow your Business' imgsrc={web} visit='/service' btnname='Get Started'/>
        </>
    );
}

export default Home;
