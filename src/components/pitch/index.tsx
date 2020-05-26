import React from 'react';
import './Pitch.scss';
import Position from '../position';

const Pitch = () => {
  const playerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className='pitch'>
      {playerList.map((value: number, index: number) => (
        <Position name={`Player ${value}`} id={index.toString()} />
      ))}
    </div>
  );
};

export default Pitch;
