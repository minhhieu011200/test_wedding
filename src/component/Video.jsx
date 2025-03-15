import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function Video() {
    const [playing, setPlaying] = useState(false);
    return (
        <div className='d-flex justify-content-center'>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=vbuy8kqNjhk"
                controls
                width="100%"
            // height="340px"
            />
        </div>
    );
}

export default Video;