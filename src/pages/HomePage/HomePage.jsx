import React from 'react';
import BottomSection from './BottomSection/BottomSection';
import Services from './Services/Services';
import Sliders from './Sliders/Sliders';

const HomePage = () => {
    return (
        <div>
            {/* <Sliders /> */}
            <Services />
            <BottomSection/>
        </div>
    );
};

export default HomePage;