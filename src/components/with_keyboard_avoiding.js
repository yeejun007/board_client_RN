import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  View,
} from 'react-native';

// 안써도됨 enabled 속성으로 플랫폼을 구분함
export const withBoardBtn = (style, behavior) => WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return Platform.OS === 'android' ? (
        <WrappedComponent {...this.props} />
      ) : (
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior="padding"
          enabled
          keyboardVerticalOffset={0}>
          <WrappedComponent {...this.props} />
        </KeyboardAvoidingView>
      );
    }
  };
