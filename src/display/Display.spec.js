import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('renders without crashing', () => {

  test('renders the Display component', () => {
    render(<Display />)
  })

  test('displays the gate being open and unlocked', () => {
    const { getByText } = render(<Display locked={false} closed={false} />);

    getByText(/open/i);
    getByText(/unlocked/i);

  })

  test('displays the gate being closed and locked', () => {
    const { getByText } = render(<Display locked={true} closed={true} />);

    getByText(/closed/i);
    getByText(/locked/i);
  })

  test('uses the red-led class when locked or closed prop is true', () => {
    const { getByText } = render(<Display closed={true} locked={true} />);
    const closedGate = getByText(/closed/i);


    expect(closedGate).toHaveClass('red-led');
    
  })

  test('uses the green-led class when locked or closed prop is false', () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    const unlockedGate = getByText(/unlocked/i);
    
    expect(unlockedGate).toHaveClass('green-led');

  })

})
