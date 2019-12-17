// Test away!

import React from 'react';
import Controls from './Controls';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';



test('click event renders correct items', () => {

    const locked = true;
    const closed = true; 
    const { getByText} = render(<Controls locked={locked} closed={closed} />);
    const unlock = getByText(/Unlocked/i);

   fireEvent.click(getByText('Unlock Gate'));
    expect(unlock).toHaveClass('green-led');
    
    

})
