// Test away

import React from 'react';
import { render } from "@testing-library/react";
import Dashboard from './Dashboard';

test("controls and display rendered to dashboard", () => {
  const { getByText } = render(<Dashboard />);

  getByText(/Unlocked/i);
  const display = getByText(/Open/i);
  getByText(/Lock Gate/i);
  const Buttons = getByText(/Close Gate/i);

  expect(display).toBeDefined;
  expect(Buttons).toBeDefined;
});