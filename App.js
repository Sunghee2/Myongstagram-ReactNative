import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { 
  createStackNavigator,
  createBottomTabNavigator,
  TabNavigator,
  TabBarBottom 
} from 'react-navigation';
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

class FeedScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class SearchScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Search!</Text>
      </View>
    )
  } 
}

class AddPhotoScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>AddPhoto!</Text>
      </View>
    )
  } 
}

class NotificationScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Notification!</Text>
      </View>
    )
  } 
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Profile!</Text>
      </View>
    )
  } 
}

const FeedStack = createStackNavigator (
  {
    Feed: {
      screen: FeedScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle:
          <Image
            source={require('./image/logo.png')}
            style={{ 
              height: 40, 
              alignItems: 'center',
              justifyContent: 'center'
            }}
            resizeMode={'contain'}
          />,
        headerLeft: (
          <SimpleLineIcons 
            name='camera' 
            size={25}
            style={{marginLeft: 10}}
          />
        ),
        headerRight: (
          <Ionicons 
            name='ios-paper-plane-outline' 
            size={30}
            style={{marginRight: 10}}
          />
        )
      })
    }
  }
);

const ProfileStack = createStackNavigator (
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 
          <Text style={{
            textAlign: 'center'
          }}>Sunghee</Text>
        ,
        headerLeft: (
          <Ionicons
            name='md-person-add'
            size={25}
            style={{marginLeft: 10}}
          />
        ),
        headerRight: (
          <Ionicons
            name='ios-clock-outline'
            size={25}
            style={{marginRigth: 10}}
          />
        ),
      })
    }
  }
)

// export default class App extends React.Component {
//   render() {
//     return <FeedStack/>;
//   }
// }

export default createBottomTabNavigator (
  {
    Home: FeedStack,
    Search: SearchScreen,
    AddPhoto: AddPhotoScreen,
    Notification: NotificationScreen,
    Profile: ProfileStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home' ) {
          iconName = `ios-home${focused? '': '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused? '': '-outline'}`;
        } else if (routeName === 'AddPhoto') {
          iconName = `ios-add-circle${focused? '': '-outline'}`;
        } else if (routeName === 'Notification') {
          iconName = `ios-heart${focused? '': '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-person${focused? '': '-outline'}`;
        }

        return <Ionicons name={iconName} size={25}/>;
      },
    }),
    tabBarOptions: {
      showLabel: false
    },
    animationEnabled: false,
    swipeEnabled: false,
  }  
);