// @vendors
import React from 'react';
import { Query } from 'react-apollo';

// @components
import QuizCard from '../Card/Card';

// @queries
import { getQuestions } from './queries';

// @styles
import './Quiz.scss';

const Quiz = () => (
    <Query query={getQuestions}>
        {({ data: { Questions }, loading }) => {
            console.log({ Questions, loading });
            if (loading) {
                /*eslint-disable */
                Questions = [];
                /* eslint-enable */
            }
            return (
                <div className="quiz">
                    { Questions.map(item => <QuizCard key={item.id} item={item} />) }
                </div>
            );
        }}
    </Query>
);

export default Quiz;
