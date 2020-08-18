import * as actionTypes from './squadActionTypes';
import { PlayerData } from '../../components/player-list/player';
// import { TopSquadThunk, TopSquadDispatch } from '..';

export const selectPlayerSquadAction = (selectPlayerSquadPayload: {
  player: PlayerData;
  position: number;
}) => {
  return {
    type: actionTypes.SELECT_PLAYER_SQUAD,
    payload: selectPlayerSquadPayload,
  };
};
