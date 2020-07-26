import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk, { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import playersReducer, { PlayersState } from './store/players/playersReducer';
import { PlayersService } from './services/playersService';
import squadReducer, { SquadState } from './store/squad/squadReducer';

export type TopSquadState = {
  players: PlayersState;
  squad: SquadState;
};

export type ThunkArguments = {
  playerService: PlayersService;
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
});

const rootReducer = combineReducers({
  players: playersReducer,
  squad: squadReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
