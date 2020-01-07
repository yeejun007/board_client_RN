import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export class EachFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

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
          <View>
            <Text>{this.props.data.nickname}</Text>
          </View>
          <View>
            <Text>상태메시지</Text>
          </View>
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

export default EachFriend;
