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

class AddPhotoScreen extends React.Component {
  // async componentWillMount() {
  //   await requestCameraPermission()
  // }
  // getPhotos() {
    //   CameraRoll.getPhotos({
      //       first: 20,
      //       assetType: 'Photos',
      //     })
      //     .then(r => {
        //       this.setState({ photos: r.edges });
        //     })
        //     .catch((err) => {
          //        //Error Loading Images
          //     });
          //   };
  // async requestCameraPermission() {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //       {
  //         'title': 'Cool Photo App Camera Permission',
  //         'message': 'Cool Photo App needs access to your camera ' +
  //                     'so you can take awesome pictures.'
  //       }
  //     )
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log("You can use the camera")
  //     } else {
  //       console.log("Camera permission denied")
  //     }
  //   } catch (err) {
  //     console.warn(err)
  //   }
  // }
  render() {
    return (
      <View>
        {/* {this.requestCameraPermission()} */}
        {/* {this.getPhotos()} */}
        <Text>AddPhoto!</Text>
      </View>
    )
  } 
}

export default AddPhotoScreen;