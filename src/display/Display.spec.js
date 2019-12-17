// Test away!
import React from 'react';
import {render } from '@testing-library/react'

import Display from './Display'

test('Let it display', ()=>{
    const closed= false; 
    const locked= false;
    const tree = render(<Display closed={closed} locked={locked}/>)
    expect(tree.baseElement).toMatchSnapshot();

} )