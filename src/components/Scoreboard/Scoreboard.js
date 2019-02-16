// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @styles
import './Scoreboard.scss';

const Scoreboard = (props) => {
    const { correctAnswers, maxQuestions, pastQuestions } = props;
    return (
        /*eslint-disable */
        <div className="scoreboard">
            <h3 className="scoreboard__info">{(pastQuestions.length < maxQuestions) ? pastQuestions.length : maxQuestions} of {maxQuestions} </h3>
            <h3 className="scoreboard__info">Grade: {correctAnswers * 10}% </h3>
        </div>
        /* eslint-enable */
    );
};

Scoreboard.propTypes = {
    correctAnswers: PropTypes.number.isRequired,
    maxQuestions: PropTypes.number.isRequired,
    pastQuestions: PropTypes.array.isRequired
};

export default Scoreboard;
