import React, { useState, useEffect } from 'react';

function TypingAnimation() {
    const texts = ["Text 1", "Text 2", "Text 3"]; // Add your texts here
    const [currentText, setCurrentText] = useState("");
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const text = texts[textIndex];
        let currentIndex = 0;

        const interval = setInterval(() => {
            setCurrentText((prevText) => prevText + text[currentIndex]);
            currentIndex++;

            if (currentIndex === text.length) {
                clearInterval(interval);

                setTimeout(() => {
                    // Wait for a delay before clearing the text
                    clearText();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [textIndex, texts]);

    const clearText = () => {
        const interval = setInterval(() => {
            setCurrentText((prevText) => prevText.slice(0, -1));

            if (currentText.length === 0) {
                clearInterval(interval);

                // Move to the next text
                setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }
        }, 50);
    };

    return (
        <div className="typing-animation">
            <h1>{currentText}</h1>
        </div>
    );
}

export default TypingAnimation;
