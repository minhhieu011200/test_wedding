import React from 'react';
import test from '../assets/img/test.jpg';
import bg_2 from '../assets/img/test.svg';

import './IntroduceBg.css'
function IntroduceBg(props) {
    return (
        <div className='bg-introduce'>
            {/* <MyIcon className='background' /> */}
            <img className='background' src={bg_2} />
            <div className="foreground-wrapper">
                <div className='animate__animated animate__jackInTheBox'>

                    <img className='foreground animate__animated animate__tada ' src='/img/prewedding/ALAS0022.jpg' />
                </div>
            </div>

        </div>
    );
}

export default IntroduceBg;