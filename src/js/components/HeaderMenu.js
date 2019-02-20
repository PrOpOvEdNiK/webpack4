import React from 'react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        color: 'white'
    }
});

const HeaderMenu = (props) => {
    const {classes} = props;
    return (
        <nav>
            <Link to="/">
                <Button variant="contained" color="primary" className={classes.button}>
                    Phones List
                </Button>
            </Link>
            <Link to="/begemot/">
                <Button variant="contained" color="primary" className={classes.button}>
                    Begemot Page
                </Button>
            </Link>
        </nav>
    );
};

HeaderMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderMenu);