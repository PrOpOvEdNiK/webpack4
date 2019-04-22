import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Helmet from 'react-helmet';

import * as actions from '../actions/phones';

import PhoneForm from "../components/Phones/PhoneForm";
import PhonesList from "../components/Phones/PhonesList";

class HomePage extends React.Component {
    render() {
        return (
        <div>
            <Helmet>
                <title>Первая страница</title>
            </Helmet>

            <Typography variant="h2" gutterBottom>
                Первая страница
            </Typography>

            <PhoneForm doAddPhone={this.props.doAddPhone}/>
            <PhonesList {...this.props} />
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        phones: state.phones.phones
    };
};

function mapDispatchToProps(dispatch) {
    return {
        doAddPhone: (phone) => dispatch(actions.addPhone(phone)),
        doDeletePhone: (phone) => dispatch(actions.deletePhone(phone))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));