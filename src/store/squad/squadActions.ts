import * as actionTypes from './squadActionTypes';
import { TopSquadDispatch, TopSquadThunk } from '../..';
import { PayloadSelectPlayerSquad, SaveSquadPayload } from './squadActionTypes';

export const selectPlayerSquadAction = (
  selectPlayerSquadPayload: PayloadSelectPlayerSquad
) => {
  return {
    type: actionTypes.SELECT_PLAYER_SQUAD,
    payload: selectPlayerSquadPayload,
  };
};

export const saveSquadAction = (squadData: SaveSquadPayload): TopSquadThunk => {
  return async (dispatch: TopSquadDispatch, _, { squadService }) => {
    // dispatch(globalActionCreators.updateLoadingSpinner(true));

    const playersListResponse = await squadService.saveTopSquad(squadData);
  };
};
