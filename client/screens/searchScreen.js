import React from 'react';
import { 
  StyleSheet, 
  View, 
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class SearchScreen extends React.Component {
  state={
    text: ''
  }

  render() {
    return (
      <View
        style={{ paddingTop: Expo.Constants.statusBarHeight }}>
        <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            placeholder="검색"
            // onChangeText={(text) => this.setState({text})}
            // value={this.state.text}
          />
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgray',
    padding: 3,
    paddingLeft: 10,
    backgroundColor: '#f2f2f2',
    textDecorationColor: 'gray',
    marginBottom: 10,
    textAlign: 'center'
  }
})