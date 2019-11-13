import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class ChannelOne extends Component {
  static navigationOptions = {
    drawerLabel: 'ChannelOne',
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
        <Text>게시판 나열</Text>
      </View>
      // <Button
      //   onPress={() => this.props.navigation.navigate('')}
      //   title="Go to someWhere"
      // />
    );
  }
}

export default ChannelOne;
