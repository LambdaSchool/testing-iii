// Test away!
import React from 'react';
import {render, fireEvent, getByTestId} from '@testing-library/react';

import Controls from './Controls';


test("Control the control", () => {

 const{getByText} =render(<Controls/>)
 const button =getByText(/Close Gate/i)
 fireEvent.click(button);
 getByText(/Lock Gate/i);
})

