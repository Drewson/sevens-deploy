import { GET_ITEMS, ADD_ITEM, REMOVE_ITEM } from './actions';

export function CartReducer(state = [], action) {
    switch (action.type) {
    case GET_ITEMS:
        return state;
    case ADD_ITEM:
      return [...state, action.payload]
    case REMOVE_ITEM:
      // let newState = state.filter((i) => i === action.payload);
      return state;
    default:
        return state;
    }
}