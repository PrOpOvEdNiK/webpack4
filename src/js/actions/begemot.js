import store from '../store';
import axios from 'axios';

export function fetchProducts() {
    return {
        type: 'FETCH_PRODUCTS'
    }
}

export function setProducts(products) {
    return {
        type: 'SET_PRODUCTS',
        products
    }
}

export function setError(error) {
    return {
        type: 'SET_ERROR',
        error
    }
}

export function getProducts() {
    store.dispatch(fetchProducts());

    return function (dispatch) {
        return axios.get('http://www.bgm42.ru/api/bonus/getlist/')
            .then(data => {
                if (data.status !== 200) {
                    throw new Error('Ошибка');
                } else {
                    dispatch(setProducts(data.data.result));
                }
            })
            .catch(err => dispatch(setError(err)));
    };
}