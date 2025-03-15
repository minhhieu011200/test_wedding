import React, { useEffect, useRef, useState } from "react";
import { ImVolumeHigh, ImVolumeMute2 } from "react-icons/im";
import './AudioSpeaker.css'
const AudioSpeaker = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const playAudio = () => {
            if (audioRef.current) {
                audioRef.current.play().catch(error => {
                    console.log("Trình duyệt chặn autoplay:", error);
                });
            }
        };

        document.addEventListener("click", playAudio, { once: true });

        return () => {
            document.removeEventListener("click", playAudio);
        };
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
                    left: "2%",
                    backgroundColor: "#df4758",
                    borderRadius: "50%",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    zIndex: 1
                }}
                onClick={toggleAudio}
            >


                <audio ref={audioRef} autoPlay={true}>
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
