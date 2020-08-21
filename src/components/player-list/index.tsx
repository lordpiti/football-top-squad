import React, { useEffect, useState } from 'react';
import Player, { PlayerData } from './player';
import './player-list.scss';
import { useDispatch, useSelector } from 'react-redux';
import { TopSquadState } from '../..';
import * as playerActionCreators from '../../store/players/playerActions';
import * as squadActionCreators from '../../store/squad/squadActions';
import { Positions } from '../../utilities/enums';

const PlayerList = () => {
  const dispatch = useDispatch();

  const theState = useSelector((state: TopSquadState) => ({
    allPlayers: state.players.players,
    selectedSquad: state.squad.squad,
  }));

  const [currentPositionState, setCurrentPositionState] = useState(
    Positions.Goalkeeper
  );

  useEffect(() => {
    dispatch(playerActionCreators.loadPlayerListAction());
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

  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPositionState(Number(event.target.value) as Positions);
  };

  const onSubmit = () => {
    if (
      theState.selectedSquad.filter((x) => Object.keys(x).length).length === 11
    ) {
      const squadToSubmit = theState.selectedSquad.map((x) => ({
        id: (x as any).id,
      }));
      dispatch(
        squadActionCreators.saveSquadAction({
          userId: 'test',
          squad: squadToSubmit,
        })
      );
      console.log('dispatched');
    }
  };

  const isPlayerInSquad = (item: PlayerData) =>
    theState.selectedSquad.some((x) => (x as any).id === item.id);

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
        <button
          id='submitButton'
          onClick={onSubmit}
          disabled={
            theState.selectedSquad.filter((x) => Object.keys(x).length).length <
            11
          }
        >
          Submit
        </button>
      </div>
      {theState.allPlayers && (
        <div className='player-list'>
          {theState.allPlayers
            .filter((x) => x.positionCode === currentPositionState)
            .map((item, index) => (
              <Player
                key={index}
                player={item}
                isSelected={isPlayerInSquad(item)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default PlayerList;
