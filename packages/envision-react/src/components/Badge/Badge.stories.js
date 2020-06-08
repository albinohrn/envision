import 'envision/dist/envision.css';
import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Badge from '.';

export default {
   title: 'Badge',
   component: Badge,
   decorators: [withKnobs],
};

export const Default = () => (
   <Badge type={select('Type', ['', 'info', 'success', 'warn', 'danger'])}>
      {text('Children', 'New')}
   </Badge>
);
