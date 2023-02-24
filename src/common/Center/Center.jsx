
import React from 'react';
import { Counter } from '../Counter/Counter';
import './Center.css';

export const Center = () => {

    return(
        <div className='centerDesign'>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </div>
    )
}