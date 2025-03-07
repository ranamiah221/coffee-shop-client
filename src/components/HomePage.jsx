import React from 'react';
import Banner from './Banner';
import Featured from './Featured';
import Coffees from './Coffees';
import Instragram from './Instragram';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Coffees></Coffees>
            <Instragram></Instragram>
        </div>
    );
};

export default HomePage;