import React from 'react';
import './player.scss';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../App';

interface PlayerProps {
  player: PlayerData;
}

export interface PlayerData {
  name: string;
  id: number;
}

const Player = ({ player }: PlayerProps) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.PLAYER,
      name: player.name,
      id: player.id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className='player'
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      {player.name}
    </div>
  );
};

export default Player;
