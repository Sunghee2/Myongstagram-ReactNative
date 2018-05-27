import React from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  Image,
  Button
} from 'react-native';
import { 
  createStackNavigator,
  createBottomTabNavigator,
  TabNavigator,
  TabBarBottom 
} from 'react-navigation';
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { TextInput } from 'react-native-gesture-handler';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
      }}>
        <View style={{
          flex: 2,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 30
        }}>
          <Image
              source={require('./image/logo.png')}
              style={{ 
                height: 60, 
                alignItems: 'center',
                // flex: 1,
                // justifyContent: 'end'
              }}
              resizeMode={'contain'}
            />
        </View>
        <View style={{
          flex: 3,
          marginLeft: 20,
          marginRight: 20,
        }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'lightgray',
              padding: 3,
              paddingLeft: 10,
              backgroundColor: '#f2f2f2',
              textDecorationColor: 'gray',
              marginBottom: 10,
            }}
            underlineColorAndroid='transparent'
            placeholder="전화번호, 사용자 이름 또는 이메일"
            // onChangeText={(text) => this.setState({text})}
            // value={this.state.text}
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'lightgray',
              padding: 3,
              paddingLeft: 10,
              backgroundColor: '#f2f2f2',
              color: 'gray',
              marginBottom: 10,
            }}
            placeholder="비밀번호"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
          />
          <Text
            style={{
              textAlign: 'right',
              // color: 'dodgerblue',
              color: 'steelblue',
              fontSize: 10,
              marginBottom: 10
            }}
          >
          비밀번호를 잊으셨나요?
          </Text>
          <Button
            style={{
              padding: 5
            }}
            onPress={()=>this.props.navigation.navigate('Home')}
            title="로그인"
          />
        </View>
        <View style={{
          flex: 2,
        }}>
        </View>
      </View>
    );
  }
}

class FeedScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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

const TabNav = createBottomTabNavigator (
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

const StacksOverTabs = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: TabNav,
  }
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

export default StacksOverTabs;