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
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {Footer, Button} from 'native-base';
import {StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Modal from 'react-native-modal';
import CameraPhotos from '../components/camera_photos';

class ChattingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlusModalVisible: false,
      isPhotosModalVisible: false,
      id: 'yeejun',
      messages: this.props.navigation.state.params.data.messages,
      photos: null,
    };
  }

  plusToggleModal = () => {
    this.setState({isPlusModalVisible: !this.state.isPlusModalVisible});
  };

  photosToggleModal = () => {
    this.setState({isPhotosModalVisible: !this.state.isPhotosModalVisible});
  };

  readPhotos = () => {
    console.log('카메라롤 콘솔', CameraRoll);
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
      .then(read => {
        this.setState({photos: read.edges});
      })
      .catch(err => {
        Alert.alert('사진 로드 에러', err);
      });
  };

  render() {
    // console.log('chatting_screen.js 렌더링', this.props);

    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        enabled
        keyboardVerticalOffset={0}>
        <ScrollView
          style={styles.mainContainer}
          ref={ref => (this.scrollView = ref)}
          onContentSizeChange={(contentWidth, contentHeight) => {
            this.scrollView.scrollToEnd({animated: true});
          }}>
          {this.state.messages.map(msg => {
            return msg.from !== this.state.id ? (
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
          <Modal
            onBackdropPress={this.plusToggleModal}
            hasBackdrop={true}
            transparent={true}
            isVisible={this.state.isPlusModalVisible}>
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
                <TouchableOpacity onPress={this.readPhotos}>
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
          </Modal>
          <Modal
            onBackdropPress={this.photosToggleModal}
            hasBackdrop={true}
            transparent={true}
            isVisible={this.state.isPhotosModalVisible}>
            >
            <View>
              <CameraPhotos photos={this.state.photos} />
            </View>
          </Modal>
        </ScrollView>
        <View style={styles.textInputContainer}>
          <TouchableOpacity
            style={styles.imageIconBtn}
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
});

export default ChattingScreen;
