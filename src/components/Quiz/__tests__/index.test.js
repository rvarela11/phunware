// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Quiz from '../Quiz';

describe('Quiz Container', () => {
    it('renders Quiz without crashing', () => {
        shallow(
            <Quiz />
        );
    });
});
