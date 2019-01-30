// Test away!

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

describe('<Controls/>', () => {
   it('should render buttons to toggle', () => {
      const { getByText } = render(<Controls closed={false} locked={false} />);
      const lockBtn = getByText(/lock gate/i);
      const closeBtn = getByText(/close gate/i);

      expect(lockBtn).toHaveTextContent(/lock gate/i);
      expect(closeBtn).toHaveTextContent(/close gate/i);
   });

   it('close gate button becomes open gate button when clicked', async () => {
      const { getByText } = render(<Controls closed={false} locked={false} />);
      const closeBtn = getByText(/close gate/i);

      await fireEvent.click(closeBtn);

      const openBtn = getByText(/open gate/i);

      expect(openBtn).toHaveTextContent(/open gate/i);
   });
});
