import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Notice extends Component {
  static navigationOptions = {
    // drawerLabel: '공지사항',
    // drawerIcon: ({tintColor}) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };

  render() {
    return (
      <View>
        <Text> Notice </Text>
      </View>
    );
  }
}

export default Notice;
