import React from 'react';
import PropTypes from 'prop-types';

const BASE_URL = 'http://www.bgm42.ru';

const ProductItem = props => (
    <div style={{display: 'flex', alignItems: 'center', marginBottom: 10}}>
        <img src={BASE_URL + props.product.IMAGE} style={{width: 50, height: 50}} />
        <span>{props.product.TITLE} - {props.product.PRICE} руб.</span>
    </div>
);

ProductItem.propTypes = {
    product: PropTypes.object
};

export default ProductItem;