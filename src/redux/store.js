/*
    This file creates a redux store.
    Pretty standard stuff.
*/

import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;
