import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const animateText = () => {
      const mainText = document.querySelector('.main-text');
      const words = mainText.querySelectorAll('span');

      words.forEach((word, index) => {
        setTimeout(() => {
          word.style.opacity = 1;
        }, index * 550); // Adjust the duration between fade-ins

        if (index === words.length - 1) {
          setTimeout(() => {
            setAnimationComplete(true);
          }, (index + 1) * 570); // Adjust the duration to wait before fading in the below texts
        }
      });
    };

    animateText();
  }, []);

  useEffect(() => {
    if (animationComplete) {
      const belowTexts = document.querySelector('.below-texts');
      belowTexts.addEventListener('transitionend', handleTransitionEnd);

      return () => {
        belowTexts.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, [animationComplete]);

  const handleTransitionEnd = () => {
    setAnimationDone(true);
  };

  return (
    <div className={`preloader ${animationComplete ? 'animation-complete' : ''} ${animationDone ? 'animation-done' : ''}`}>
      <div className="texts-container">
        <div className="main-text">
          <span style={{ opacity: 0 }}>C</span>
          <span style={{ opacity: 0 }}>M</span>
          <span style={{ opacity: 0 }}>B </span>
          <span style={{ opacity: 0 }}>REALTY </span>
          <span style={{ opacity: 0 }}>& </span>
          <span style={{ opacity: 0 }}>MORTGAGE</span>
        </div>
        <div className={`below-texts ${animationComplete ? 'fade-in' : ''}`}>
          <span>A Premier Company</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
