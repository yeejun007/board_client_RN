import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export class EachAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  postAlert = alert => {
    switch (alert) {
      case 'like':
        return (
          <>
            <View>
              <Text>
                {this.state.data.nickname}님이 게시물에 좋아요를 눌렀습니다
              </Text>
            </View>
            <View>
              <Text>{this.state.data.time}</Text>
            </View>
          </>
        );
      case 'dislike':
        return (
          <>
            <View>
              <Text>
                {this.state.data.nickname}님이 게시물에 싫어요를 눌렀습니다
              </Text>
            </View>
            <View>
              <Text>{this.state.data.time}</Text>
            </View>
          </>
        );
      case 'reply':
        return (
          <>
            <View>
              <Text>
                {this.state.data.nickname}님이 게시물에 댓글을 달았습니다
              </Text>
            </View>
            <View>
              <Text>{this.state.data.time}</Text>
            </View>
          </>
        );
      case 'reReply':
        return (
          <>
            <View>
              <Text>
                {this.state.data.nickname}님이 게시물에 대댓글을 달았습니다
              </Text>
            </View>
            <View>
              <Text>{this.state.data.time}</Text>
            </View>
          </>
        );
    }
  };

  profileAlert = alert => {
    switch (alert) {
      case 'like':
        return (
          <>
            <View>
              <Text>{this.state.data.nickname}님이 좋아요를 눌렀습니다</Text>
            </View>
            <View>
              <Text>{this.state.data.time}</Text>
            </View>
          </>
        );

      case 'dislike':
        return (
          <>
            <View>
              <Text>{this.state.data.nickname}님이 싫어요를 눌렀습니다</Text>
            </View>
            <View>
              <Text>{this.state.data.time}</Text>
            </View>
          </>
        );
      case 'addFriend':
        return (
          <>
            <View>
              <Text>{this.state.data.nickname}님이 친구로 등록하였습니다</Text>
            </View>
            <View>
              <Text>{this.state.data.time}</Text>
            </View>
          </>
        );
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../profile-icon.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={styles.textContainer}>
          {this.state.data.category === 'post'
            ? this.postAlert(this.state.data.alert)
            : this.profileAlert(this.state.data.alert)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FAF9EB',
    flexDirection: 'row',
    padding: 5,
    height: 50,
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 6,
  },
});

export default EachAlert;
