import store from '../store';
import axios from 'axios';

export const fetchProducts = () => ({type: 'FETCH_PRODUCTS'});

export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    products
});

export const setError = (error) => ({
    type: 'SET_ERROR',
    error
});

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