// @vendors
import React, { Component } from 'react';
import { Query } from 'react-apollo';

// @material-ui
import CircularProgress from '@material-ui/core/CircularProgress';

// @components
import Scoreboard from '../Scoreboard/Scoreboard';
import QuizCard from '../QuizCard/QuizCard';
import Results from '../Results/Results';
import NextButton from '../NextButton/NextButton';
import PlayAgainButton from '../PlayAgainButton/PlayAgainButton';

// @queries
import { getQuizInfoFromState, getQuestions } from './queries';

// @styles
import './Quiz.scss';

class Quiz extends Component {
    state = {
        questionId: null
    };

    render() {
        const { questionId } = this.state;

        const DisplayQuizCards = (Questions, isQuestionAnswered, pastQuestionsLength, maxQuestions) => {
            if (pastQuestionsLength > maxQuestions) {
                return (<Results />);
            }
            return (
                Questions.map(item => (
                    <QuizCard
                        key={item.id}
                        item={item}
                        isQuestionAnswered={isQuestionAnswered}
                        getQuestionId={questionId => this.setState({ questionId })}
                    />
                ))
            );
        };

        const DisplayQuizButtons = (isQuestionAnswered, pastQuestionsLength, maxQuestions) => {
            if (pastQuestionsLength > maxQuestions) {
                return (
                    <PlayAgainButton isQuestionAnswered={isQuestionAnswered} />
                );
            }
            return (
                <NextButton
                    isQuestionAnswered={isQuestionAnswered}
                    maxQuestions={maxQuestions}
                    pastQuestionsLength={pastQuestionsLength}
                    questionId={questionId}
                />
            );
        };

        return (
            // Getting the pastQuestions array to pass as a varaible to the getQuestions query
            <Query query={getQuizInfoFromState}>
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
                        // This query will get all the questions and filter any pastQuestions
                        <Query query={getQuestions} variables={{ pastQuestions }} skip={pastQuestions.length > maxQuestions}>
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
                                        {DisplayQuizCards(Questions, isQuestionAnswered, pastQuestions.length, maxQuestions)}
                                        {DisplayQuizButtons(isQuestionAnswered, pastQuestions.length, maxQuestions)}
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
