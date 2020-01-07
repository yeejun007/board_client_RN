import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

// HOC로 키보드를 없애는 컴포넌트를 만든다
const DismissKeyboard = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
