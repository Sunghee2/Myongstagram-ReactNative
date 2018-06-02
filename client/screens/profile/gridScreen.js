import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class GridScreen extends React.Component {
  render() {
    return (
      <View style={styles.grid}>
          <View style={styles.gridRow}>
            <View style={styles.gridItem}>
              <Image
                  source={require('../../image/test.png')}
                  style={styles.image}
                  resizeMode= 'contain'
                />
            </View>
            <View style={styles.gridItem}>
              <Image
                  source={require('../../image/test.png')}
                  style={styles.image}
                  resizeMode= 'contain'
                />
            </View>
            <View style={styles.gridItem}>
              <Image
                  source={require('../../image/test.png')}
                  style={styles.image}
                  resizeMode= 'contain'
                />
            </View>
          </View>
          <View style={styles.gridRow}>
            <View style={styles.gridItem}>
              <Image
                  source={require('../../image/test.png')}
                  style={styles.image}
                  resizeMode= 'contain'
                />
            </View>
            <View style={styles.gridItem}>
              <Image
                  source={require('../../image/test.png')}
                  style={styles.image}
                  resizeMode= 'contain'
                />
            </View>
            <View style={styles.gridItem}>
              <Image
                  source={require('../../image/test.png')}
                  style={styles.image}
                  resizeMode= 'contain'
                />
            </View>
          </View>
          <View style={styles.gridRow}>
            <View style={styles.gridItem}>
              <Image
                  source={require('../../image/test.png')}
                  style={styles.image}
                  resizeMode= 'contain'
                />
            </View>
            <View style={styles.gridItem}>
              <Image
                  source={require('../../image/test.png')}
                  style={styles.image}
                  resizeMode= 'contain'
                />
            </View>
            <View style={styles.gridItem}>
              <Image
                  source={require('../../image/test.png')}
                  style={styles.image}
                  resizeMode= 'contain'
                />
            </View>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'column'
  },
  gridRow: {
    flex: 0.333333,
    flexDirection: 'row'
  },
  gridItem: {
    flex: 1,
    borderWidth: 0.3,
    borderColor: 'lightgray'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})