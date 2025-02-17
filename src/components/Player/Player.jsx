import { useRef, useState } from 'react';
import './Player.css';

export function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  };

  return (
    <section id='player'>
      <h2>Welcome {enteredPlayerName ?? 'unknow entity'}</h2>
      <p>
        <input ref={playerName} type='text' />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
