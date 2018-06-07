import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    FlatList
} from "react-native";

import { Container, Content, Icon, Header, Left, Body, Right, Segment, Button } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
var { height, width } = Dimensions.get('window');

import CardComponent from '../../components/card';

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
  }

  tabClicked(tabIndex) {
    this.setState({
      tabIndex
    });
  }

  renderImage() {
    return images.map((image, index) => {
      return (
        <View key={index} style={[
          { width: width / 3 }, 
          { height: width / 3}, 
          { marginBottom: 2 }, 
          index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0}
        ]}>
          <Image source={image} style={{
            flex: 1,
            alignSelf: 'stretch',
            width: undefined,
            height: undefined,
          }}/>
        </View>
      );
    });
  }

  renderTab() {
    if (this.state.tabIndex == 0) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
          {this.renderImage()}
        </View>
      );
    } else if (this.state.tabIndex == 1) {
      return (
        <View>
        </View>
      );
    }
  }

  render() {
    return (
      <View/>
    );
  }
}


const styles = StyleSheet.create({
  Container: {
      flex: 1,
      backgroundColor: 'white'
  }
});