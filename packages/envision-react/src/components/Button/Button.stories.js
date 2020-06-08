import 'envision/dist/envision.css';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Button from '.';

export default {
   title: 'Button',
   component: Button,
   decorators: [withKnobs],
};

export const Default = () => (
   <Button
      onClick={action('onClick')}
      type={select('Type', [
         '',
         'primary',
         'success',
         'danger',
         'invert',
         'link',
      ])}
      size={select('Size', ['', 'small', 'large'])}
   >
      {text('Children', 'Click me!')}
   </Button>
);
