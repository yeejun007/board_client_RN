import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {Button} from 'native-base';
import {styles} from './css/start_page_css';
import DismissKeyboard from '../components/dissmiss_keyboard';

class start_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      passwrod: null,
    };
  }

  // changeEmail = value => {
  //   this.setState({email: value});
  // };

  // changePassword = value => {
  //   this.setState({email: value});
  // };

  loginBtn = () => {
    fetch('', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'json',
        Authorization: '',
      },
      body: this.state,
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <DismissKeyboard>
        <KeyboardAvoidingView style={styles.mainContainer} behavior="position">
          <View>
            <Image
              source={require('../logo.png')}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
          <View style={styles.typingContainer}>
            <View style={styles.emailContainer}>
              <Text>Email : </Text>
              <TextInput
                style={styles.emailInput}
                onChangeText={value => {
                  this.setState({email: value});
                }}
                placeholder=" your_email@gmail.com"
                autoCapitalize="none"
                clearButtonMode="while-editing" // ios only
                keyboardType="email-address"
              />
            </View>
            <View style={styles.passwordContainer}>
              <Text>password : </Text>
              <TextInput
                style={styles.passwordInput}
                onChangeText={value => {
                  this.setState({password: value});
                }}
                autoCapitalize="none"
                secureTextEntry={true}
                clearButtonMode="while-editing" // ios only
              />
            </View>
            <Button
              style={styles.loginBtn}
              transparent
              onPress={() => {
                this.props.navigation.navigate('main');
              }}>
              <Text>로그인</Text>
            </Button>
            <Button
              style={styles.signupBtn}
              transparent
              onPress={() => {
                this.props.navigation.navigate('signup');
              }}>
              <Text>회원가입</Text>
            </Button>
          </View>
        </KeyboardAvoidingView>
      </DismissKeyboard>
    );
  }
}

export default start_page;
