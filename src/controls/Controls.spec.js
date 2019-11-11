import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Controls from './Controls';

// Test away!

test('control render correct' , () => {
    expect(render(<Controls/>)).toMatchSnapshot();
});


// test('renders "Unlock Gate" text', () => {
//     const { getByText, findByText } = render(<Controls/>);
//     // Click button
//     fireEvent.click(getByText("Unlock Gate"));
//     findByText(/Unlock Gate/i);   
// });



// test('renders "Lock Gate" text', () => {
//     const { getByText, findByText } = render(<Controls/>);
//     // Click button
//     fireEvent.click(getByText("Lock Gate"));
//     findByText(/Lock Gate/i);   
// });



// test('renders "Open Gate" text', () => {
//     const { getByText, findByText } = render(<Controls/>);
//     // Click button
//     fireEvent.click(getByText("Open Gate"));
//     findByText(/Open Gate/i);   
// });

// test('renders "Close Gate" text', () => {
//     const { getByText, findByText } = render(<Controls/>);
//     // Click button
//     fireEvent.click(getByText("Close Gate"));
//     findByText(/Close Gate/i);   
// });



test('unLock Gate', () => {
    const toggleLockMock = jest.fn();
    const {getByText} = render(<Controls toggleLocked={toggleLockMock} locked={true}/>)

    const unlockBtn = getByText(/Unlock Gate/i)
    fireEvent.click(unlockBtn);
    expect(toggleLockMock).not.toHaveBeenCalled();
})

test('Lock Gate', () => {
    const toggleunLockMock = jest.fn();
    const {getByText} = render(<Controls toggleLocked={toggleunLockMock} locked={false}/>)

    const lockBtn = getByText(/Lock Gate/i)
    fireEvent.click(lockBtn);
    expect(toggleunLockMock).not.toHaveBeenCalled();
})


test('open Gate', () => {
    const toggleOpenMock = jest.fn();
    const {getByText} = render(<Controls toggleClosed={toggleOpenMock} closed={true}/>)

    const openBtn = getByText(/open/i)
    fireEvent.click(openBtn);
    expect(toggleOpenMock).toHaveBeenCalled();
})

test('close Gate', () => {
    const toggleCloseMock = jest.fn();
    const {getByText} = render(<Controls toggleClosed={toggleCloseMock} closed={false}/>)

    const closeBtn = getByText(/close/i)
    fireEvent.click(closeBtn);
    expect(toggleCloseMock).toHaveBeenCalled();
})