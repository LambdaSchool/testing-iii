import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Display from './Display';

describe('<Display />', () => {
  it('should match snapshot', () => {
    const wrapper = renderer.create(<Display />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should display "open" when closed is false', () => {
    const { getByText } = render(<Display closed={false}/>);
    expect(getByText(/unlocked/i)).toBeTruthy();
    expect(getByText(/open/i)).toBeTruthy();
  });

  it('should display "closed" when closed is true', () => {
    const { getByText } = render(<Display closed={true}/>);
    expect(getByText(/unlocked/i)).toBeTruthy();
    expect(getByText(/closed/i)).toBeTruthy();
  });

  it('should display "unlocked" when locked is false', () => {
    const { getByText } = render(<Display locked={false}/>);
    expect(getByText(/unlocked/i)).toBeTruthy();
  });

  it('should display "locked" when locked is true', () => {
    const { getByText } = render(<Display locked={true}/>);
    expect(getByText(/locked/i)).toBeTruthy();
  });

  it('should have "red-led" class when locked or closed', () => {
    const { getByText }  = render(<Display closed={true} locked={true} />);
    expect(getByText(/locked/i).classList.contains('red-led')).toBe(true);
    expect(getByText(/closed/i).classList.contains('red-led')).toBe(true);
  });

  it('should have "green-led" class when unlocked or open', () => {
    const { getByText }  = render(<Display closed={false} locked={false} />);
    expect(getByText(/unlocked/i).classList.contains('green-led')).toBe(true);
    expect(getByText(/open/i).classList.contains('green-led')).toBe(true);
  });
});