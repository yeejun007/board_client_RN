import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {Footer} from 'native-base';
import {StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export class MyPostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // 이 스크린으로 들어왔을때 전달받은 state 접근
    // -> this.props.navigation.state.params.data
    // console.log('post_screen.js 렌더링', this.props);
    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <ScrollView style={styles.mainContainer}>
          <View style={styles.profileContainer}>
            <View style={styles.profileImage}>
              <Image
                source={require('../profile-icon.png')}
                resizeMode="contain"
                style={{height: '100%', width: '100%'}}
              />
            </View>
            <View style={styles.profileNickname}>
              <Text>내 닉네임</Text>
            </View>
          </View>
          <View style={styles.likeContainer}>
            <Text>좋아요 누른사람 목록</Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.contentContainer}>
              <Text>내가 작성한 글 내용</Text>
            </View>
            <View style={styles.replyContainer}>
              <Text>댓글박스</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.textInputContainer}>
          <TouchableOpacity style={styles.imageIconBtn}>
            <FontAwesome name="image" size={20} color="purple" />
          </TouchableOpacity>
          <TextInput
            placeholder="섹시한 댓글을 달아주세요"
            autoCapitalize="none"
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitBtnTextColor}>입력</Text>
          </TouchableOpacity>
        </View>
        <Footer style={styles.footer} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#021b02'},
  profileContainer: {
    flexDirection: 'row',
    padding: 10,
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: '#FAF9EB',
  },
  profileImage: {flex: 1},
  profileNickname: {flex: 3},
  likeContainer: {
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginBottom: 5,
    backgroundColor: '#FAF9EB',
  },
  textContainer: {
    padding: 10,
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginBottom: 5,
    backgroundColor: '#FAF9EB',
  },
  contentContainer: {
    flex: 2,
    paddingBottom: 10,
  },
  replyContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderColor: '#022C17',
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  imageIconBtn: {flex: 1, marginLeft: 5},
  textInput: {flex: 10},
  submitBtn: {
    flex: 1,
    marginLeft: 8,
    marginTop: 2,
  },
  submitBtnTextColor: {
    color: 'purple',
  },
  footer: {backgroundColor: '#022C17'},
});

export default MyPostScreen;
