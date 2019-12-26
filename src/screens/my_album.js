import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

class MyAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={{flex: 1}}>
          <View style={styles.imagesContainer}>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Feather name="plus" size={30} color="gray" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Feather name="plus" size={30} color="gray" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Feather name="plus" size={30} color="gray" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Feather name="plus" size={30} color="gray" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Feather name="plus" size={30} color="gray" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Feather name="plus" size={30} color="gray" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#021b02',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F2B4',
    margin: 5,
    height: 120,
    width: 120,
  },
});

export default MyAlbum;
