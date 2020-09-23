import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { PlayersService } from '../services/playersService';
import { SquadService } from '../services/squadService';
import { PlayersState } from './players/playersReducer';
import { rootReducer } from './reducers';
import { SquadState } from './squad/squadReducer';

export type TopSquadState = {
  players: PlayersState;
  squad: SquadState;
};

export type ThunkArguments = {
  playerService: PlayersService;
  squadService: SquadService;
};

export type TopSquadDispatch = ThunkDispatch<
  TopSquadState,
  ThunkArguments,
  any
>;

export type TopSquadThunk = ThunkAction<
  Promise<void> | Promise<any>,
  TopSquadState,
  ThunkArguments,
  any
>;

const thunkMiddleware = thunk.withExtraArgument<ThunkArguments>({
  playerService: new PlayersService(),
  squadService: new SquadService(),
});

export const configureStore = () =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
