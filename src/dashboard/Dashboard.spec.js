// Test away
import React from 'react';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from '../display/Display';
import Controls from '../controls/Controls';

describe('Testing Dashboard Component', () => {
     test('It should display The Display Component', ()=> {
          render(<Display />);
     });

     test('It should display Controls Component', () => {
        render(<Controls />);
     });
});