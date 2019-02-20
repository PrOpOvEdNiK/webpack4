import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransition} from 'react-transition-group';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class PhoneForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            isButtonActive: false
        };

        this.onClick = this.onClick.bind(this);
    }

    static propTypes = {
        doAddPhone: PropTypes.func.isRequired
    };

    inputChangeHandler = e => {
        const {value} = e.target;

        if (!this.state.isButtonActive && value !== '') {
            this.setState({isButtonActive: true});
        }

        this.setState({input: value});
    };

    onClick() {
        if (this.state.input !== '') {
            this.setState({
                input: '',
                isButtonActive: false
            });
            return this.props.doAddPhone(this.state.input);
        }
    }

    render() {
        return <FormControl>
            <TextField
                id="outlined-name"
                label="Phone"
                value={this.state.input}
                onChange={this.inputChangeHandler}
                margin="normal"
                variant="outlined"
            />

            <Button variant="outlined" color="primary"
                    disabled={!this.state.isButtonActive}
                    onClick={this.onClick}
            >
                Добавить
            </Button>
        </FormControl>
    }
}