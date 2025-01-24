import React from 'react';
import bgIntroduce from '../assets/img/bg-introduce-2.png';
import test from '../assets/img/test.jpg';
import './IntroduceBg.css'
function IntroduceBg(props) {
    return (
        <div className='bg-introduce'>
            <img className='background' src={bgIntroduce} />
            <div class="foreground-wrapper">
                <img className='foreground animate__animated animate__jackInTheBox' src={test} />
            </div>


            {/* <img src={bgIntroduce} width={430} height={430} /> */}

        </div>
    );
}

export default IntroduceBg;