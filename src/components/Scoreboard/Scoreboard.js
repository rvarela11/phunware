// @vendors
import React from 'react';

// @styles
import './Scoreboard.scss';

// @state
import { defaults } from '../../state';

const Scoreboard = () => (
    /*eslint-disable */
    <div className="scoreboard">
        <h3 className="scoreboard__info">{defaults.pastQuestions.length} of {defaults.maxQuestions} </h3>
        <h3 className="scoreboard__info">Grade: {defaults.grade.length * 10}% </h3>
    </div>
    /* eslint-enable */
);

export default Scoreboard;
