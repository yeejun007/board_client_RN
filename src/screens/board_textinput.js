import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {Footer} from 'native-base';
import {StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class BoardTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    // console.log('BoardTextInput.js 렌더링', this.props);

    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <ScrollView
          style={styles.mainContainer}
          ref={ref => (this.scrollView = ref)}
          onContentSizeChange={(contentWidth, contentHeight) => {
            this.scrollView.scrollToEnd({animated: true});
          }}>
          <TextInput placeholder="게시글을 입력하세요" />
          <View style={{height: 50}} />
        </ScrollView>
        <View style={styles.textInputContainer}>
          <TouchableOpacity>
            <View style={styles.imageIconBtn}>
              <FontAwesome name="image" size={20} color="purple" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.shadow}
            onPress={() => {
              this.scrollView.scrollToEnd({animated: true});
            }}>
            <View style={styles.submitBtn}>
              <Text style={styles.submitBtnTextColor}>입력</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Footer style={styles.footer} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FAF9EB',
    padding: 10,
  },
  footer: {backgroundColor: '#022C17'},
  textInputContainer: {
    backgroundColor: '#FAF9EB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  imageIconBtn: {
    // flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  submitBtn: {
    // flex: 1,
    justifyContent: 'center',
    borderWidth: 2,
    padding: 5,
    borderRadius: 20,
    borderColor: 'purple',
    marginLeft: 10,
    marginRight: 5,
    marginTop: 2,
  },
  submitBtnTextColor: {
    fontSize: 20,
    color: 'purple',
  },
});

export default BoardTextInput;
