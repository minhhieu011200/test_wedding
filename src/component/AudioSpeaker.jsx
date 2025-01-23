import React, { useEffect, useRef, useState } from "react";
import { ImVolumeHigh, ImVolumeMute2 } from "react-icons/im";
import './AudioSpeaker.css'
const AudioSpeaker = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.click(); // Programmatically trigger the click event
        }
    }, []);

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <div
                className="audio-speaker"
                style={{
                    position: "fixed",
                    bottom: "50px",
                    left: "50px",
                    backgroundColor: "#df4758",
                    borderRadius: "50%",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onClick={toggleAudio}
            >


                <audio ref={audioRef} autoPlay>
                    <source src="/audio/EmDongYIDo-DucPhucx911-9034315.mp3" type="audio/mp3" />
                </audio>

                {isPlaying ? <ImVolumeHigh color="white" size={20} /> : <ImVolumeMute2 color="white" size={20} />}

            </div>
            {/* <button ref={buttonRef} onClick={toggleAudio}>
                Click Me
            </button> */}
        </>
    );
};

export default AudioSpeaker;
