import React from 'react';
import BottomSection from './BottomSection/BottomSection';
import Services from './Services/Services';
import Banner from './Banner/Banner'
import useTitle from '../../hooks/useTitle';

const HomePage = () => {
    useTitle('Home')
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