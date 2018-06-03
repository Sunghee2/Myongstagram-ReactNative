import React from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  Image,
  Button,
  PermissionsAndroid,
  CameraRolls
} from 'react-native';

import { ImagePicker } from 'expo';
import { TextInput } from 'react-native-gesture-handler';



class AddPhotoScreen extends React.Component {
  state = {
    image: null,
    context: '',
  };

  componentWillMount() {
    this._pickImage();
  }

  render() {
    let { image } = this.state;
    return (
      <View style={styles.container}>
        <View>
          {image &&
            <Image source={{ uri: image }} style={styles.image} />}
        </View>
        <View>
          <TextInput
            multiline
            style={styles.input}
            underlineColorAndroid='transparent'
            placeholder="설명 입력..."
            onChangeText={(context) => this.setState({context})}
            value={this.state.context}
            maxLength={50}
          />
        </View>
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    width: 200, 
    height: 200
  },
  input: {

  }
})


export default AddPhotoScreen;