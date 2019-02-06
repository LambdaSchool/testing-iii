import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect';
import Display from './Display';
import Controls from '../controls/Controls';
afterEach(cleanup)
/*
displays if gate is open/closed and if it is locked/unlocked
displays 'Closed' if the closed prop is true and 'Open' if otherwise
displays 'Locked' if the locked prop is true and 'Unlocked' if othewise
when locked or closed use the red-led class
when unlocked or open use the green-led class
    Gate
    defaults to unlocked and open
    cannot be closed or opened if it is locked
*/

it('renders without crashing', () => {
    render(<Display />);
});


describe('display function tests', () => {
    test('displays if gate is open/closed and if it is locked/unlocked', () => {
        const { getByText } = render(<Display locked={true} closed={true} />);
        getByText('Locked');
        getByText('Closed');

    });
    test('displays if gate is open/closed and if it is locked/unlocked', () => {
        const { getByText } = render(<Display locked={false} closed={false} />);
        getByText('Open');
        getByText('Unlocked');

    });
    test('displays Closed if the closed prop is true and displays Locked if the locked prop is true ', () => {
        const { getByText } = render(<Display locked={true} closed={true} />);
        getByText('Locked');
        getByText('Closed');
        
        
    });
    test('displays Opened if the closed prop is false and displays unLocked if the locked prop is false', () => {
        const { getByText } = render(<Display locked={false} closed={false} />);
        getByText('Open');
        getByText('Unlocked');

    });
    test('when unlocked or open use the green-led class', () => {
        const { container } = render(<Display locked={false} closed={false} />);
        expect(container.children[0].children[0]).toHaveClass('led green-led')

    })
    test('when unlocked or open use the red-led class', () => {
        const { container } = render(<Display locked={true} closed={true} />);
        expect(container.children[0].children[0]).toHaveClass('led red-led')

    })
    test('defaults to unlocked and open', () => {
        const { getByText } = render(<Display/>);
        getByText('Open');
        getByText('Unlocked');

    });
    it('Will disable the Lock Gate button if the gate is open', () => {
        const { getByText } = render(<Controls locked={false} closed={false} />)
        expect(getByText(/lock gate/i).disabled).toBe(true);
    })
});
