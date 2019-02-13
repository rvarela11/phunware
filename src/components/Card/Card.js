// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// @material-ui
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// @styles
import './Card.scss';

// Setting material-ui classes
const styles = {
    quizCard: {
        width: '50%',
        minHeight: '50vh'
    },
    quizCardOption__button: {
        width: '100%',
        justifyContent: 'flex-start',
        fontSize: '1.10rem'
    }
};

const QuizCard = (props) => {
    const { classes, item } = props;
    return (
        <Card className={classes.quizCard}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {item.question}
                </Typography>
                <div className="quizCard__options">
                    { item.options.map((item, index) => (
                        <CardActions key={index}>
                            <Button className={classes.quizCardOption__button} color="primary" size="large">{item}</Button>
                        </CardActions>
                    ))
                    }
                </div>
            </CardContent>
        </Card>
    );
};

QuizCard.propTypes = {
    classes: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired
};


export default withStyles(styles)(QuizCard);
