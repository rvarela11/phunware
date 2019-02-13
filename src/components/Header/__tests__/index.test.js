// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Header from '../Header';

describe('Header Container', () => {
    it('renders Header without crashing', () => {
        shallow(<Header />);
    });
});
