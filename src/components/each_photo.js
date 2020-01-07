import React, {Component} from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {Button} from 'native-base';
import Modal from 'react-native-modal';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class EachPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      isPhotoModalVisible: false,
    };
  }

  photoToggleModal = () => {
    this.setState({isPhotoModalVisible: !this.state.isPhotoModalVisible});
  };

  render() {
    return (
      <View style={{padding: 3}}>
        <TouchableOpacity activeOpacity={0.4} onPress={this.photoToggleModal}>
          <Image
            style={{
              width: 85,
              height: 85,
            }}
            source={{uri: this.props.photo.node.image.uri}}
          />
        </TouchableOpacity>
        {this.state.clicked === false ? (
          this.props.clickedNum < 3 ? (
            <TouchableOpacity
              onPress={() => {
                this.props.increaseClickedNum();
                this.props.selectPhoto(this.props.photo.node);
                this.setState({
                  clicked: !this.state.clicked,
                });
              }}
              style={[
                {
                  borderColor: 'white',
                  borderWidth: 4,
                  backgroundColor: 'transparent',
                  width: 30,
                  height: 30,
                  opacity: 0.9,
                  position: 'absolute',
                  top: 3,
                  left: 58,
                },
              ]}>
              <View />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {}}
              style={[
                {
                  borderColor: 'white',
                  borderWidth: 4,
                  backgroundColor: 'transparent',
                  width: 30,
                  height: 30,
                  opacity: 0.9,
                  position: 'absolute',
                  top: 3,
                  left: 58,
                },
              ]}>
              <View />
            </TouchableOpacity>
          )
        ) : (
          <TouchableOpacity
            onPress={() => {
              this.props.decreaseClickedNum();
              this.props.deselectPhoto(this.props.photo.node);
              this.setState({clicked: !this.state.clicked});
            }}
            style={[
              {
                borderColor: 'white',
                borderWidth: 4,
                width: 30,
                height: 30,
                opacity: 0.9,
                position: 'absolute',
                top: 3,
                left: 58,
              },
            ]}>
            <View style={{backgroundColor: 'white'}}>
              <MaterialCommunityIcons
                name="check-bold"
                size={23}
                color="blue"
              />
            </View>
          </TouchableOpacity>
        )}
        <Modal
          onBackdropPress={this.photoToggleModal}
          hasBackdrop={true}
          transparent={true}
          isVisible={this.state.isPhotoModalVisible}>
          <View style={{backgroundColor: 'white', padding: 5, height: '70%'}}>
            {/* 사진이 너비, 높이가 원본의 비율을 유지한채로 보이도록 수정하기 */}
            <Image
              // //   key={this.props.i}
              // resizeMode="contain"
              style={{width: '100%', height: '100%'}}
              source={{uri: this.props.photo.node.image.uri}}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

export default EachPhoto;
