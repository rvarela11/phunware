// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// @material-ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// Setting material-ui classes
const styles = theme => ({
    results_card: {
        width: '60%',
        height: '100vh',
        overflowY: 'scroll',
        marginBottom: '10px',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '95%'
        }
    },
    results_info: {
        textAlign: 'right',
        paddingBottom: '16px'
    },
    media: {
        width: '100%',
        minHeight: '50vh'
    },
    message: {
        paddingTop: '16px',
        paddingBottom: '16px'
    },
    typography_media_query: {
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1.25rem'
        }
    }
});

const Results = (props) => {
    const { classes, correctAnswers } = props;
    const DisplayMessage = (correctAnswers < 10)
        ? `You got a ${correctAnswers * 10}% score?! Why not aim for 100%. It'd be a lot cooler if you did.`
        : 'You got a 100% score!. Alright, alright, alright!';
    return (
        /*eslint-disable */
        <Card className={classes.results_card}>
            <CardContent>
                <Typography 
                    className={`${classes.results_info} ${classes.typography_media_query}`} 
                    variant='h5'
                > 
                    Correct: {correctAnswers} / Incorrect: {10 - correctAnswers} 
                </Typography>
                <CardMedia
                    className={classes.media}
                    image={(correctAnswers < 10) 
                        ? 'https://media1.tenor.com/images/59c2dda858ea7e6cde42ec72315ff606/tenor.gif?itemid=5205414'
                        : 'https://media.giphy.com/media/g5zvwUa9720pO/giphy.gif'
                    }
                    title='Matthew Mcconaughey'
                />
                <Typography 
                    className={`${classes.message} ${classes.typography_media_query}`} 
                    variant='h5'
                > 
                    {DisplayMessage}
                </Typography>
            </CardContent>
        </Card>
        /* eslint-enable */
    );
};

Results.propTypes = {
    classes: PropTypes.object.isRequired,
    correctAnswers: PropTypes.number.isRequired
};

export default withStyles(styles)(Results);
