// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// @material-ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// @state
import { defaults } from '../../state';// Setting material-ui classes

const styles = {
    resultsCard: {
        width: '60%',
        height: '100vh',
        marginBottom: '10px'
    },
    media: {
        width: '100%',
        minHeight: '50vh'
    }
};

const Results = (props) => {
    const { classes } = props;
    const { correctAnswers } = defaults;
    return (
        /*eslint-disable */
        <Card className={classes.resultsCard}>
            <CardContent>
                <Typography variant="h5" component="h4"> Results </Typography>
                <CardMedia
                    className={classes.media}
                    image="https://i.ytimg.com/vi/kd070Hf8XK4/maxresdefault.jpg"
                    title="Matthew Mcconaughey"
                />
                <Typography variant="h5" component="h4"> Grade: {correctAnswers.length * 10}% </Typography>
                <Typography variant="h5" component="h4"> Correct: {correctAnswers.length} </Typography>
                <Typography variant="h5" component="h4"> Incorrect: {10 - correctAnswers.length} </Typography>
            </CardContent>
        </Card>
        /* eslint-enable */
    );
};

Results.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Results);
