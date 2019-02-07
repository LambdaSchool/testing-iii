// Test away!
import React from 'react';
import {render, clickEvent, cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

afterEach(cleanup);

describe('Tests for Display Component', () => {
      test('It should display the display component', () => {
          render(<Display />);
      });

      test('It should display Closed if "closed" prop is true', () => {
          const {getByText} = render(<Display closed={true}/>);
          getByText(/closed/i);
      });

      test('It should display Open if "closed" prop is false', () => {
          const component = render(<Display closed={false} />);
          const open = component.getByText(/open/i);
          expect(open).toBeDefined();
       });

      test('It should display "Locked" if "Locked" prop is true', () => {
           const {getByText} = render(<Display locked={true} />);
           getByText(/locked/i);
      });

      test('It should display Open if "closed" prop is false', () => {
          const component = render(<Display locked={false} />);
          const unlocked = component.getByText(/unlocked/i);
          expect(unlocked).toBeDefined();
     });

     test('It should display "Locked with - red-color" when "locked" prop is true', () => {
         const {getByText} = render(<Display locked={true} />);
         const red = getByText(/locked/i);
         expect(red).toHaveClass("red-led");
     });

      test('It should display "Unlocked with - green-color" when "locked" prop is false', () => {
          const component = render(<Display locked={false} />);
          const green = component.getByText(/unlocked/i);
          expect(green).toHaveClass("green-led");
      });

      test('It should display "Closed with - red-color" when "Closed" prop is true', () => {
        const {getByText} = render(<Display closed={true} />);
        const closed = getByText(/closed/i);
        expect(closed).toHaveClass("red-led");
      });

      test('It should display "Open with - green-color" when "Closed" prop is false', () => {
        const component = render(<Display closed = {false} />);
        const open = component.getByText(/open/i);
        expect(open).toHaveClass("green-led");
    });
});