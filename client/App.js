import React from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  Image,
  Button,
  PermissionsAndroid,
  CameraRoll
} from 'react-native';
import { 
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  TabNavigator,
  TabBarBottom 
} from 'react-navigation';
import { Ionicons, SimpleLineIcons, Foundation } from "@expo/vector-icons";
import { TextInput } from 'react-native-gesture-handler';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white'
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
            placeholder="검색"
            // onChangeText={(text) => this.setState({text})}
            // value={this.state.text}
          />
      </View>
    )
  } 
}

class AddPhotoScreen extends React.Component {
  // async componentWillMount() {
  //   await requestCameraPermission()
  // }
  // getPhotos() {
    //   CameraRoll.getPhotos({
      //       first: 20,
      //       assetType: 'Photos',
      //     })
      //     .then(r => {
        //       this.setState({ photos: r.edges });
        //     })
        //     .catch((err) => {
          //        //Error Loading Images
          //     });
          //   };
  // async requestCameraPermission() {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //       {
  //         'title': 'Cool Photo App Camera Permission',
  //         'message': 'Cool Photo App needs access to your camera ' +
  //                     'so you can take awesome pictures.'
  //       }
  //     )
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log("You can use the camera")
  //     } else {
  //       console.log("Camera permission denied")
  //     }
  //   } catch (err) {
  //     console.warn(err)
  //   }
  // }
  render() {
    return (
      <View>
        {/* {this.requestCameraPermission()} */}
        {/* {this.getPhotos()} */}
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

class ProfileTabScreen extends React.Component {
  render() {
    return (
      <View
          style={{
            flex: 0.7,
            flexDirection: 'column'
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row'
            }}>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
          </View> 
          <View
            style={{
              flex: 1,
              flexDirection: 'row'
            }}>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row'
            }}>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
          </View>
        </View>
    )
  }
}
class ProfileTab2Screen extends React.Component {
  render() {
    return (
      <View>
        <Text>test2</Text>
      </View>
    )
  }
}
class ProfileTab3Screen extends React.Component {
  render() {
    return (
      <View>
        <Text>test3</Text>
      </View>
    )
  }
}
class ProfileTab4Screen extends React.Component {
  render() {
    return (
      <View>
        <Text>test4</Text>
      </View>
    )
  }
}
const TabNav2 = createMaterialTopTabNavigator (
  {
    GridPicture: ProfileTabScreen,
    ListPicture: ProfileTab2Screen,
    Tag: ProfileTab3Screen,
    Bookmark: ProfileTab4Screen,
  },{
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'GridPicture' ) {
            iconName = `ios-home${focused? '': '-outline'}`;
          } else if (routeName === 'ListPicture') {
            iconName = `ios-search${focused? '': '-outline'}`;
          } else if (routeName === 'Tag') {
            iconName = `ios-add-circle${focused? '': '-outline'}`;
          } else if (routeName === 'Bookmark') {
            iconName = `ios-heart${focused? '': '-outline'}`;
          } 
          return <Ionicons name={iconName} size={25}/>;
        },
      }),
      // tabBarOptions: {
      //   showLabel: false
      // },
      tabBarPosition: 'top',
      swipeEnabled: false,
      animationEnabled: false,
      tabBarOptions: {
        style: {
          backgroundColor: 'white'
        }
      }
  }
);

class ProfileScreen extends React.Component {
  renderProfileHeader() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row'
        }}>
        <View
          style={{
            flex: 0.3
          }}>
          <Image
            source={require('./image/test.png')}
            style={{
              height: 70,
              width: 70,
              borderRadius: 100,
            }}
          />
          <Text>Sunghee</Text>
        </View>
        <View 
          style={{
            flex: 0.7,
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}>
          <View>
            <Text>게시물</Text>
          </View>
          <View>
            <Text>팔로워</Text>
          </View>
          <View>
            <Text>팔로잉</Text>
          </View>
        </View>
      </View>
    );
  }

  renderProfileTab() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
        <View>
          <Foundation
              name='thumbnails'
              size={25}
            />
        </View>
        <View>
          <Ionicons
              name='ios-contact-outline'
              size={25}
            />
        </View>
        <View>
          <Ionicons
              name='ios-list-outline'
              size={25}
            />
        </View>
        <View>
          <Ionicons
              name='ios-bookmark-outline'
              size={25}
            />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'white'
        }}>
        <View
          style={{
            flex: 0.2
          }}>
          {this.renderProfileHeader()}
        </View>
        <View
          style={{
            flex: 0.1,
            borderTopWidth: 0.5,
            borderTopColor: 'lightgray',
            borderBottomWidth: 0.5,
            borderBottomColor: 'lightgray'
          }}>
          {this.renderProfileTab()}
        </View>
        <View
          style={{
            flex: 0.7,
            flexDirection: 'column'
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row'
            }}>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
          </View> 
          <View
            style={{
              flex: 1,
              flexDirection: 'row'
            }}>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row'
            }}>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
            <View
              style={{
                flex: 1
              }}>
              <Image
                  source={require('./image/test.png')}
                  style={{
                  }}
                  resizeMode= 'contain'
                />
            </View>
          </View>
        </View>
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
      screen: TabNav2,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 
          <Text style={{
            justifyContent: 'center',
            alignItems: 'center'
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
            style={{marginRight: 10}}
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