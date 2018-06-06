import React from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  Image,
  Button,
  ActivityIndicator
} from 'react-native';
import { ImagePicker } from 'expo';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import uuid from 'uuid';
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { createStackNavigator } from 'react-navigation';



import { postNew } from '../actions';
import { firebaseConfig } from '../config';

firebase.initializeApp(firebaseConfig);

class AddPhotoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      content: '',
      uploading: false
    };
  }

  componentWillMount() {
    this._pickImage();
  }

  render() {
    let { image } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {image &&
            <Image source={{ uri: image }} style={styles.image} />}
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
        <Button
          // style={styles.button}
          onPress={() => this.props.postNew(this.state.image, this.state.content)}
          title="공유"
        />
      </View>
    );
  }

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 3.5],
    });

    this._handleImagePicked(pickerResult);
  };

  _handleImagePicked = async pickerResult => {
    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        uploadUrl = await uploadImageAsync(pickerResult.uri);
        this.setState({ image: uploadUrl });
      }
    } catch (e) {
      console.log(e);
      alert('Upload failed, sorry :(');
    } finally {
      this.setState({ uploading: false });
    }
  };
}
   
async function uploadImageAsync(uri) {
  const response = await fetch(uri);
  const blob = await response.blob();
  const ref = firebase
    .storage()
    .ref('post_images')
    .child(uuid.v4());

  var snapshot = await ref.put(blob);
  return ref.getDownloadURL()
}

export default connect(null, { postNew } )(AddPhotoScreen);

const AddPhotoStack = createStackNavigator (
  {
    AddPhoto: {
      screen: AddPhotoScreen,
      navigationOptions: ({ navigation }) => ({
        header:
          <View>
            <SimpleLineIcons name='camera' size={25}/>
            <Image 
              source={require('../image/logo.png')} 
              style={{ height: 35 }}
              resizeMode={'contain'}
            />
            <Ionicons name='ios-paper-plane-outline' size={30}/>
          </View>
      })
    }
  }
);


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 3,
    backgroundColor: 'green'
  },
  image: {
    width: 200, 
    height: 200
  },
  inputContainer: {
    flex: 2,
    backgroundColor: 'yellow'
  },
  input: {
    width: '100%',
  }
})
