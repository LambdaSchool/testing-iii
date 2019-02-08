// Test away!
import React from 'react';
import 'jest-dom/extend-expect';
import {render, fireEvent} from 'react-testing-library';

// import Dashboard from '../dashboard/Dashboard.js';
import Display from '../display/Display.js';
// import Controls from '../controls/Controls.js';

it('renders without crashing', () => {
    render(<Display />)
});

// const controlsComponent = render(<Controls />);
const displayComponent = render(<Display />);
// const dashboardComponent = render(<Dashboard />); 

//fireEvent doesnt work cause the event is only set as props and not defined until passed thru to dashboard so i just did all my tests in dashboard.spec.js

// test('open/close display & button toggles properly', () => {
//     const openDisplay = displayComponent.getByText(/open/i);
//     const closeOpenButton = controlsComponent.getByText(/close gate/i);

//     expect(openDisplay).toHaveClass('led green-led');
//     expect(openDisplay).toHaveTextContent(/open/i);
//     expect(closeOpenButton).toHaveTextContent(/close gate/i);
//     fireEvent.click(closeOpenButton);
//     expect(openDisplay).toHaveClass('led red-led');
//     expect(openDisplay).toHaveTextContent(/closed/i);
//     expect(closeOpenButton).toHaveTextContent(/open gate/i);
// })