import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class SigninScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.navigation.state.params.email,
      username: '',
      password: ''
    }
  }


  submit = () => {
    // fetch('https://mywebsite.com/endpoint/', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     firstParam: 'yourValue',
    //     secondParam: 'yourOtherValue',
    //   }),
    // });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.nameText}>이름 및 비밀번호</Text>
          <Text style={styles.descText}>친구들이 회원님을 찾을 수 있도록 이름을 추가하세요.</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            placeholder=" 이름"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            placeholder=" 비밀번호"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <Button
            style={styles.button}
            // onPress={this.submit}
            onPress={()=>this.props.navigation.navigate('Login')}
            title="가입"
          />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>이미 계정이 있으신가요?</Text>
          <Text 
            style={styles.loginText2}
            onPress={()=>this.props.navigation.navigate('Login')}>로그인</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: Expo.Constants.statusBarHeight,
  },
  topContainer: {
    flex: 0.95,
    paddingTop: 20, 
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray'
  },
  nameText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },
  descText: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 15
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    height: 33,
    borderColor: 'lightgray',
    backgroundColor: '#f2f2f2',
    textDecorationColor: 'gray',
    marginBottom: 20
  },
  button: {
    width: '100%',
    marginTop: 50,
    padding: 5
  },
  loginContainer: {
    flex: 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'gray',
    fontSize: 10,
    marginRight: 10,
    textAlign: 'center'  
  },
  loginText2: {
    color: 'steelblue',
    fontSize: 10,
    textAlign: 'center'
  }
})