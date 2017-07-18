import { createStore, combineReducers } from 'redux';
import { CartReducer } from './reducers';



const store = createStore(
    combineReducers({
        cart: CartReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;
