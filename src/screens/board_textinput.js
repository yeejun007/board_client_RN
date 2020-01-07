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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CameraRoll from '@react-native-community/cameraroll';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Modal from 'react-native-modal';
import CameraPhotos from '../components/camera_photos';

class BoardTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlusModalVisible: false,
      isPhotosModalVisible: false,
      modal: 'plusMain',
      myId: 'yeejun',
      photos: null,
      sendPhotoNum: 0,
      selectedPhotoObjs: [],
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

  // sendPost함수로 수정
  sendPost = bodyData => {
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

  // selectPost함수 추가
  selectPhoto = photoObjs => {
    this.setState({selectedPhotoObjs: photoObjs});
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
              selectPhoto={this.selectPhoto}
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
    // console.log('BoardTextInput.js 렌더링', this.state);

    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        enabled={Platform.OS === 'android' ? false : true}>
        <ScrollView
          style={styles.mainContainer}
          ref={ref => (this.scrollView = ref)}
          onContentSizeChange={(contentWidth, contentHeight) => {
            this.scrollView.scrollToEnd({animated: false});
          }}>
          <TextInput
            autoFocus={true}
            placeholder="게시글을 입력하세요"
            keyboardType={Platform.OS === 'android' ? 'default' : 'url'}
            autoCapitalize="none"
            maxLength={2000}
          />
          {/* <View> */}
          {this.state.selectedPhotoObjs.length !== 0 ? (
            this.state.selectedPhotoObjs.map((node, i) => {
              return (
                <View key={i} style={{padding: 10}}>
                  <Image
                    resizeMode="contain"
                    // 스타일은 이미지 node내부의 width, height 비율을 줄여서 나타내기
                    style={{
                      width: node.image.width / 11,
                      height: node.image.height / 11,
                    }}
                    source={{uri: node.image.uri}}
                  />
                </View>
              );
            })
          ) : (
            <View />
          )}
          {/* </View> */}
          <View style={{height: 50}} />

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
          <TouchableOpacity onPress={this.plusToggleModal}>
            <View style={styles.imageIconBtn}>
              <Feather name="plus" size={20} color="purple" />
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
