// @vendors
import React from 'react';

// @styles
import './Scoreboard.scss';

// @state
import { defaults } from '../../state';

const Scoreboard = () => {
    const { correctAnswers, maxQuestions, pastQuestions } = defaults;
    return (
        /*eslint-disable */
        <div className="scoreboard">
            <h3 className="scoreboard__info">{(pastQuestions.length < maxQuestions) ? pastQuestions.length : maxQuestions} of {maxQuestions} </h3>
            <h3 className="scoreboard__info">Grade: {correctAnswers.length * 10}% </h3>
        </div>
        /* eslint-enable */
    );
};

export default Scoreboard;
