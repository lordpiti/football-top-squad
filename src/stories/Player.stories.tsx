import React from 'react';
import { DndProvider } from 'react-dnd';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Player, { PlayerProps } from '../components/player-list/player';
import { Positions } from '../utilities/enums';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default {
  title: 'Example/Player',
  component: Player,
} as Meta;

const Template: Story<PlayerProps> = (args) => (
  <DndProvider backend={HTML5Backend}>
    <Player {...args} />
  </DndProvider>
);

export const Unselected = Template.bind({});
Unselected.args = {
  player: {
    id: 1,
    name: 'player unselected',
    positionCode: Positions.Defender,
  },
  isSelected: false,
};

export const Selected = Template.bind({});
Selected.args = {
  player: { id: 1, name: 'player selected', positionCode: Positions.Defender },
  isSelected: true,
};
