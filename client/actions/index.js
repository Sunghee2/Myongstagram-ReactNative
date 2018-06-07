import axios from 'axios';
import qs from 'qs';
import { AsyncStorage, ToastAndroid } from 'react-native';
import { Config } from '../config';
import NavigationService from '../navigation_service';

export function checkEmail(email) {
  return async dispatch => {
    try {
      const response = await axios.post(`${Config.server}/api/users`,
        qs.stringify({
          email: email
        }));
      if (response.status == 200) {
        NavigationService.navigate('CheckPw', { email : email });
      } 
    } catch (err) {
      if (err.response.status == 422) {
        ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT);
      }
    }
  }
}

export function signup(email, username, password) {
  return async dispatch => {
    try {
      const response = await axios.post(`${Config.server}/api/users/new`,
      qs.stringify({
        email: email,
        username: username,
        password: password
      }));
      if (response.status == 200) {
        ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
        NavigationService.navigate('Login');
      }
    } catch (err) {
      if (err.response.status == 422) {
        ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT);
      }      
    }
  }
}

export function signin(email, password) {
  return async dispatch => {
    try {
      const response = await axios.post(`${Config.server}/api/oauth/token`,
        qs.stringify({
          username: email,
          password: password,
          client_secret: Config.clientSecret,
          client_id: Config.clientId,
          grant_type: 'password'
        }), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
      await AsyncStorage.setItem('accessToken', response.data.access_token);
      NavigationService.navigate('Home');
    } catch (err) {
      ToastAndroid.show('Invalid ID or Password', ToastAndroid.SHORT);  
    }
  };
}

export function signout() {
  console.log("SIGNOUT!!");
  return async dispatch => {
    console.log("DELETE authorization header!");
    delete axios.defaults.headers.common['Authorization'];
    await AsyncStorage.clear();
    NavigationService.navigate('Login');
  };
}


export function fetchPosts() {
  return async dispatch => {
    axios.get(`${Config.server}/api/posts`).then(response => {
      dispatch({ type: 'FETCHED_POSTS', payload: response.data});
    }).catch(err => {
      console.log(err.response);
      if (err.response.status == 401) {
        dispatch(signout());
      } else {        
        alert('Network Error');
      }
    })
  }
}

export function postNew(image, content) {
  return async dispatch => {
    try {
      const response = await axios.post(`${Config.server}/api/posts/new`,
        qs.stringify({
          image: image,
          content: content
        }));
      ToastAndroid.show('새 글을 등록하였습니다.', ToastAndroid.SHORT);  
      NavigationService.navigate('Home');
    } catch (err) {
      console.log(err);
    }
  }
}

export function editPost(id, content) {
  return async dispatch => {
    try {
      const response = await axios.post(`${Config.server}/api/posts/${id}`,
        qs.stringify({
          content: content
        }))
      ToastAndroid.show('성공적으로 수정되었습니다!', ToastAndroid.SHORT);
      NavigationService.navigate('Feed');  
    } catch (err) {
      console.log(err);
    }
  }
}

export function deletePost(id) {
  return async dispatch => {
    try {
      const response = await axios.delete(`${Config.server}/api/posts/${id}`);
      ToastAndroid.show('성공적으로 삭제되었습니다!', ToastAndroid.SHORT);
      NavigationService.navigate('Feed');  
    } catch (err) {
      console.log(err);
    }
  }
}