import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export class EachChat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.eachContainer}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            source={require('../profile-icon.png')}
            resizeMode="contain"
            style={{height: '100%', width: '100%'}}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text>{this.props.nickname}</Text>
          <Text>{this.props.newMessage[0].message}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  eachContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    flexDirection: 'row',
    height: 90,
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    padding: 10,
    backgroundColor: '#FAF9EB',
  },
  imageContainer: {flex: 1},
  textContainer: {flex: 5},
});

export default EachChat;
