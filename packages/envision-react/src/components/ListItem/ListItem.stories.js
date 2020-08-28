import 'envision/dist/envision.css';
import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import ListItem from '.';
import List from '../List';

export default {
   title: 'List/ListItem',
   component: ListItem,
   decorators: [withKnobs],
};

export const Default = () => (
   <List>
      <ListItem>A list item</ListItem>
      <ListItem>A list item</ListItem>
      <ListItem>A list item</ListItem>
      <ListItem
         dividerPosition={select('Divider position', [
            '',
            'top',
            'bottom',
            'around',
         ])}
      >
         A list item
      </ListItem>
      <ListItem>A list item</ListItem>
      <ListItem>A list item</ListItem>
      <ListItem>A list item</ListItem>
   </List>
);
