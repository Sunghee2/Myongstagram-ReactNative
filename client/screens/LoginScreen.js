import React from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  Image,
  Button,
  Alert
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Facebook } from 'expo';

import { connect } from 'react-redux';
import { signin, facebookLogIn } from '../actions';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email: '',
      password: ''
    };
  }

  onPressButton = () => {
    this.props.signin(this.state.email, this.state.password)
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
              source={require('../image/logo.png')}
              style={{ 
                height: 60, 
                alignItems: 'center',
              }}
              resizeMode={'contain'}
            />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            placeholder="이메일"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <Text style={styles.passwordText}>비밀번호를 잊으셨나요?</Text>
          <Button
            style={styles.button}
            onPress={this.onPressButton}
            disabled={!this.state.email || !this.state.password}
            title="로그인"
          />
          <Button
            style={styles.button}
            onPress={() => this.props.facebookLogIn()}
            title="페이스북 로그인"
          />
        </View>
        <View style={styles.signinContainer}>
          <Text style={styles.signinText}>계정이 없으신가요?</Text>
          <Text 
            style={styles.signinText2}
            onPress={()=>this.props.navigation.navigate('CheckId')}>가입하기</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30
  },
  inputContainer: {
    flex: 3,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray'
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgray',
    padding: 3,
    paddingLeft: 10,
    backgroundColor: '#f2f2f2',
    textDecorationColor: 'gray',
    marginBottom: 10,
  },
  passwordText: {
    textAlign: 'right',
    color: 'steelblue',
    fontSize: 10,
    marginBottom: 10
  },
  button: {
    padding: 5,
    marginBottom: 50
  },
  signinContainer: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signinText: {
    color: 'gray',
    fontSize: 10,
    marginRight: 10,
    textAlign: 'center'  
  },
  signinText2: {
    color: 'steelblue',
    fontSize: 10,
    textAlign: 'center'
  }
});

export default connect(null, { signin, facebookLogIn })(LoginScreen);