// // Test away
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("locked button and open gate button trigger only one each time clicked ", () => {
  /// AAA

  // Arrange
  const { getByTestId } = render(<Dashboard />);

  const lockButton = getByText(/Locked/i);
  const openButton = getByText(/Unlocked/i);

  // Act

  fireEvent.click(lockButton);
  fireEvent.click(openButton);

  // Assert

  //   expect(lockButton).toHaveBeenCalledTimes(1);
  //   expect(openButton).toHaveBeenCalledTimes(1);
});
