import React from 'react';
import './pitchLine.scss';
import Position from '../position';
import { PlayerDataOrEmpty } from '../../../store/squad/squadReducer';
import { PlayerData } from '../../player-list/player';

interface PitchLineProps {
  positions: PlayerDataOrEmpty[];
  startingPos: number;
}

const PitchLine = ({ positions, startingPos }: PitchLineProps) => {
  return (
    <div className='pitchLine'>
      {positions.map((value, index: number) => (
        <Position
          key={index}
          name={
            (value as PlayerData).name
              ? (value as PlayerData).name
              : `Player ${startingPos + index}`
          }
          positionIndex={startingPos + index}
        />
      ))}
    </div>
  );
};

export default PitchLine;
