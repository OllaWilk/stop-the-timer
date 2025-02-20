import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import './ResultModal.css';

export const ResultModal = forwardRef(
  ({ targetTime, remainingTime, resetTimer }, ref) => {
    const myDialog = useRef(null);
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

    useImperativeHandle(ref, () => {
      return {
        open() {
          myDialog.current.showModal();
        },
      };
    });

    return (
      <dialog ref={myDialog} className='result-modal'>
        {userLost && <h2>You lost</h2>}
        <p>
          The target time was <strong>{targetTime}</strong> seconds.
        </p>
        <p>
          You stopped the timer with{' '}
          <strong>{formattedRemainingTime} seconds left.</strong>
        </p>
        <form method='dialog' onSubmit={resetTimer}>
          <button>Close</button>
        </form>
      </dialog>
    );
  }
);
