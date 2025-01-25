import React from 'react';
import bgIntroduce from '../assets/img/bg-introduce-2.png';
import test from '../assets/img/test.jpg';
import { ReactComponent as MyIcon } from '../assets/img/test.svg';
// import myIcon from '../assets/img/test.svg';

import './IntroduceBg.css'
function IntroduceBg(props) {
    return (
        <div className='bg-introduce'>
            <MyIcon className='background' />
            {/* <img className='background' src={myIcon} /> */}
            <div className="foreground-wrapper">
                <div className='animate__animated animate__jackInTheBox'>

                    <img className='foreground animate__animated animate__tada ' src={test} />
                </div>
            </div>


            {/* <img src={bgIntroduce} width={430} height={430} /> */}

        </div>
    );
}

export default IntroduceBg;