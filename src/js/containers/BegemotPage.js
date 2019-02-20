import React from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import * as actions from "../actions/begemot";

import ProductsList from "../components/Begemot/ProductsList";

class BegemotPage extends React.Component {
    componentDidMount() {
        this.props.doGetProducts();
    }

    renderLoader() {
        return this.props.isFetching ? <Typography variant="h3" gutterBottom>Загрузка...</Typography> : '';
    }

    renderError() {
        return this.props.error ? <Typography variant="h3" gutterBottom>Ошибка!</Typography> : '';
    }

    render() {
        return (
            <div>
                <Typography variant="h2" gutterBottom>
                    Begemot Page
                </Typography>

                {this.renderLoader()}
                {this.renderError()}
                
                <ProductsList products={this.props.products}/>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.begemot.isFetching,
        products: state.begemot.products,
        shops: state.begemot.shops,
        error: state.begemot.error
    };
};

function mapDispatchToProps(dispatch) {
    return {
        doGetProducts: () => dispatch(actions.getProducts()),
        // doGetShops: () => dispatch(actions.getShops())
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BegemotPage));