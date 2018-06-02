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

export default class ProfileScreen extends React.Component {
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
