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
    case 'EDIT_USER':
      var updatedUser = state.map( post => {
        if(post.User.id == action.payload.id) {
          return {...post, 'User':action.payload};
        }
        return post;
      });
      return updatedUser;
    case 'ADD_LIKE':
      var updatedLike = state.map( post => {
        if (post.id === action.payload.postId) {
          var like = [action.payload, ...post.Likes];
          return {...post, 'Likes': like};
        }
        return post;
      });
      return updatedLike;
    case 'DELETE_LIKE':
      var deletedLike = state.map( post => {
        if (post.id == action.payload.postId) {
          var likesArr = post.Likes.filter( like => like.userId != action.payload.userId);
          return {...post, 'Likes': likesArr};
        }
        return post;
      });
      return deletedLike;
    default:
      return state;
  }
}


function user(state = [], action) {
  switch (action.type) {
    case 'FETCHED_USER':
      return {...state, 'user': action.payload};
    case 'EDIT_USER':
      return {...state, 'user': action.payload};
    case 'FETCHED_MYPOST':
      return {...state, 'posts': action.payload};
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
  // my_post: myPost,
  search: search,
  user: user
});

export default rootReducer;