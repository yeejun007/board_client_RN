import React, {Component} from 'react';
import {Text, View, TextInput, ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';

class PhotosTab2 extends Component {
  render() {
    return (
      <>
        <View style={styles.searchContainer}>
          <Fontisto name="search" size={20} />
          <TextInput style={styles.searchTextInput} />
          <Button style={styles.searchBtn} transparent>
            <Text>검색</Text>
          </Button>
        </View>
        <ScrollView style={styles.mainContainer}>
          <View style={{backgroundColor: '#022C17'}}>
            <Text>사진</Text>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#021b02',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 5,
    paddingTop: 5,
    paddingBottom: 3,
    borderWidth: 5,
    borderColor: '#022C17',
  },
  searchTextInput: {
    width: '80%',
    paddingLeft: 10,
    borderWidth: 0,
    fontSize: 16,
  },
  searchBtn: {
    justifyContent: 'center',
    height: '100%',
    width: '13%',
    paddingTop: 3,
  },
});

export default PhotosTab2;
