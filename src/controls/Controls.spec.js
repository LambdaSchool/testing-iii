// // Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";

test("open gate button changes display to open, close gate changes display to closed ", () => {
  /// AAA

  // Arrange
  const { getByLabelText } = render(<Controls />);

  const toggleClosedButton = getByLabelText("closedClass");

  // Assert
  // ?

  // Act

  fireEvent.click(toggleClosedButton);
});
