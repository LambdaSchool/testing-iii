import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup)

describe('Controls', () => {
    it('renders correctly', () => {
        const wrapper = rtl.render(<Controls/>)
        expect(wrapper.baseElement).toMatchSnapshot();
    });

    it('Is visible', () => {
        const visible = rtl.render(<Controls/>);
        visible.queryByTitle(<button></button>)

    })
})