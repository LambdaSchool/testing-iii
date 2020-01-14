import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('should match snapshot', () => {
        const wrapper = renderer.create(<Dashboard />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});