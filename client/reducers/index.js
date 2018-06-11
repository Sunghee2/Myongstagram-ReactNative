import { combineReducers } from 'redux';

function posts(state = [], action) {
  switch (action.type) {
    case 'FETCHED_POSTS':
      return action.payload;
    case 'ADD_POST':
      return [action.payload, ...state];
    case 'EDIT_POST':
      var updatedPost = state.map( post => {
        if(post.id === action.payload.id) {
          return {...post, ...action.payload};
        }
        return post;
      });
      return updatedPost;
    case 'DELETE_POST':
      return state.filter( post => post.id !== action.payload.id);
    case 'ADD_LIKE':
      var updatedLike =state.map( post => {
        if (post.id === action.payload.postId) {
          return {...post, 'like': action.payload};
        }
        return post;
      });
      return updatedLike;
    case 'DELETE_LIKE':
      return '';
    default:
      return state;
  }
}


function myPost(state = [], action) {
  switch (action.type) {
    // case 'FETCHED_USER':
    //   return {...state, 'user': action.payload};
    case 'FETCHED_MYPOST':
      return action.payload;
    default:
      return state;
  }
}

function search(state=[], action) {
  switch (action.type) {
    case 'SEARCH_USER':
      return {...state, 'user': action.payload};
    case 'SEARCH_POST':
      return {...state, 'post': action.payload};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts: posts,
  my_post: myPost,
  search: search
  // user: user
});

export default rootReducer;