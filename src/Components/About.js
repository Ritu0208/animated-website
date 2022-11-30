import React from 'react';
import abt from '../images/abt.svg'
import Comman from './Comman';

const About = () => {
    return (
        <>
          <Comman name='Welcme to about page' imgsrc={abt} visit='/contact' btnname='Contact Now'/>
        </>
    );
}

export default About;
