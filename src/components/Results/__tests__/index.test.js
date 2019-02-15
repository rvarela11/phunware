// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Results from '../Results';

describe('Results Container', () => {
    it('renders Results without crashing', () => {
        shallow(<Results />);
    });
});
