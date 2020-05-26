import React from 'react';
import './player.scss';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../App';

const Player = (props: any) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.PLAYER },
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
      Player Test
    </div>
  );
};

export default Player;
