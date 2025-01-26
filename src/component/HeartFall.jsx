import React from 'react';
import { Snowfall } from 'react-snowfall';
import './HeartFall.css'
import heart from '../assets/img/download.png';
const snowflake2 = document.createElement('img')
snowflake2.src = heart
// snowflake2.width = 500
// snowflake2.height = 500

const HeartFall = () => {

    return (
        <div>
            <Snowfall
                color='red'

                style={{ position: 'fixed', }}
                images={[snowflake2]}
                snowflakeCount={100}
            />
        </div>

    );
};

export default HeartFall;
