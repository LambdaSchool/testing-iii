// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('<Display/>', () => {
   it('should display open and unlocked', () => {
      const { getByText } = render(<Display closed={false} locked={false} />);
      const open = getByText(/open/i);
      const unlocked = getByText(/unlocked/i);
      expect(open).toHaveTextContent(/open/i);
      expect(open).toHaveClass('green-led');
      expect(unlocked).toHaveTextContent(/unlocked/i);
      expect(unlocked).toHaveClass('green-led');
   });
   it('should use green-led when open and unlocked', () => {
      const { getByText } = render(<Display closed={false} locked={false} />);
      const open = getByText(/open/i);
      const unlocked = getByText(/unlocked/i);
      expect(open).toHaveClass('green-led');
      expect(unlocked).toHaveClass('green-led');
   });

   it('should display closed and unlocked', () => {
      const { getByText } = render(<Display closed={true} locked={false} />);
      const closed = getByText(/closed/i);
      const unlocked = getByText(/unlocked/i);

      expect(closed).toHaveTextContent(/closed/i);
      expect(unlocked).toHaveTextContent(/unlocked/i);
   });
   it('should use red-led class when closed and green-led when unlocked', () => {
      const { getByText } = render(<Display closed={true} locked={false} />);
      const closed = getByText(/closed/i);
      const unlocked = getByText(/unlocked/i);
      expect(closed).toHaveClass('red-led');
      expect(unlocked).toHaveClass('green-led');
   });
   it('should display closed and locked', () => {
      const { getByText } = render(<Display closed={true} locked={true} />);
      const closed = getByText(/closed/i);
      const locked = getByText('Locked');
      expect(closed).toHaveTextContent(/closed/i);
      expect(locked).toHaveTextContent(/locked/i);
   });
   it('should use red-led when closed and locked', () => {
      const { getByText } = render(<Display closed={true} locked={true} />);
      const closed = getByText(/closed/i);
      const locked = getByText('Locked');
      expect(closed).toHaveClass('red-led');
      expect(locked).toHaveClass('red-led');
   });
});