import React from 'react';
import {render} from '@testing-library/react';

import Display from './Display';

// Test away!

test('control render correct' , () => {
    expect(render(<Display/>)).toMatchSnapshot();
});