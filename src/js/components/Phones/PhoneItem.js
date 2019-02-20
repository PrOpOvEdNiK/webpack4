import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// по сути это должен быть "тупой" компонент, но оставлю для примера
export default class PhoneItem extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        doDeletePhone: PropTypes.func.isRequired
    };

    render() {
        return <div>
            <p>
                <Typography variant="overline" gutterBottom>
                    {this.props.text}
                </Typography>
                <Button color="secondary" variant="contained" size="small"
                        onClick={() => this.props.doDeletePhone(this.props.text)}>
                    Удалить
                </Button>
            </p>
        </div>
    }
}