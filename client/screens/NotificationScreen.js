import React from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  Image,
  Button,
  AsyncStorage
} from 'react-native';
import { Permissions, Notifications } from 'expo';
import { connect } from 'react-redux';

import { addPushToken } from '../actions';

class NotificationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      isMount: false,
      notification: {}
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('user')
      .then( data => {
        data = JSON.parse(data);
        this.setState({
          token: data.pushToken,
          isMount: true
        });
      })
  }

  componentDidMount() {
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  async registerForPushNotifications() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = status;
  
    if (status !=='granted') {
      const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
  
    if (finalStatus !== 'granted') {return;}
  
    let token = await Notifications.getExpoPushTokenAsync();

    this.props.addPushToken(token);
    this.setState({ isMount: false });
  }

  _handleNotification = (notification) => {
    this.setState({notification: notification});
  };

  render() {
    if(this.state.isMount && !this.state.token) {
      this.registerForPushNotifications();
    }
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Origin: {this.state.notification.origin}</Text>
        <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
      </View>
    );
  } 
}

export default connect(null, { addPushToken })(NotificationScreen);
