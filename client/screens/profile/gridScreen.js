import React from 'react';
import { View, Image } from 'react-native';

export default class GridScreen extends React.Component {
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
                  source={require('../../image/test.png')}
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