import React, {Component} from 'react';
import {View, Text, ScrollView, Image, CameraRoll} from 'react-native';

class CameraPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        {this.props.photos.map((p, i) => {
          return (
            <Image
              key={i}
              style={{
                width: 300,
                height: 100,
              }}
              source={{uri: p.node.image.uri}}
            />
          );
        })}
      </ScrollView>
    );
  }
}

export default CameraPhotos;
