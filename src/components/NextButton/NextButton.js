// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';

// @material-ui
import Button from '@material-ui/core/Button';

// @mutations
import { updateQuestionInfo } from '../QuizCard/mutations';

const NextButton = (props) => {
    const {
        isQuestionAnswered,
        questionId
    } = props;
    return (
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
                    Next
                </Button>
            )}
        </Mutation>
    );
};

NextButton.propTypes = {
    isQuestionAnswered: PropTypes.bool.isRequired,
    questionId: PropTypes.number
};

NextButton.defaultProps = {
    questionId: null
};

export default NextButton;
