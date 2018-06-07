import React from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  Image,
  Button,
  ActivityIndicator
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

import { postNew } from '../actions';
import { firebaseConfig } from '../config';


export default class EditPostScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header:
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View>
          <Text style={{ textAlign: 'center'}}>게시물 수정</Text>
        </View>
      </View>
  })

  constructor(props) {
    super(props);
    console.log(this.props.navigation.state.params.post);
    this.state = {
      content: this.props.navigation.state.params.post.content || '',
      image: this.props.navigation.state.params.post.image
    };
  }

  render() {
    console.log("here??")
    console.log(this.state.content);
    console.log(this.state.image);
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: this.state.image }} style={styles.image} />}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            multiline
            style={styles.input}
            underlineColorAndroid='transparent'
            placeholder="설명 입력..."
            onChangeText={(content) => this.setState({content})}
            value={this.state.content}
            maxLength={50}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.postNew(this.state.image, this.state.content)}
            title="공유"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: 10,
    paddingTop: Expo.Constants.statusBarHeight
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 200, 
    height: 200
  },
  inputContainer: {
    flex: 1,
    alignItems: 'stretch',
    marginLeft: 20,
    marginRight: 20
  },
  input: {
    width: '100%',
  },
  buttonContainer: {
    marginBottom: 10
  }
})