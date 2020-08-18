import React, { useEffect, useState } from 'react';
import Player from './player';
import './player-list.scss';
import { useDispatch, useSelector } from 'react-redux';
import { TopSquadState } from '../..';
import * as actionCreators from '../../store/players/playerActions';
import { Positions } from '../../utilities/enums';

const PlayerList = () => {
  const dispatch = useDispatch();

  const theState = useSelector((state: TopSquadState) => ({
    allPlayers: state.players.players,
  }));

  const [currentPositionState, setCurrentPositionState] = useState(
    Positions.Goalkeeper
  );

  useEffect(() => {
    dispatch(actionCreators.loadPlayerListAction());
  }, []);

  const getEnumValues = (enumerao: any) => {
    var enumValues: number[] = [];
    for (var position in Positions) {
      if (!isNaN(Number(position))) {
        enumValues.push(Number(position));
      }
    }
    return enumValues;
  };

  const onSelect = (a: any) => {
    setCurrentPositionState(Number(a.target.value) as Positions);
  };

  return (
    <div>
      <div>
        <select
          id='positionSelect'
          onChange={onSelect}
          value={currentPositionState}
        >
          {getEnumValues(Positions).map((value) => (
            <option value={value}>{Positions[value]}</option>
          ))}
        </select>
      </div>
      {theState.allPlayers && (
        <div className='player-list'>
          {theState.allPlayers
            .filter((x) => x.positionCode === currentPositionState)
            .map((item, index) => (
              <Player key={index} player={item} />
            ))}
        </div>
      )}
    </div>
  );
};

export default PlayerList;
