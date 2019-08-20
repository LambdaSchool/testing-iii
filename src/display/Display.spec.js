// Test away!

import React from "react";
import renderer from 'react-test-renderer';
import Display from './Display';
import { render, fireEvent } from "@testing-library/react";

describe('Display />', () => {
    it('should match snapshot', () => {
      const tree = renderer.create(<Display />).toJSON();
  
      expect(tree).toMatchSnapshot();
    });
  });