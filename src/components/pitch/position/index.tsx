import React from 'react';
import './position.scss';
import { useDrop, DragObjectWithType } from 'react-dnd';
import { ItemTypes } from '../../../App';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../../../store/squad/squadActions';
import { PlayerData } from '../../player-list/player';

export interface PositionProps {
  positionIndex: number;
  name: string;
}

type AllProps = DragObjectWithType & PlayerData;

const canDropThis = (item: AllProps, pos: number) => {
  return (
    (item.positionCode === 1 && pos === 0) ||
    (item.positionCode === 2 && pos > 0 && pos < 5) ||
    (item.positionCode === 3 && pos > 4 && pos < 9) ||
    (item.positionCode === 4 && pos > 8 && pos < 11)
  );
};

const Position = (props: PositionProps) => {
  const dispatch = useDispatch();

  const droppedMethod = (item: AllProps, position: number) => {
    console.log(`${item.name} dropped on position ${position}`);
    dispatch(
      actionCreators.selectPlayerSquadAction({
        position: position,
        player: {
          id: item.id,
          name: item.name,
          positionCode: item.positionCode,
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
