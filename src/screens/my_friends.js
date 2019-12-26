import React, {Component} from 'react';
import {View, Text} from 'react-native';

class MyFriends extends Component {
  static navigationOptions = {
    // drawerLabel: '내친구 목록',
    // drawerIcon: ({tintColor}) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> my_friends </Text>
      </View>
    );
  }
}

export default MyFriends;
