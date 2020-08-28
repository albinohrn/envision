import 'envision/dist/envision.css';
import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import DefinitionList from '.';

export default {
   title: 'List/DefinitionList',
   component: DefinitionList,
   decorators: [withKnobs],
};

export const Default = () => (
   <DefinitionList horizontal={boolean('Horizontal', false)}>
      <dt>First item</dt>
      <dd>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
         faucibus orci, a tincidunt dui.
      </dd>

      <dt>Second item</dt>
      <dd>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
         faucibus orci, a tincidunt dui.
      </dd>

      <dt>Third item</dt>
      <dd>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
         faucibus orci, a tincidunt dui.
      </dd>
   </DefinitionList>
);
