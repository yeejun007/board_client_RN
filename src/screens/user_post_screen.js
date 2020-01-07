import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Alert,
  Platform,
} from 'react-native';
import {Footer} from 'native-base';
import {StyleSheet} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import CameraPhotos from '../components/camera_photos';
import Modal from 'react-native-modal';

export class UserPostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlusModalVisible: false,
      isPhotosModalVisible: false,
      modal: 'plusMain',
      myId: 'yeejun',
      photos: null,
      sendPhotoNum: 0,
    };
  }

  modalRefresh = modal => {
    this.setState({modal: modal});
  };

  readPhotos = () => {
    CameraRoll.getPhotos({
      first: 40,
      assetType: 'Photos',
    })
      .then(res => {
        // console.log(res);
        this.setState({photos: res.edges});
      })
      .then(() => {
        this.modalRefresh('cameraPhotos');
      })
      .catch(err => {
        Alert.alert(
          'Error',
          '갤러리 불러오기중 문제가 발생하였습니다.',
          [{text: '확인', onPress: () => {}}],
          {cancelable: false},
        );
        console.log('갤러리 로딩 에러', err);
      });
  };

  plusToggleModal = () => {
    this.setState({isPlusModalVisible: !this.state.isPlusModalVisible});
  };

  sendPhoto = bodyData => {
    return fetch('', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data;',
        Authorization: '',
      },
      body: bodyData,
    })
      .then(res => res.json())
      .then(res => {
        Alert.alert(
          'Success',
          '이미지 전송 완료',
          [
            {
              text: '확인',
              onPress: () => {
                this.plusToggleModal();
              },
            },
          ],
          {cancelable: false},
        );
        console.log('이미지 전송 완료', res);

        return true;

        // 여기서 서버로부터 다시 돌려받은 전송 이미지를 캐시에 저장하고 화면에 띄우기
        // 다시 채팅스크린을 렌더시켜야함
      })
      .catch(err => {
        Alert.alert(
          'Error',
          '이미지 전송중 문제가 발생하였습니다.',
          [{text: '확인', onPress: () => {}}],
          {cancelable: false},
        );
        console.log('image post error', err);

        return false;
      });
  };

  selectModal = () => {
    switch (this.state.modal) {
      case 'plusMain':
        return (
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 5,
                paddingTop: 10,
                width: 200,
                borderRadius: 20,
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.readPhotos();
                }}>
                <View style={{marginRight: 5, marginTop: 4.5}}>
                  <FontAwesome5 name="image" size={50} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginLeft: 5}}>
                  <Foundation name="play-video" size={60} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 'cameraPhotos':
        return (
          <View style={{backgroundColor: 'white', padding: 4, height: '70%'}}>
            <CameraPhotos
              myId={this.state.myId}
              photos={this.state.photos}
              sendPhoto={this.sendPhoto}
              plusToggleModal={this.plusToggleModal}
              modalRefresh={() => {
                this.modalRefresh('plusMain');
              }}
            />
          </View>
        );
    }
  };

  render() {
    // post를 클릭하면 내가 작성한 글인지 타인이 작성한 글인지 구분
    // 내가 작성한 글인 경우만 편집 이모티콘 렌더링
    // 이 스크린으로 들어왔을때 전달받은 state 접근
    // -> this.props.navigation.state.params.data
    // console.log('post_screen.js 렌더링', this.props);
    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        enabled={Platform.OS === 'android' ? false : true}>
        <ScrollView style={styles.mainContainer}>
          <View style={styles.profileContainer}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require('../profile-icon.png')}
                resizeMode="contain"
                style={{height: '100%', width: '100%'}}
              />
            </TouchableOpacity>
            <View style={styles.profileNickname}>
              <Text>유저 닉네임 </Text>
            </View>
          </View>
          <View style={styles.likeContainer}>
            <Text>
              좋아요 누른사람 목록 (클릭하면 조그만 사진들 아래에 펼쳐지게)
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.contentContainer}>
              <Text>유저가 작성한 글 내용</Text>
            </View>
            <View style={styles.replyContainer}>
              <Text>댓글박스</Text>
            </View>
          </View>

          {/* 플러스 버튼 클릭하면 나오는 Modal창 */}
          <Modal
            onBackdropPress={() => {
              // Modal이 다 사라지기도 전에 modalRefresh가 실행되어서 잔상이 남는다
              // 이거 해결하려면 plusToggleModal실행이 완료된 다음에 modalRefresh가 실행
              // 되도록 async await을 사용하거나 promise문법을 사용해서 then으로 받아서 실행
              this.plusToggleModal();
              this.modalRefresh('plusMain');
            }}
            hasBackdrop={true}
            transparent={true}
            isVisible={this.state.isPlusModalVisible}>
            {this.selectModal()}
          </Modal>
        </ScrollView>
        <View style={styles.textInputContainer}>
          <TouchableOpacity
            style={styles.plusIconBtn}
            onPress={this.plusToggleModal}>
            <Feather name="plus" size={20} color="purple" />
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
  plusIconBtn: {
    ...Platform.select({
      android: {
        paddingTop: 2,
      },
    }),
    flex: 1,
    marginLeft: 5,
  },
  textInput: {
    ...Platform.select({
      android: {
        paddingTop: -10,
        paddingBottom: -10,
      },
      ios: {},
    }),
    flex: 10,
  },
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

export default UserPostScreen;
