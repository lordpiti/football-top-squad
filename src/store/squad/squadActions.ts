import * as actionTypes from './squadActionTypes';
import { PlayerData } from '../../components/player-list/player';
import { TopSquadDispatch, TopSquadThunk } from '../..';

export const selectPlayerSquadAction = (selectPlayerSquadPayload: {
  player: PlayerData;
  position: number;
}) => {
  return {
    type: actionTypes.SELECT_PLAYER_SQUAD,
    payload: selectPlayerSquadPayload,
  };
};

export const saveSquadAction = (squadData: any): TopSquadThunk => {
  return async (dispatch: TopSquadDispatch, _, { squadService }) => {
    // dispatch(globalActionCreators.updateLoadingSpinner(true));

    const playersListResponse = await squadService.saveTopSquad(squadData);
  };
};
