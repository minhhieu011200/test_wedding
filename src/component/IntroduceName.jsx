import React from 'react';
import { LiaHeartSolid } from 'react-icons/lia';
import './IntroduceName.css'


function IntroduceName(props) {
    return (
        <div className='introduce-name text-red-2'>

            <span>
                Minh Hiếu
            </span>
            <span>
                &nbsp;
                <LiaHeartSolid size={30} color='rgb(225, 79, 79)' opacity={0.9} className='heart-infinite' />
                &nbsp;
            </span>
            <span>
                Quỳnh Như
            </span>
            <div>

                <p style={{ fontFamily: 'Dancing Script, serif', fontSize: '20px', fontWeight: 700, letterSpacing: '3px' }} >23 tháng 03, 2025</p>
            </div>
        </div >
    );
}

export default IntroduceName;