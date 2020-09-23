import { combineReducers } from 'redux';

import squadReducer from './squad/squadReducer';
import playersReducer from './players/playersReducer';

export const rootReducer = combineReducers({
  players: playersReducer,
  squad: squadReducer,
});
