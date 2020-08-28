import 'envision/dist/envision.css';
import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import List from '.';
import ListItem from '../ListItem';

export default {
   title: 'List/List',
   component: List,
   decorators: [withKnobs],
};

export const Default = () => (
   <List
      dividerPosition={select('Divider position', [
         '',
         'top',
         'bottom',
         'around',
         'right',
         'left',
      ])}
      horizontal={boolean('Horizontal', false)}
      fixed={select('Fixed', [
         '',
         ...Array(12)
            .fill()
            .map((a, i) => i + 1),
      ])}
      responsive={boolean('Responsive', false)}
   >
      <ListItem>A list item</ListItem>
      <ListItem>A list item</ListItem>
      <ListItem>A list item</ListItem>
      <ListItem>A list item</ListItem>
      <ListItem>A list item</ListItem>
      <ListItem>A list item</ListItem>
      <ListItem>A list item</ListItem>
   </List>
);
