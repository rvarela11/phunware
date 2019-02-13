// @vendors
import React from 'react';
import { Query } from 'react-apollo';

// @queries
import { getQuestions } from './queries';

const Quiz = () => (
    <Query query={getQuestions}>
        {({ data, loading }) => {
            console.log({ data, loading });
            return null;
        }}
    </Query>
);

export default Quiz;
