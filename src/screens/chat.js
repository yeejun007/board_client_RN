import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {EachChat} from '../components/each_chat';
import {json} from '../fake_data/fake_data_chat';

class chat extends Component {
  static navigationOptions = {};

  constructor(props) {
    super(props);
    this.state = {
      jsonData: json,
    };
  }

  render() {
    // console.log('chat.js 렌더링', this.props);
    return (
      <ScrollView style={styles.mainContainer} onMomentumScrollEnd={() => {}}>
        <View style={{backgroundColor: '#022C17'}}>
          {this.state.jsonData.data.map(data => {
            return (
              <TouchableOpacity
                key={data.userId}
                onPress={() => {
                  this.props.navigation.navigate('chattingScreen', {
                    data: data,
                  });
                }}>
                <EachChat
                  nickname={data.nickname}
                  userImage={data.userImage}
                  messages={data.messages}
                  newMessage={data.newMessage}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{height: 50, backgroundColor: '#022C17'}} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#021b02'},
});

export default chat;
