import React from 'react';
import './player.scss';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../App';
import { Positions } from '../../../utilities/enums';
import { Draggable } from '../../pitch/position';


export interface PlayerData {
  id: number;
  name: string;
  positionCode: Positions;
}

export interface PlayerProps {
  player: PlayerData;
  isSelected: boolean;
}

const Player = ({ player, isSelected }: PlayerProps) => {
  const [{ isDragging }, drag] = useDrag<Draggable<PlayerData>, unknown, {
    isDragging: boolean;
  }>({
    item: {
      type: ItemTypes.PLAYER,
      name: player.name,
      id: player.id,
      positionCode: player.positionCode,
    },
    canDrag: !isSelected,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    type: ItemTypes.PLAYER
  });

  return (
    <div
      className={`player ${isSelected ? 'isSelectedInSquad' : ''}`}
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
