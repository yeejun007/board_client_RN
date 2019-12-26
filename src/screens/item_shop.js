import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class ItemShop extends Component {
  static navigationOptions = {
    // drawerLabel: '아이템샵',
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
        <Text> ItemShop </Text>
      </View>
    );
  }
}

export default ItemShop;
