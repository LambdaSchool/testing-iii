import React from 'react';
import renderer from 'react-test-renderer'; 
import { render, fireEvent, cleanup } from '@testing-library/react';
import Controls from './Controls';
afterEach(cleanup);

describe('<Controls />', () => {
  it('matches snapshot', () => {
    const wrapper = renderer.create(<Controls />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("should not fire 'open gate' when the gate is locked", () => {
    let disabled = true;
    let lockText = 'Unlock Gate';
    let closeText = 'Open Gate';
    let toggleLocked = jest.fn(() => disabled = false);
    let toggleClosed = jest.fn(() => disabled ? closeText = 'Open Gate' : closeText = 'Close Gate');

    //Buttons
    const lockBtn = render(<button onClick={toggleLocked}>{lockText}</button>);
    const closeBtn = render(<button onClick={toggleClosed} disabled={disabled}>{closeText}</button>);

    //If gate is locked, the button doesn't fire and text doesn't change
    fireEvent.click(closeBtn.getByText(/open gate/i));
    expect(toggleClosed).not.toHaveBeenCalled();
    closeBtn.rerender(<button onClick={toggleClosed} disabled={disabled}>{closeText}</button>);
    expect(closeBtn.getByText(/open gate/i)).toBeTruthy();

    //Unlock gate event fires and text changes
    fireEvent.click(lockBtn.getByText(/unlock gate/i));
    expect(toggleLocked).toHaveBeenCalled();

    //Now open gate event fires and text changes
    closeBtn.rerender(<button onClick={toggleClosed} disabled={disabled}>{closeText}</button>);
    fireEvent.click(closeBtn.getByText(/open gate/i));
    expect(toggleClosed).toHaveBeenCalled();
    closeBtn.rerender(<button onClick={toggleClosed} disabled={disabled}>{closeText}</button>);
    expect(closeBtn.getByText(/close gate/i)).toBeTruthy();
  });

  it("should not fire 'lock gate' when the gate is open", () => {
    let disabled = true;
    let lockText = 'Lock Gate';
    let closeText = 'Close Gate';
    let toggleClosed = jest.fn(() => disabled = false);
    let toggleLocked = jest.fn(() => disabled ? lockText = 'Lock Gate' : lockText = 'Unlock Gate');

    //Buttons
    const closeBtn = render(<button onClick={toggleClosed} >{closeText}</button>);
    const lockBtn = render(<button onClick={toggleLocked} disabled={disabled}>{lockText}</button>);
    
    //If gate is open, the button doesn't fire and text doesn't change
    fireEvent.click(lockBtn.getByText(/lock gate/i));
    expect(toggleLocked).not.toHaveBeenCalled();
    lockBtn.rerender(<button onClick={toggleLocked} disabled={disabled}>{lockText}</button>);
    expect(lockBtn.getByText(/lock gate/i)).toBeTruthy();

    //Close gate event fires and text changes
    fireEvent.click(closeBtn.getByText(/close gate/i));
    expect(toggleClosed).toHaveBeenCalled();

    //Lock gate event fires and text changes
    lockBtn.rerender(<button onClick={toggleLocked} disabled={disabled}>{lockText}</button>);
    fireEvent.click(lockBtn.getByText(/lock gate/i));
    expect(toggleLocked).toHaveBeenCalled();
    lockBtn.rerender(<button onClick={toggleLocked} disabled={disabled}>{lockText}</button>);
    expect(lockBtn.getByText(/unlock gate/i)).toBeTruthy();
  });
});