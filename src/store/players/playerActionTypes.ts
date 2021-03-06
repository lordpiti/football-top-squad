import { PlayerResponse } from '../../services/playersService';
//Players
export const LOAD_PLAYER_LIST = 'LOAD_PLAYER_LIST';
export const FILTER_PLAYER_LIST = 'FILTER_PLAYER_LIST';
export const LOAD_PLAYER = 'LOAD_PLAYER';
export const SAVE_PLAYER = 'SAVE_PLAYER';

type LoadPlayersAction = {
  type: 'LOAD_PLAYER_LIST';
  payload: PlayerResponse[];
};

export type PlayerActions = LoadPlayersAction;
