// Test away
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('has default state of (Unlocked, Open, Lock Gate, Close Gate)' ,() => {
      const { getByText } = render(<Dashboard />);
      expect(getByText('Unlocked'));
      expect(getByText('Open'));
      expect(getByText('Lock Gate'));
      expect(getByText('Close Gate'));
    })
    it('has buttons that change state', () => {
      const { getByText } = render(<Dashboard />);

      const closeButton = getByText("Close Gate")
      fireEvent.click(closeButton);
      expect(getByText('Unlocked'));
      expect(getByText('Closed'));
      expect(getByText('Lock Gate'));
      expect(getByText('Open Gate'));

      const lockButton = getByText("Lock Gate")
      fireEvent.click(lockButton)
      expect(getByText('Locked'));
      expect(getByText('Closed'));
      expect(getByText('Unlock Gate'));
      expect(getByText('Open Gate'));

      const unlockButton = getByText("Unlock Gate")
      fireEvent.click(lockButton)
      expect(getByText('Unlocked'));
      expect(getByText('Closed'));
      expect(getByText('Lock Gate'));
      expect(getByText('Open Gate'));

      const openButton = getByText("Open Gate")
      fireEvent.click(openButton)
      expect(getByText('Unlocked'));
      expect(getByText('Open'));
      expect(getByText('Lock Gate'));
      expect(getByText('Close Gate'));
    })
});
