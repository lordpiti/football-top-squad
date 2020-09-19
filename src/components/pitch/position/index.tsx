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
  picture?: string;
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
    dispatch(actionCreators.loadPlayerPictureAction(item.id));
  };

  const [{ isOver, canDrop, isItemDragging }, drop] = useDrop({
    accept: ItemTypes.PLAYER,
    drop: (item: AllProps, mon) => droppedMethod(item, props.positionIndex),
    canDrop: (item, mon) => canDropThis(item, props.positionIndex),
    collect: (mon) => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop(),
      isItemDragging: mon.getItem() !== null,
    }),
  });

  const overValidPosition = () => {
    let clases = '';

    if (isItemDragging) {
      clases += canDrop ? 'validPosition' : 'invalidPosition';
    }

    if (isOver) {
      clases += ' isOver';
    }

    return clases;
  };

  return (
    <div>
      <div className={`position ${overValidPosition()}`} ref={drop}>
        {props.picture && (
          <img src={props.picture} alt='' height='40' width='40' />
        )}
        {props.positionIndex + 1} - {props.name}
      </div>
    </div>
  );
};

export default Position;
