import React from 'react';
import './position.scss';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../App';

interface PlayerData {
  id: string;
  name: string;
}

const droppedMethod = (position: string) => {
  console.log(`dropped on position ${position}`);
};

const canDropThis = (pos: any) => {
  return pos === '2';
};

const Position = (props: PlayerData) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.PLAYER,
    drop: () => droppedMethod(props.name),
    collect: (mon) => ({
      isOver: !!mon.isOver(),
      canDrop: canDropThis(props.id),
    }),
  });

  return (
    <div className='position' ref={drop}>
      {isOver && !canDrop && <div>Over a not valid position</div>}
      {isOver && canDrop && <div>Over a valid position</div>}
      {!isOver && canDrop && <div>Valid position</div>}
      {props.id} - {props.name}
    </div>
  );
};

export default Position;
