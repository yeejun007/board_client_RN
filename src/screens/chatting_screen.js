import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
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
import Modal from 'react-native-modal';
import CameraPhotos from '../components/camera_photos';
import {requestCameraPermission} from '../components/permission_android_photo';

class ChattingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlusModalVisible: false,
      isPhotosModalVisible: false,
      modal: 'plusMain',
      myId: 'yeejun',
      messages: this.props.navigation.state.params.data.messages,
      photos: null,
      sendPhotoNum: 0,
    };
  }

  // 아래 함수들은 다른 스크린에서 4번 중복됨. 나중에 모듈화
  // 중복스크린 -> chatting_screen, user_post_screen, my_post_screen, boardTextInput
  // boardTextInput만 살짝 다름

  modalRefresh = modal => {
    this.setState({modal: modal});
  };

  readPhotos = () => {
    if (Platform.OS === 'android') {
      // 카메라 사용 거절당하거나, 에러가 나는 경우 어떤 UI를 보일지 로직 짜야함
      requestCameraPermission()
        .then(res => {
          console.log(res);
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
    } else {
      CameraRoll.getPhotos({
        first: 40,
        assetType: 'Photos',
      })
        .then(res => {
          console.log(res);
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
    }
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
              chattingScreen={true}
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
    // console.log('chatting_screen.js 렌더링', this.props);

    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        enabled={Platform.OS === 'android' ? false : true}
        keyboardVerticalOffset={0}>
        {/* 스크롤뷰는 채팅화면 */}
        <ScrollView
          style={styles.mainContainer}
          ref={ref => (this.scrollView = ref)}
          onContentSizeChange={(contentWidth, contentHeight) => {
            this.scrollView.scrollToEnd({animated: false});
          }}>
          {this.state.messages.map(msg => {
            return msg.from !== this.state.myId ? (
              <View
                key={msg.time}
                style={[styles.messageContainer, styles.messageLeft]}>
                <TouchableOpacity style={styles.imageContainer}>
                  <Image
                    source={require('../profile-icon.png')}
                    resizeMdoe="contain"
                    style={{height: 35, width: 35}}
                  />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                  <Text>
                    {this.props.navigation.state.params.data.nickname}
                  </Text>
                  <Text>{msg.message}</Text>
                  <Text>{msg.time}</Text>
                </View>
              </View>
            ) : (
              <View
                key={msg.time}
                style={[styles.messageContainer, styles.messageRight]}>
                <View>
                  <Text>{msg.message}</Text>
                  <Text>{msg.time}</Text>
                </View>
              </View>
            );
          })}
          <View style={{height: 10}} />

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

        {/* 텍스트 입력칸 */}
        <View style={styles.textInputContainer}>
          <TouchableOpacity
            style={styles.plusIconBtn}
            onPress={this.plusToggleModal}>
            <Feather name="plus" size={20} color="purple" />
          </TouchableOpacity>
          <TextInput
            placeholder="내용을 입력하세요"
            autoCapitalize="none"
            style={styles.textInput}
          />
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => {
              this.scrollView.scrollToEnd({animated: true});
            }}>
            <Text style={styles.submitBtnTextColor}>입력</Text>
          </TouchableOpacity>
        </View>
        {/* </KeyboardAvoidingView> */}
        <Footer style={styles.footer} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    backgroundColor: '#FAF9EB',
    padding: 10,
  },
  messageContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 40,
  },
  messageLeft: {justifyContent: 'flex-start'},
  messageRight: {justifyContent: 'flex-end'},
  imageContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 8,
  },
  footer: {
    backgroundColor: '#022C17',
  },
  textInputContainer: {
    // flex: 1,
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
});

export default ChattingScreen;
