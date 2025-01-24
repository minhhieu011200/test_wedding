import React from 'react';
import CountDownTimer from './CountDownTimer';
import IntroduceName from './IntroduceName';
import './Introduce.css'
import IntroduceBg from './IntroduceBg';


function Introduce(props) {
    const openLocation = () => {
        window.open('https://maps.app.goo.gl/yYUU3LY813RhKuVd7', '_blank');
    };
    return (
        <>
            <IntroduceBg />
            <div className='animate__animated animate__backInUp'>

                <IntroduceName />
                <CountDownTimer />
                <div>

                    <p className='text-red' style={{ fontFamily: 'Merriweather, serif', fontSize: '20px' }}>Tại nhà hàng Grand Palace Cộng Hòa</p>

                    <button class="custom-btn btn-15 my-1" onClick={openLocation}>
                        <span>Xem vị trí</span>
                    </button>
                </div>
            </div >
        </>
    );
}

export default Introduce;