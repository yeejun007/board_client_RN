import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Button} from 'native-base';
import {styles} from './css/sign_up_css';

// HOC로 키보드를 없애는 컴포넌트를 만든다
const DismissKeyboard = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      nickname: null,
      name: null,
      age: null,
    };
  }

  render() {
    // console.log('sign_up.js 렌더링 ', this.state);

    return (
      <DismissKeyboard>
        <ScrollView>
          <KeyboardAvoidingView
            behavior="position"
            style={styles.mainContainer}>
            <View style={styles.textInputContainer}>
              <Text>email : </Text>
              <TextInput
                style={styles.textInput}
                keyboardType="email-address"
                onChangeText={txt => {
                  this.setState({email: txt});
                }}
              />
            </View>
            <View style={styles.textInputContainer}>
              <Text>password : </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={txt => {
                  this.setState({password: txt});
                }}
              />
            </View>
            <View style={styles.textInputContainer}>
              <Text>nickname : </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={txt => {
                  this.setState({nickname: txt});
                }}
              />
            </View>
            <View style={styles.textInputContainer}>
              <Text>name : </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={txt => {
                  this.setState({name: txt});
                }}
              />
            </View>
            <View style={styles.textInputContainer}>
              <Text>age : </Text>
              {/* 나이는 0~99 까지만 입력되도록 하기 */}
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={num => {
                  this.setState({age: num});
                }}
              />
            </View>
            <Button
              style={styles.submitBtn}
              //   transparent
              onPress={() => {}}
              disabled={true}>
              <Text>제출</Text>
            </Button>
          </KeyboardAvoidingView>
        </ScrollView>
      </DismissKeyboard>
    );
  }
}

export default Signup;
