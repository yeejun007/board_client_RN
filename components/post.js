import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles[this.props.position]}>
        <Text> {this.props.userId} </Text>
        <Text> {this.props.content.title} </Text>
        <Text> {this.props.content.content} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerPost: {
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 5,
  },
  bodyPost: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 5,
  },
});

export default Post;
