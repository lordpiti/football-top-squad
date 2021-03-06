import * as actionTypes from './playerActionTypes';
import { PlayerResponse } from '../../services/playersService';
import { TopSquadDispatch, TopSquadThunk } from '..';

export const loadPlayerListSuccessAction = (playerList: PlayerResponse[]) => {
  return {
    type: actionTypes.LOAD_PLAYER_LIST,
    payload: playerList,
  };
};

export const filterPlayerListAction = (filter: any) => {
  return {
    type: actionTypes.FILTER_PLAYER_LIST,
    payload: filter,
  };
};

export const loadPlayerListAction = (): TopSquadThunk => {
  return async (dispatch: TopSquadDispatch, _, { playerService }) => {
    // dispatch(globalActionCreators.updateLoadingSpinner(true));

    const playersListResponse = await playerService.loadPlayerList();
    const playerList = playersListResponse.data.sort((a, b) =>
      a.surname < b.surname ? -1 : 1
    );
    dispatch(loadPlayerListSuccessAction(playerList));
    // dispatch(globalActionCreators.updateLoadingSpinner(false));
  };
};
