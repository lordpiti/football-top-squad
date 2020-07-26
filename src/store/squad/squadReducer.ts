import * as actionTypes from './squadActionTypes';
import { PlayerData } from '../../components/player';

type PlayerDataOrEmpty = PlayerData | {};

export interface SquadState {
  squad: PlayerDataOrEmpty[];
}

const initialState = {
  squad: [],
} as SquadState;

for (var i = 0; i < 11; i++) initialState.squad.push({});

const reducer = (state = initialState, action: any) => {
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
    default:
      break;
  }
  return state;
};

export default reducer;
