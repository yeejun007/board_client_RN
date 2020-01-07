import React, {Component} from 'react';
import {View, Text, ScrollView, Platform, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import EachPhoto from '../components/each_photo';

class CameraPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.photos,
      clickedNum: 0,
      // clickedPhotoObjs -> 유저가 클릭한 edges[index].node 객체를 push한다
      clickedPhotoObjs: [],
    };
  }

  selectPhoto = node => {
    let nodeArr = this.state.clickedPhotoObjs;
    nodeArr.push(node);
    this.setState({clickedPhotoObjs: nodeArr});
  };

  deselectPhoto = node => {
    let nodeArr = this.state.clickedPhotoObjs;
    for (let i = 0; i < nodeArr.length; i++) {
      if (node.image.filename === nodeArr[i].image.filename) {
        nodeArr.splice(i, 1);
      }
    }
    this.setState({clickedPhotoObjs: nodeArr});
  };

  // clickedPhotoObjs를 map으로 돌리면서 createFormData 실행
  // formData는 같은 key를 가진 값을 여러개 추가할 수 있다고 함
  createFormData = (node, formData) => {
    formData.append('photo', {
      name: node.image.filename,
      // type을 명시하지 않으면 안드로이드에서 POST안됨
      // Content-Type” : "multipart/form-data <--안드로이드에 적용시켜야함
      type: node.type,
      uri: node.image.uri,
      // Platform.OS === 'android'
      //   ? node.image.uri
      //   : node.image.uri.replace('file://', ''),
    });
  };

  sendBtnFunc = () => {
    const formData = new FormData();
    // console.log('sendBtn 실행 후의 formData ', formData);
    formData.append('userId', this.props.myId);
    // if (!formData._parts.length) {
    //   formData.delete('photo');
    //   // formData.forEach(key => {
    //   //   console.log(key);})
    // }
    for (let i = 0; i < this.state.clickedPhotoObjs.length; i++) {
      this.createFormData(this.state.clickedPhotoObjs[i], formData);
    }
    // console.log('sendPhoto 실행 전의 formData ', formData);

    if (this.props.chattingScreen) {
      this.props.sendPhoto(formData).then(res => {
        if (res === true) {
          this.setState({clickedPhotoObjs: []});
        }
      });
    } else {
      // chattingScreen이 아니라면 selectPhoto함수를 실행해서 사진들을 화면에 렌더링한다
      this.props.selectPhoto(this.state.clickedPhotoObjs);
      this.props.plusToggleModal();
      this.props.modalRefresh();
    }
  };

  increaseClickedNum = () => {
    this.setState({clickedNum: this.state.clickedNum + 1});
  };

  decreaseClickedNum = () => {
    this.setState({clickedNum: this.state.clickedNum - 1});
  };

  render() {
    // console.log('camera_photos.js 렌더링', this.state.photos);
    // console.log('camera_photos.js 렌더링 state --> ', this.state);

    return (
      <>
        <View
          style={{
            paddingBottom: 10,
            paddingTop: 4,
            paddingRight: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button
              transparent
              style={{marginTop: -7}}
              onPress={() => {
                this.props.plusToggleModal();
                this.props.modalRefresh('plusMain');
              }}>
              <Feather name="x-circle" size={30} color="black" />
            </Button>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 20, paddingRight: 15}}>
                ({this.state.clickedNum}/3)
              </Text>
              <TouchableOpacity
                onPress={() => {
                  // send에 성공하면 clickedPhotoObjs초기화시키고,
                  // formData는 send를 누르는순간 항상 새로 정의된다
                  this.sendBtnFunc();
                }}>
                <Text style={{color: 'blue', fontSize: 20}}>
                  {this.props.chattingScreen === true ? 'send' : 'select'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {this.state.photos.map((photo, i) => {
              return (
                <EachPhoto
                  key={i}
                  photo={photo}
                  i={i}
                  increaseClickedNum={this.increaseClickedNum}
                  decreaseClickedNum={this.decreaseClickedNum}
                  clickedNum={this.state.clickedNum}
                  selectPhoto={this.selectPhoto}
                  deselectPhoto={this.deselectPhoto}
                />
              );
            })}
          </View>
        </ScrollView>
      </>
    );
  }
}

export default CameraPhotos;
