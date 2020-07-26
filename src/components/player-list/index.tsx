import React from 'react';
import Player from '../player';
import './player-list.scss';
import { PlayerData } from '../player/index';

const PlayerList = () => {
  for (var playerList: PlayerData[] = [], i = 0; i < 50; ++i)
    playerList[i] = { id: i, name: `Player ${i}` };

  return (
    <div className='player-list'>
      {playerList.map((item) => (
        <Player player={item} />
      ))}
    </div>
  );
};

export default PlayerList;
