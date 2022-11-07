import React from 'react';
import BottomSection from './BottomSection/BottomSection';
import Services from './Services/Services';
import Banner from './Sliders/Banner/Banner';
import Sliders from './Sliders/Sliders';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            {/* <Sliders /> */}
            <Services />
            <BottomSection/>
        </div>
    );
};

export default HomePage;