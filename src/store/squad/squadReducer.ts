import * as actionTypes from './squadActionTypes';
import { PlayerData } from '../../components/player-list/player';
import { SquadActions } from './squadActionTypes';

export interface PlayerDataExtended extends PlayerData {
  picture?: string;
}

export type PlayerDataOrEmpty = PlayerDataExtended | {};

export interface SquadState {
  squad: PlayerDataOrEmpty[];
}

const initialState = {
  squad: [],
} as SquadState;

const createEmptySquad = () => {
  const emptySquad: PlayerDataOrEmpty[] = [];
  for (var i = 0; i < 11; i++) emptySquad.push({});

  return emptySquad;
};

initialState.squad = createEmptySquad();

const reducer = (state = initialState, action: SquadActions) => {
  switch (action.type) {
    case actionTypes.SELECT_PLAYER_SQUAD:
      const player = action.payload.player;
      const position = action.payload.position;

      const newsquad = [...state.squad];
      newsquad[position] = player;

      return {
        ...state,
        squad: newsquad,
      } as SquadState;
    case actionTypes.SAVE_SQUAD_SUCCESS:
      return {
        ...state,
        squad: createEmptySquad(),
      };
    case actionTypes.LOAD_PLAYER_PICTURE:
      const squadWithUpdatedPicture = state.squad.map((content, i) =>
        (content as PlayerData).id === action.payload.playerId
          ? { ...content, picture: action.payload.picture.url }
          : content
      );

      return {
        ...state,
        squad: squadWithUpdatedPicture,
      };
    default:
      break;
  }
  return state;
};

export default reducer;
