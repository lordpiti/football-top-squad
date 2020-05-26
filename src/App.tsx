import React from 'react';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Pitch from './components/pitch';
import PlayerList from './components/player-list';

export const ItemTypes = {
  PLAYER: 'player',
};

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='App'>
        <Pitch />
        <PlayerList />
      </div>
    </DndProvider>
  );
}

export default App;
