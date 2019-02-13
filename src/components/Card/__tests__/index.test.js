// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Card from '../Card';

describe('Card Container', () => {
    it('renders Card without crashing', () => {
        shallow(<Card item={{}} />);
    });
});
