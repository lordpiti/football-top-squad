import { TopSquadDispatch, TopSquadThunk } from '..';
import * as actionTypes from './squadActionTypes';
import { PayloadSelectPlayerSquad, SaveSquadPayload } from './squadActionTypes';

export const selectPlayerSquadAction = (
  selectPlayerSquadPayload: PayloadSelectPlayerSquad
) => {
  return {
    type: actionTypes.SELECT_PLAYER_SQUAD,
    payload: selectPlayerSquadPayload,
  };
};

export const loadPlayerPictureSuccessAction = (playerInfo: any) => {
  return {
    type: actionTypes.LOAD_PLAYER_PICTURE,
    payload: playerInfo,
  };
};

export const saveSquadAction = (squadData: SaveSquadPayload): TopSquadThunk => {
  return async (dispatch: TopSquadDispatch, _, { squadService }) => {
    // dispatch(globalActionCreators.updateLoadingSpinner(true));

    await squadService.saveTopSquad(squadData);
    dispatch(saveSquadSuccessAction());
  };
};

export const saveSquadSuccessAction = () => {
  return {
    type: actionTypes.SAVE_SQUAD_SUCCESS,
  };
};

export const loadPlayerPictureAction = (playerId: number): TopSquadThunk => {
  return async (dispatch: TopSquadDispatch, _, { playerService }) => {
    // dispatch(globalActionCreators.updateLoadingSpinner(true));

    const playerInfoResponse = await playerService.loadPlayer(playerId);

    dispatch(loadPlayerPictureSuccessAction(playerInfoResponse.data));
    // dispatch(globalActionCreators.updateLoadingSpinner(false));
  };
};
