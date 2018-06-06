import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Ionicons } from "@expo/vector-icons";

import ProfileTabNavigation from '../../navigations/profileTabNavigation';

const ProfileTabStack = createStackNavigator (
  {
    Profile: {
      screen: ProfileTabNavigation,
      navigationOptions: ({ navigation }) => ({
        header:
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image
                source={require('../../image/test.png')}
                style={styles.profilePhoto}
              />
              <Text style={{ fontSize: 12 }}>Sunghee</Text>
            </View>
            <View style={styles.headerRight}>
              <View style={styles.headerRightTop}>
                <View style={styles.headerRightTopView}>
                  <Text>20</Text>
                  <Text style={styles.headerText}>게시물</Text>
                </View>
                <View style={styles.headerRightTopView}>
                  <Text>205</Text>
                  <Text style={styles.headerText}>팔로워</Text>
                </View>
                <View style={styles.headerRightTopView}>
                  <Text>201</Text>
                  <Text style={styles.headerText}>팔로잉</Text>
                </View> 
              </View>
              <View style={styles.headerRightBottom}>
                <TouchableOpacity style={{flex: 7, borderWidth: 1, borderRadius: 5, borderColor: 'lightgray', justifyContent: 'center', alignItems: 'center', height: '100%', marginRight: 10}}>
                  <Text style={{fontSize: 12, textAlign: 'center'}}>프로필 수정</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1, borderWidth: 1, borderRadius: 5, borderColor: 'lightgray', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                  <Ionicons name='ios-settings' size={20}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      })
    }
  }
)

export default ProfileStack = createStackNavigator (
  {
    Profile: {
      screen: ProfileTabStack,
      navigationOptions: ({ navigation }) => ({
        header: 
          <View style={styles.headerContainer}>
            <Ionicons
              name='md-person-add'
              size={23}
            />
            <Text style={styles.username}></Text>
            <Ionicons
              name='ios-clock-outline'
              size={25}
            />
          </View>
      })
    }
  }
)

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#FAFAFA',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    height: 50,
    paddingTop: Expo.Constants.statusBarHeight
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray'
  },
  headerLeft: {
    flex: 2,
    alignItems: 'center',
  },
  headerRight: {
    flex: 6,
    flexDirection: 'column'
  },
  headerRightTop: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerRightTopView: {
    alignItems: 'center'
  },
  headerRightBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 5
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilePhoto: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  headerText: {
    fontSize: 10,
    color: 'gray'
  },
});


// renderSectionOne(){
//   return romeImages.map((image,index) => {
//     return (
//       <View key={index} style ={[{width :(width/3)},{height:(width)/3},
//         index % 3 !=0 ? {paddingLeft:2} : {paddingLeft:0},{marginBottom:2}]} >
//         <Image style ={{flex:1,width:undefined,height:undefined}}
//         source = {image}/>
//       </View>
//     )
//   })
// }