import React from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  Image,
  Button,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white'
        // alignItems: 'center',
      }}>
        <View style={{
          flex: 2,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 30
        }}>
          <Image
              source={require('../image/logo.png')}
              style={{ 
                height: 60, 
                alignItems: 'center',
                // flex: 1,
                // justifyContent: 'end'
              }}
              resizeMode={'contain'}
            />
        </View>
        <View style={{
          flex: 3,
          marginLeft: 20,
          marginRight: 20,
        }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'lightgray',
              padding: 3,
              paddingLeft: 10,
              backgroundColor: '#f2f2f2',
              textDecorationColor: 'gray',
              marginBottom: 10,
            }}
            underlineColorAndroid='transparent'
            placeholder="전화번호, 사용자 이름 또는 이메일"
            // onChangeText={(text) => this.setState({text})}
            // value={this.state.text}
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'lightgray',
              padding: 3,
              paddingLeft: 10,
              backgroundColor: '#f2f2f2',
              color: 'gray',
              marginBottom: 10,
            }}
            placeholder="비밀번호"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
          />
          <Text
            style={{
              textAlign: 'right',
              // color: 'dodgerblue',
              color: 'steelblue',
              fontSize: 10,
              marginBottom: 10
            }}
          >
          비밀번호를 잊으셨나요?
          </Text>
          <Button
            style={{
              padding: 5
            }}
            onPress={()=>this.props.navigation.navigate('Home')}
            title="로그인"
          />
        </View>
        <View style={{
          flex: 2,
        }}>
        </View>
      </View>
    );
  }
}

export default LoginScreen;