import React from 'react';
import './pitchLine.scss';
import Position from '../position';
import {
  PlayerDataExtended,
  PlayerDataOrEmpty,
} from '../../../store/squad/squadReducer';

interface PitchLineProps {
  positions: PlayerDataOrEmpty[];
  startingPos: number;
}

const getLineNameByStartingPosition = (startingPos: number) => {
  let line = 'Goalkeeper';
  switch (startingPos) {
    case 1:
      line = 'Defender';
      break;
    case 5:
      line = 'Midfielder';
      break;
    case 9:
      line = 'Forward';
      break;
  }

  return line;
};

const PitchLine = ({ positions, startingPos }: PitchLineProps) => {
  return (
    <div className='pitchLine'>
      {positions.map((value, index: number) => {
        const line = getLineNameByStartingPosition(startingPos);

        return (
          <Position
            key={index}
            name={
              (value as PlayerDataExtended).name
                ? (value as PlayerDataExtended).name
                : `${line} ${startingPos > 0 ? index + 1 : ''}`
            }
            positionIndex={startingPos + index}
            picture={(value as PlayerDataExtended).picture}
          />
        );
      })}
    </div>
  );
};

export default PitchLine;
