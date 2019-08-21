// Test away!

import React from "react";
import renderer from 'react-test-renderer';
import Controls from './Controls';
import { render, fireEvent } from "@testing-library/react";

describe('Controls />', () => {
    it('should match snapshot', () => {
      const tree = renderer.create(<Controls />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('provides buttons to toggle the closed and locked states', () => {
      const { getByText } = render(<Controls />);
    });
  });