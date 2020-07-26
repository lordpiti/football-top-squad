import React from 'react';
import './Pitch.scss';
import Position from '../position';
import { useDispatch, useSelector } from 'react-redux';
import { TopSquadState } from '../..';

const Pitch = () => {
  // const dispatch = useDispatch();

  const theState = useSelector((state: TopSquadState) => ({
    squad: state.squad.squad,
  }));

  return (
    <div className='pitch'>
      {theState.squad.map((value: any, index: number) => (
        <Position
          key={index}
          name={value.name ? value.name : `Player ${index}`}
          positionIndex={index}
        />
      ))}
    </div>
  );
};

export default Pitch;
