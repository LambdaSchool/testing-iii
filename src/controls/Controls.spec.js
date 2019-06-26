// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import Controls from './Controls';

describe('<Control />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Controls />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})