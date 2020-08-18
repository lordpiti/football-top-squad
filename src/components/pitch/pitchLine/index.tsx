import React from 'react';
import './pitchLine.scss';
import Position from '../position';
import { PlayerDataOrEmpty } from '../../../store/squad/squadReducer';

interface PitchLineProps {
  positions: PlayerDataOrEmpty[];
  startingPos: number;
}

const PitchLine = ({ positions, startingPos }: PitchLineProps) => {
  return (
    <div className='pitchLine'>
      {positions.map((value: any, index: number) => (
        <Position
          key={index}
          name={value.name ? value.name : `Player ${startingPos + index}`}
          positionIndex={startingPos + index}
        />
      ))}
    </div>
  );
};

export default PitchLine;
