import {combineReducers} from 'redux';

import phonesReducer from './phones';
import begemotReducer from './begemot';

const rootReducer = combineReducers({
    phones: phonesReducer,
    begemot: begemotReducer
});

export default rootReducer;