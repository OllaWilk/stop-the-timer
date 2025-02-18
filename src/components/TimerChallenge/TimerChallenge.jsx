import React, { useState } from 'react';
import './TimerChallenge.css';

export const TimerChallenge = ({ title, targetTime }) => {
  const [timeStarted, setTimeStarted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  const handleStart = () => {
    setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);

    setTimeStarted(true);
  };

  return (
    <section className='challenge'>
      <h2>{title}</h2>
      {timeExpired && <p>You lost !</p>}
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleStart}>
          {timeStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timeStarted ? 'active' : undefined}>
        Time is running / Timer inactive
      </p>
    </section>
  );
};
