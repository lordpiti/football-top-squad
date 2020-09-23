import React from 'react';
import './Pitch.scss';
import { useSelector } from 'react-redux';
import PitchLine from './pitchLine';
import { TopSquadState } from '../../store';

const Pitch = () => {
  const theState = useSelector((state: TopSquadState) => {
    debugger;
    return {
      squad: state.squad.squad,
    };
  });

  return (
    <div className='pitch'>
      <PitchLine positions={theState.squad.slice(0, 1)} startingPos={0} />
      <PitchLine positions={theState.squad.slice(1, 5)} startingPos={1} />
      <PitchLine positions={theState.squad.slice(5, 9)} startingPos={5} />
      <PitchLine positions={theState.squad.slice(9, 11)} startingPos={9} />
    </div>
  );
};

export default Pitch;
