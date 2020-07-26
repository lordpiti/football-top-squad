import React, { useEffect } from 'react';
import Player from '../player';
import './player-list.scss';
import { useDispatch, useSelector } from 'react-redux';
import { TopSquadState } from '../..';
import * as actionCreators from '../../store/players/playerActions';

const PlayerList = () => {
  const dispatch = useDispatch();

  const theState = useSelector((state: TopSquadState) => ({
    allPlayers: state.players.players,
  }));

  useEffect(() => {
    dispatch(actionCreators.loadPlayerListAction());
  }, []);

  return (
    <>
      {theState.allPlayers && (
        <div className='player-list'>
          {theState.allPlayers.map((item, index) => (
            <Player key={index} player={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default PlayerList;
