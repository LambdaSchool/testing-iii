// Test away!

import React from "react";
import renderer from 'react-test-renderer';
import Controls from './Controls';
import { render, fireEvent } from "@testing-library/react";

describe('<Controls />', () => {
    it('should match snapshot', () => {
      const tree = renderer.create(<Controls />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('provides buttons to toggle the closed and locked states', () => {
      const { getByText } = render(<Controls />);
      getByText (/Lock Gate/); 
      getByText (/Close Gate/);
    });
    it('the closed toggle button is disabled if the gate is locked', () => {
      const { getByText } = render(<Controls closed={true} locked={true}/>);
      const openButton = getByText(/Open Gate/);
      expect(openButton.disabled).toBeTruthy();
    });
    it('the locked toggle button is disabled if the gate is open', () => {
      const { getByText } = render(<Controls closed={false} locked={false}/>);
      const lockButton = getByText(/Lock Gate/);
      expect(lockButton.disabled).toBeTruthy();
    });
  }); 
    
