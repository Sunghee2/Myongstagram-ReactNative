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

import { editUser } from '../actions';
import { firebaseConfig } from '../config';


class EditUserScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle:
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View>
          <Text style={{ textAlign: 'center'}}>프로필 편집</Text>
        </View>
      </View>
  })

  constructor(props) {
    super(props);
    this.state={
      username: this.props.navigation.state.params.user.username,
      name: this.props.navigation.state.params.user.name,
      image: this.props.navigation.state.params.user.profileImage,
      uploading: false
    };
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }


  render() {
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
          <TouchableOpacity onPress={this._pickImage}>
            <Image source={this.state.image? {uri: this.state.image} : require('../image/profile.jpg')} style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <View style={styles.label}>
              <Text>이름</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="이름"
                value={this.state.name}
                onChangeText={(name) => this.setState({ name })}/>
            </View>
          </View>
          <View style={styles.inputRow}>
            <View style={styles.label}>
              <Text>사용자 이름</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="사용자 이름"
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}/>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="수정" onPress={() => this.props.editUser(this.state.username, this.state.name, this.state.image)}/>
        </View>
      </View>
    );
  }

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 3],
    });
  
    this._handleImagePicked(pickerResult);
  };
  
  _handleImagePicked = async pickerResult => {
    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        uploadUrl = await uploadImageAsync(pickerResult.uri);
        console.log(uploadUrl);
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
    .ref('profile_images')
    .child(uuid.v4());

  var snapshot = await ref.put(blob);
  return ref.getDownloadURL()
}




export default connect( null, { editUser } )(EditUserScreen);

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
    flex: 2,
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5
  },
  image: {
    width: 140, 
    height: 140,
    borderRadius: 100,
  },
  inputContainer: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  label: {
    flex: 2,
    justifyContent: 'center'
  },
  inputView: {
    flex: 3,
    justifyContent: 'center'
  },
  input: {
    width: '100%',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.4
  },
  buttonContainer: {
    marginBottom: 10
  }
})