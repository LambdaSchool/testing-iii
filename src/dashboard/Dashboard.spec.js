// Test away
import React from 'react';
import {render,fireEvent} from '@testing-library/react'

import Dashboard from './Dashboard';


test("Dashboard is there", ()=> {

    const state = true;

    const {baseElment, rerender} = render(<Dashboard state={state}/>)
    
    expect(baseElment).toMatchSnapshot();
     

})

test('Dasboard here', () => {
    const{ getByText} = render(<Dashboard/>)
    const button =getByText(/Close/i)
    fireEvent.click(button);
    getByText(/Open/i);
})