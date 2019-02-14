// @vendors
import React, { Component } from 'react';
import { Query } from 'react-apollo';

// @material-ui
import CircularProgress from '@material-ui/core/CircularProgress';

// @components
import Scoreboard from '../Scoreboard/Scoreboard';
import QuizCard from '../QuizCard/QuizCard';
import NextButton from '../NextButton/NextButton';

// @queries
import { getMaxAndPastQuestions, getQuestions } from './queries';

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
                {({ data: { pastQuestions }, loading }) => {
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
                            {({ data: { Questions, isQuestionAnswered }, loading }) => {
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
                                        <NextButton
                                            isQuestionAnswered={isQuestionAnswered}
                                            questionId={questionId}
                                        />
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
