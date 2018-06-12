import React from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  Image,
  Button,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { ImagePicker } from 'expo';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import uuid from 'uuid';
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import { postNew } from '../actions';
import { firebaseConfig } from '../config';

firebase.initializeApp(firebaseConfig);

class AddPhotoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state

    return {
      headerTitle: '새 게시물',
      headerRight:
        <TouchableOpacity onPress={() => params.pickImage()}>
          <SimpleLineIcons name='camera' size={25} style={{marginRight: 20}}/>
        </TouchableOpacity>
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      content: '',
      uploading: false
    };
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }

  componentWillMount() {
    this._pickImage();
  }

  componentDidMount() {
    this.props.navigation.setParams({ pickImage: this._pickImage })
  }

  onPressButton = () => {
    this.props.postNew(this.state.image, this.state.content);
    this.setState({
      image: null,
      content: ''
    });
  }

  render() {
    let { image } = this.state;
    if (this.state.uploading == true) {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color='gray'/>
        </View>
      );
    }
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
        <View style={styles.buttonContainer}>
          <Button
            // style={styles.button}
            onPress={this.onPressButton}
            title="공유"
          />
        </View>
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
      ToastAndroid.show('Upload failed', ToastAndroid.SHORT);  
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
