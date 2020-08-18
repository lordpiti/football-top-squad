import React from 'react';
import './Pitch.scss';
import { useDispatch, useSelector } from 'react-redux';
import { TopSquadState } from '../..';
import PitchLine from './pitchLine';

const Pitch = () => {
  // const dispatch = useDispatch();

  const theState = useSelector((state: TopSquadState) => ({
    squad: state.squad.squad,
  }));

  return (
    <div className='pitch'>
      <PitchLine positions={theState.squad.slice(0, 1)} startingPos={0} />
      <PitchLine positions={theState.squad.slice(1, 5)} startingPos={1} />
      <PitchLine positions={theState.squad.slice(5, 9)} startingPos={5} />
      <PitchLine positions={theState.squad.slice(9, 12)} startingPos={9} />
    </div>
  );
};

export default Pitch;
