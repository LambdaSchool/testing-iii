import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('matches snapshot', () => {
    const wrapper = renderer.create(<Dashboard />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('shows display and controls', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/unlocked/i)).toBeTruthy();
    expect(getByText(/open/i)).toBeTruthy();
    expect(getByText(/lock gate/i)).toBeTruthy();
    expect(getByText(/close gate/i)).toBeTruthy()
  })
});
