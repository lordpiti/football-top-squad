import { PlayerData } from '../../components/player-list/player/index';
//Squad
export const LOAD_SQUAD = 'LOAD_SQUAD';
export const SELECT_PLAYER_SQUAD = 'SELECT_PLAYER_SQUAD';
export const SAVE_SQUAD = 'SAVE_SQUAD';

type LoadSquadAction = {
  type: 'LOAD_SQUAD';
};

export interface PayloadSelectPlayerSquad {
  player: PlayerData;
  position: number;
}

type SelectPlayerSquadAction = {
  type: 'SELECT_PLAYER_SQUAD';
  payload: PayloadSelectPlayerSquad;
};

export interface SaveSquadPayload {
  userId: string;
  squad: any;
}

type SaveSquadAction = {
  type: 'SAVE_SQUAD';
  payload: SaveSquadPayload;
};

export type SquadActions =
  | LoadSquadAction
  | SelectPlayerSquadAction
  | SaveSquadAction;
