import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

class PhotosTab1 extends Component {
  render() {
    return (
      <>
        <View style={styles.searchContainer}>
          <Fontisto name="search" size={20} style={styles.searchIcon} />
          <TextInput style={styles.searchTextInput} />
          <Button style={styles.searchBtn} transparent>
            <Text>검색</Text>
          </Button>
        </View>
        <ScrollView style={styles.mainContainer}>
          <View style={{flex: 1}}>
            <View style={styles.imagesContainer}>
              <TouchableOpacity>
                <View style={styles.imageContainer}>
                  <Image
                    source={require('../profile-icon.png')}
                    resizeMode="contain"
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  searchIcon: {
    ...Platform.select({
      android: {
        paddingTop: 2,
      },
    }),
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
    ...Platform.select({
      android: {
        paddingTop: -10,
        paddingBottom: -10,
      },
      ios: {},
    }),
    width: '80%',
    paddingLeft: 10,
    borderWidth: 0,
    fontSize: 16,
  },
  searchBtn: {
    ...Platform.select({
      android: {},
      ios: {},
    }),
    justifyContent: 'center',
    height: '100%',
    width: '13%',
    paddingTop: 3,
  },
  mainContainer: {
    backgroundColor: '#021b02',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: '#022C17',
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

export default PhotosTab1;
