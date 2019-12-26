import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class Settings extends Component {
  static navigationOptions = {
    // drawerLabel: '환경설정',
    // drawerIcon: ({tintColor}) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };

  render() {
    // console.log(this.props);
    return (
      <View>
        <Text>환경설정</Text>
      </View>
      // <Button
      //   onPress={() => this.props.navigation.navigate('')}
      //   title="Go to someWhere"
      // />
    );
  }
}

export default Settings;
