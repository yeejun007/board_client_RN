import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Button} from 'native-base';
import {styles} from './css/start_page_css';

// HOC로 키보드를 없애는 컴포넌트를 만든다
const DismissKeyboard = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
};

class start_page extends Component {
  constructor(props) {
    super(props);
  }
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
                autoCapitalize="none"
                clearButtonMode="while-editing" // ios only
                keyboardType="email-address"
              />
            </View>
            <View style={styles.passwordContainer}>
              <Text>password : </Text>
              <TextInput
                style={styles.passwordInput}
                autoCapitalize="none"
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
