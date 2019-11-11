// Test away


it('renders "success" text', () => {
    const { getByText, findByText } = render(<App />);
    // Click button
    fireEvent.click(getByText("Get message!"));
    findByText(/success/i);
});