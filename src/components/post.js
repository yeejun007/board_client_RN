import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbUp: 'thumb-up-outline',
      thumbDown: 'thumb-down-outline',
      thumbUpIconColor: 'gray',
      thumbUpIconNum: 0,
      thumbDownIconColor: 'gray',
      thumbDownIconNum: 0,
    };
  }

  render() {
    // console.log('post.js 렌더링', this.props);
    return (
      <View style={styles[this.props.cash.position]}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigateFunc();
            }}>
            <Image
              source={require('../profile-icon.png')}
              resizeMode="contain"
              style={{height: '100%', width: '100%'}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text> {this.props.nickname} </Text>
          <Text numberOfLines={2}> {this.props.content.content} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {flex: 2},
  textContainer: {
    flex: 7,
    marginLeft: 10,
    marginRight: 10,
  },
  headerPost: {
    flexDirection: 'row',
    padding: 10,
    height: 90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    backgroundColor: '#FAF9EB',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 10,
  },
  bodyPost: {
    flexDirection: 'row',
    padding: 10,
    height: 90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    backgroundColor: '#FAF9EB',
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 10,
  },
});

export default Post;
