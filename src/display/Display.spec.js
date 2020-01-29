// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Display from "./Display";

test("displays locked if lock button is clicked, unlocked if unlock button clicked ", () => {
  /// AAA

  // Arrange
  const { getByText } = render(<Display />);

  const lockButton = getByText(/Locked/i);
  const unlockButton = getByText(/Unlocked/i);

  // Act

  fireEvent.click(lockButton);
  fireEvent.click(unlockButton);

  // Assert

  //   expect(lockButton).toHaveBeenCalledTimes(1);
  //   expect(unlockButton).toHaveBeenCalledTimes(1);
});
