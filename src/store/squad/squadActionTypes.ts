import { PlayerData } from '../../components/player-list/player/index';
import { Positions } from '../../utilities/enums';

//Squad
export const LOAD_SQUAD = 'LOAD_SQUAD';
export const SELECT_PLAYER_SQUAD = 'SELECT_PLAYER_SQUAD';
export const SAVE_SQUAD = 'SAVE_SQUAD';
export const SAVE_SQUAD_SUCCESS = 'SAVE_SQUAD_SUCCESS';
export const LOAD_PLAYER_PICTURE = 'LOAD_PLAYER_PICTURE';

type LoadSquadAction = {
  type: 'LOAD_SQUAD';
};

export interface PayloadSelectPlayerSquad {
  player: PlayerData;
  position: number;
  picture?: string;
}

type SelectPlayerSquadAction = {
  type: 'SELECT_PLAYER_SQUAD';
  payload: PayloadSelectPlayerSquad;
};

interface SquadMember {
  id: number;
  positionCode: Positions;
}

export interface SaveSquadPayload {
  userId: string;
  squad: SquadMember[];
}

type SaveSquadAction = {
  type: 'SAVE_SQUAD';
  payload: SaveSquadPayload;
};

type SaveSquadSuccessAction = {
  type: 'SAVE_SQUAD_SUCCESS';
};

type LoadPlayerPictureAction = {
  type: 'LOAD_PLAYER_PICTURE';
  payload: any;
};

export type SquadActions =
  | LoadSquadAction
  | SelectPlayerSquadAction
  | SaveSquadAction
  | SaveSquadSuccessAction
  | LoadPlayerPictureAction;
