import React from 'react';
import tiger from '../../../assets/tiger.jpg';
import game from '../../../assets/game.jpg';
import study from '../../../assets/study.jpg';
import wedding from '../../../assets/wedding.jpg';
import Slide from './Slide';

const Sliders = () => {
    const slideItems = [
        {
            prev: 4,
            id: 1,
            image: tiger,
         next:2
        },
        {
            prev: 1,
            id: 2,
            image: game,
         next:3
        },
        {
            prev: 2,
            id: 3,
            image: study,
         next:4
        },
        {
            prev: 3,
            id: 4,
            image: wedding,
         next:1
        },
    ]
    return (
        // <div>
        <div className="carousel w-full">
            {
                slideItems.map(slide=><Slide key={slide.id} slide={slide}/>)
            }            
            </div>
            // </div>
    );
};

export default Sliders;