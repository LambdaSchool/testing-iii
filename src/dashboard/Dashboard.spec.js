// Test away
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

 describe('<Dashboard/>', () => {
   it('should render display and controls', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Dashboard />, div);
      ReactDOM.unmountComponentAtNode(div);
   });
});
