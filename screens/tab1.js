import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Post from '../components/post';
import {json} from './fake_data';

export class Tab1 extends Component {
  render() {
    return (
      <View>
        {json.data.map(data => {
          return (
            <Post
              key={data.userId}
              position={data.position}
              userId={data.userId}
              content={data.content}
            />
          );
        })}
      </View>
    );
  }
}

export default Tab1;
