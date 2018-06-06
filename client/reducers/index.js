import { combineReducers } from 'redux';

function posts(state = [], action) {
  switch (action.type) {
    case 'FETCHED_POSTS':
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts
});

export default rootReducer;