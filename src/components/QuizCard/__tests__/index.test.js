// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import QuizCard from '../QuizCard';

describe('QuizCard Container', () => {
    it('renders QuizCard without crashing', () => {
        shallow(
            <QuizCard
                key={1}
                item={{}}
                isQuestionAnswered
                getQuestionId={() => {}}
            />
        );
    });
});
