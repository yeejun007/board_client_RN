import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Modal from 'react-native-modal';

class TextInputPlus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <Modal
        onBackdropPress={this.toggleModal}
        hasBackdrop={true}
        transparent={true}
        isVisible={this.state.isModalVisible}>
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
            <TouchableOpacity>
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
    );
  }
}

export default TextInputPlus;
