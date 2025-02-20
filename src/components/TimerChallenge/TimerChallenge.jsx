import React, { useRef, useState } from 'react';
import { ResultModal } from '../ResultModal/ResultModal';
import './TimerChallenge.css';

export const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef(null);

  const [timeStarted, setTimeStarted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current?.showModal();
    }, targetTime * 1000);

    setTimeStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result='lost' />
      <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timeStarted ? handleStop : handleStart}>
            {timeStarted ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timeStarted ? 'active' : undefined}>
          {timeStarted ? 'Time is running...  ' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
};
