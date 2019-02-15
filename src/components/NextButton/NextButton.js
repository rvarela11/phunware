// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';

// @material-ui
import Button from '@material-ui/core/Button';

// @mutations
import { updateQuestionInfo } from '../QuizCard/mutations';

// Setting material-ui classes
const styles = {
    button: {
        marginTop: '10px',
        marginBottom: '10px'
    }
};

const NextButton = (props) => {
    const {
        classes,
        isQuestionAnswered,
        maxQuestions,
        pastQuestionsLength,
        questionId
    } = props;
    // This boolean will set the buttonLabel and the color of the button
    const isLastQuestion = (pastQuestionsLength === maxQuestions);
    const buttonLabel = (isLastQuestion) ? 'Finish' : 'Next';
    return (
        <Mutation mutation={updateQuestionInfo}>
            {updateQuestionInfo => (
                <Button
                    className={classes.button}
                    color={isLastQuestion ? 'secondary' : 'primary'}
                    disabled={!isQuestionAnswered}
                    onClick={() => {
                        updateQuestionInfo(
                            {
                                variables:
                                {
                                    isQuestionAnswered: true,
                                    isQuestionCorrect: null,
                                    questionId
                                }
                            }
                        );
                    }}
                    size="large"
                    variant="contained"
                >
                    {buttonLabel}
                </Button>
            )}
        </Mutation>
    );
};

NextButton.propTypes = {
    classes: PropTypes.object.isRequired,
    isQuestionAnswered: PropTypes.bool.isRequired,
    maxQuestions: PropTypes.number.isRequired,
    pastQuestionsLength: PropTypes.number.isRequired,
    questionId: PropTypes.number
};

NextButton.defaultProps = {
    questionId: null
};

export default withStyles(styles)(NextButton);
