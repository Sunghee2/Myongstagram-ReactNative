import React from 'react';
import RootNavigation from './navigations/rootNavigation';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import NavigationService from './navigation_service';
import reducers from './reducers';

const composeStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={composeStoreWithMiddleware(reducers)}>
        <RootNavigation ref={navigationRef => {
          NavigationService.setTopLevelNavigator(navigationRef);
        }} />
      </Provider>
    );
  }
}

