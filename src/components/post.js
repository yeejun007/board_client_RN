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

  changeIconAttr = (iconColor, iconNum, thumb) => {
    const plusNum = this.state[iconNum] + 1;
    const minusNum = this.state[iconNum] - 1;
    const up = 'thumb-up';
    const upOutline = 'thumb-up-outline';
    const down = 'thumb-down';
    const downOutline = 'thumb-down-outline';
    const upSelected = this.state[iconColor] === 'gray' ? up : upOutline;
    const downSelected = this.state[iconColor] === 'gray' ? down : downOutline;
    const upOrDown = thumb === 'thumbUp' ? upSelected : downSelected;

    this.state[iconColor] === 'gray'
      ? this.setState({
          [iconColor]: 'red',
          [iconNum]: plusNum,
          [thumb]: upOrDown,
        })
      : this.setState({
          [iconColor]: 'gray',
          [iconNum]: minusNum,
          [thumb]: upOrDown,
        });
  };

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
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              this.changeIconAttr(
                'thumbUpIconColor',
                'thumbUpIconNum',
                'thumbUp',
              );
            }}
            style={styles.thumbUpIconBtn}>
            <MaterialCommunityIcons
              name={this.state.thumbUp}
              color={this.state.thumbUpIconColor}
              size={16}
            />
            <Text style={{color: this.state.thumbUpIconColor}}>
              {this.state.thumbUpIconNum}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.changeIconAttr(
                'thumbDownIconColor',
                'thumbDownIconNum',
                'thumbDown',
              );
            }}
            style={styles.thumbDownIconBtn}>
            <MaterialCommunityIcons
              name={this.state.thumbDown}
              color={this.state.thumbDownIconColor}
              size={16}
            />
            <Text style={{color: this.state.thumbDownIconColor}}>
              {this.state.thumbDownIconNum}
            </Text>
          </TouchableOpacity>
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
  iconContainer: {
    flex: 1,
    paddingLeft: 5,
    borderLeftWidth: 1,
    borderLeftColor: '#022C17',
  },
  thumbUpIconBtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 2,
  },
  thumbDownIconBtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 2,
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
