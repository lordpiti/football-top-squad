import React from 'react';
import './position.scss';
import { useDrop, DragObjectWithType } from 'react-dnd';
import { ItemTypes } from '../../App';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../../store/squad/squadActions';
import { PlayerData } from '../player';

export interface PositionProps {
  positionIndex: number;
  name: string;
}

type AllProps = DragObjectWithType & PlayerData;

const canDropThis = (item: AllProps, pos: number) => {
  return pos === 2;
};

const Position = (props: PositionProps) => {
  const dispatch = useDispatch();

  const droppedMethod = (item: AllProps, position: number) => {
    debugger;
    console.log(`${item.name} dropped on position ${position}`);
    dispatch(
      actionCreators.selectPlayerSquadAction({
        position: position,
        player: {
          id: item.id,
          name: item.name,
        },
      })
    );
  };

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.PLAYER,
    drop: (item: AllProps, mon) => droppedMethod(item, props.positionIndex),
    canDrop: (item, mon) => canDropThis(item, props.positionIndex),
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
      {props.positionIndex} - {props.name}
    </div>
  );
};

export default Position;
