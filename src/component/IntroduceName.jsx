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
            <p style={{ fontFamily: 'Sail, cursive', fontSize: '20px', fontWeight: 550 }} >23-03-2025</p>
        </div>
    );
}

export default IntroduceName;