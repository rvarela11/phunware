// @vendors
import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';

// @material-ui
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

// @components
import Scoreboard from '../Scoreboard/Scoreboard';
import QuizCard from '../QuizCard/QuizCard';

// @queries
import { getMaxAndPastQuestions, getQuestions } from './queries';

// @mutations
import { updateQuestionInfo } from '../QuizCard/mutations';

// @styles
import './Quiz.scss';

class Quiz extends Component {
    state = {
        questionId: null
    };

    render() {
        const { questionId } = this.state;
        return (
            <Query query={getMaxAndPastQuestions}>
                {({ data: { maxQuestions, pastQuestions }, loading }) => {
                    if (loading) {
                        /*eslint-disable */
                        pastQuestions = [0];
                        /* eslint-enable */
                        return (
                            <CircularProgress />
                        );
                    }
                    return (
                        <Query query={getQuestions} variables={{ pastQuestions }}>
                            {({ data: { Questions, isQuestionAnswered }, loading, refetch }) => {
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
                                        <Scoreboard />
                                        { Questions.map(item => (
                                            <QuizCard
                                                key={item.id}
                                                item={item}
                                                isQuestionAnswered={isQuestionAnswered}
                                                getQuestionId={questionId => this.setState({ questionId })}
                                            />
                                        ))}
                                        <Mutation mutation={updateQuestionInfo}>
                                            {updateQuestionInfo => (
                                                <Button
                                                    color="primary"
                                                    disabled={!isQuestionAnswered}
                                                    onClick={() => {
                                                        updateQuestionInfo(
                                                            {
                                                                variables:
                                                                {
                                                                    isQuestionAnswered: null,
                                                                    isQuestionCorrect: null,
                                                                    questionId
                                                                }
                                                            }
                                                        );
                                                        refetch();
                                                    }}
                                                    size="large"
                                                    variant="contained"
                                                >
                                                    Next
                                                </Button>
                                            )}
                                        </Mutation>
                                    </div>
                                );
                            }}
                        </Query>
                    );
                }}
            </Query>
        );
    }
}

export default Quiz;
