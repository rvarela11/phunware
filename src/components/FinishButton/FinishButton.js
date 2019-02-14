// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @material-ui
import Button from '@material-ui/core/Button';

const FinishButton = (props) => {
    const { isQuestionAnswered } = props;
    return (
        <Button
            color="primary"
            disabled={!isQuestionAnswered}
            size="large"
            variant="contained"
        >
            Finish
        </Button>
    );
};

FinishButton.propTypes = {
    isQuestionAnswered: PropTypes.bool.isRequired
};

export default FinishButton;
