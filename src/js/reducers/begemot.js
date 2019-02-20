const INITIAL_STATE = {
    isFetching: false,
    products: [],
    shops: [],
    error: false
};

function begemotReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                isFetching: true,
                error: false,
                products: [],
                shops: []
            };

        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.products,
                isFetching: false,
                error: false
            };

        case 'SET_ERROR':
            return {
                ...state,
                isFetching: false,
                error: action.error
            };

        default:
            return state;
    }
}

export default begemotReducer;