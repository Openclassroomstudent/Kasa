import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import BannerImageHome from '../assets/banner-1.png'

const Home = () => {
    return (
        <div>
            <Banner img={BannerImageHome} text={"Chez vous,\n partout et ailleurs"} />
            <Card />     
        </div>
    );
};

export default Home;