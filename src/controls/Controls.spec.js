import React from 'react';
import renderer from 'react-test-renderer';
// import { fireEvent } from '@testing-library/react';
import Controls from './Controls';

describe('<Controls />', () => {
    it('should match snapshot', () => {
        const wrapper = renderer.create(<Controls />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});