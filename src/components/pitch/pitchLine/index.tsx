import React from 'react';
import './pitchLine.scss';
import Position from '../position';
import { PlayerDataOrEmpty } from '../../../store/squad/squadReducer';
import { PlayerData } from '../../player-list/player';

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
              (value as PlayerData).name
                ? (value as PlayerData).name
                : `${line} ${startingPos > 0 ? index + 1 : ''}`
            }
            positionIndex={startingPos + index}
          />
        );
      })}
    </div>
  );
};

export default PitchLine;
