// Test away

import React from "react";
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';
import { render, fireEvent } from "@testing-library/react";

describe('Dashboard />', () => {
    it('should match snapshot', () => {
      const tree = renderer.create(<Dashboard />).toJSON();
  
      expect(tree).toMatchSnapshot();
    });
    it('defaults to open and unlocked', () => {
      const { getByText } = render(<Dashboard />);
      getByText(/Open/);
      getByText(/Unlocked/);
    });
    it('cannot be open/closed when locked', () => {
      const { getByText } = render(<Dashboard />);
      const lockButton = getByText(/Lock Gate/);
      const closeButton = getByText(/Close Gate/);
      fireEvent.click(closeButton);
      fireEvent.click(lockButton);
      expect(closeButton.disabled).toBe(true); //open Button disabled
    });
    it('shows the controls and display', () => {
      const {getByText} = render(<Dashboard />);
      getByText(/Open/);
      getByText(/Unlocked/);
      getByText(/Lock Gate/);
      getByText(/Close Gate/);
    });
  });
