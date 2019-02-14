// @vendors
import React from 'react';
import { Query } from 'react-apollo';

// @material-ui
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

// @components
import QuizCard from '../Card/Card';

// @queries
import { getQuestions } from './queries';

// @styles
import './Quiz.scss';

const Quiz = () => (
    <Query query={getQuestions}>
        {({ data: { Questions, isQuestionAnswered }, loading, refetch }) => {
            console.log({ isQuestionAnswered });
            if (loading) {
                /*eslint-disable */
                Questions = [];
                /* eslint-enable */
                return (
                    <CircularProgress />
                );
            }
            return (
                <div className="quiz">
                    { Questions.map(item => <QuizCard key={item.id} item={item} isQuestionAnswered={isQuestionAnswered} />) }
                    <Button
                        color="primary"
                        disabled={!isQuestionAnswered}
                        onClick={() => refetch()}
                        size="large"
                        variant="contained"
                    >
                        Next
                    </Button>
                </div>
            );
        }}
    </Query>
);

export default Quiz;
