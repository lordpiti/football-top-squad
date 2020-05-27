import React from 'react';
import './position.scss';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../App';

interface PlayerData {
  id: string;
  name: string;
}

const droppedMethod = (item: any, position: string) => {
  console.log(`dropped on position ${position}`);
};

const canDropThis = (item: any, pos: any) => {
  return pos === '2';
};

const Position = (props: PlayerData) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.PLAYER,
    drop: (item, mon) => droppedMethod(item, props.name),
    canDrop: (item, mon) => canDropThis(item, props.id),
    collect: (mon) => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop(),
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
