// Test away!
// Test away!

import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test("unlocked and open set for default", () => {
  const State = {
    locked: false,
    closed: false
    
  };
  const { getByText } = render(<Display 
      locked = {State.locked}
      closed = {State.closed}
    />);
  expect(getByText(/unlocked/i)).toBeDefined();
  expect(getByText(/open/i)).toBeDefined();
});

test("displays state of gate", () => {
  const State = {
    locked: true,
    closed: true
  }
  const { getByText } = render(
    <Display
      locked={State.locked}
      closed={State.closed}
    />
  );
  expect(getByText(State.locked ? /locked/i : /unlocked/i)).toBeDefined();
  expect(getByText(State.closed ? /closed/i : /open/i)).toBeDefined();
});

test("displays correct value", () => {
  const State = {
    closed: true
  }
  const { getByText } = render(<Display closed={State.closed} />);
  expect(getByText(State.closed ? /closed/i : /open/i)).toBeDefined();
})

test("locked is displayed when locked", () => {
  const State = {
    locked: true
  }
  const { getByText } = render(<Display locked={State.locked} />);
  expect(getByText(State.locked ? /locked/i : /unlocked/i)).toBeDefined();
})

test("red displayed for correct value", () => {
  const State = {
    locked: true,
    closed: true
  }
  const { getByText } = render(<Display locked={State.locked} closed={State.closed} />);
  const isLocked = getByText(/locked/i);
  const isClosed = getByText(/closed/i);
  expect(isLocked.classList.contains('red-led')).toBe(true);
  expect(isClosed.classList.contains('red-led')).toBe(true);
});

test("correct value displayed, green", () => {
  const State = {
    locked: false,
    closed: false
  };
  const { getByText } = render(
    <Display locked={State.locked} closed={State.closed} />
  );
  const isLocked = getByText(/unlocked/i);
  const isClosed = getByText(/open/i);
  expect(isLocked.classList.contains("green-led")).toBe(true);
  expect(isClosed.classList.contains("green-led")).toBe(true);
});