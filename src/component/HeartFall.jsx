import React, { useState, useEffect } from 'react';
import './HeartFall.css';

const HeartFall = ({ text, heartImage }) => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        // Function to generate random keyframe animations
        const generateRandomKeyframes = (i) => {
            const animationName = `heart-fall-${Math.random().toString(36).substr(2, 9)}`; // Generate a unique name for each heart
            const topStart = 10; // Random starting position between 10% and 30%
            const topEnd = 100; // Random ending position between 50% and 100%
            const horizontalMove = i * 10 - 10; // Random horizontal move (between -10% and 10%)

            // Define the keyframes
            const keyframes = `
        @keyframes ${animationName} {
          0% {
            top: 0;
            left: 50%;
          }
          50% {
            top: ${topStart + (topEnd - topStart) / 2}%;
            left: ${30 + horizontalMove}vw;
          }
          100% {
            top: ${topEnd}%;
            left: ${Math.random() * 40 + horizontalMove}vw;
          }
        }
      `;
            // Insert the keyframes into the document
            const styleTag = document.createElement("style");
            styleTag.innerHTML = keyframes;
            document.head.appendChild(styleTag);

            return animationName;
        };

        // Generate hearts with random animations
        const generateHearts = () => {
            const newHearts = [];
            for (let i = 0; i < 6; i++) {
                const animationName = generateRandomKeyframes(i);
                newHearts.push({
                    id: i,
                    style: {
                        animation: `${animationName} 8s linear infinite`, // Apply random keyframe animation
                        backgroundImage: `url(${heartImage})`, // Custom heart image
                        fontSize: 16
                    },
                });
            }
            setHearts(newHearts);
        };

        generateHearts();
    }, [heartImage]);

    return (
        <div className="heartfall-container">
            {hearts.map(heart => (
                <div key={heart.id} className="heart" style={heart.style}>
                    ❤️</div>
            ))}
            <div className="text-overlay">{text}</div>
        </div>
    );
};

export default HeartFall;
