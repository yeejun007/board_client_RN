import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import {Button} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Post from '../components/post';
import {styles} from './css/board_tab1_css';
import {json} from '../fake_data/fake_data_posts';

class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: json,
    };
  }

  render() {
    // console.log('board_tab1 렌더링', this.props);
    return (
      <View>
        <View style={styles.searchContainer}>
          <Fontisto name="search" size={20} />
          <TextInput style={styles.searchTextInput} />
          <Button
            style={styles.searchBtn}
            transparent
            onPress={() => {
              this.scrollView.scrollTo({animated: true});
              Keyboard.dismiss();
            }}>
            <Text>검색</Text>
          </Button>
        </View>
        <ScrollView
          style={styles.background}
          ref={ref => (this.scrollView = ref)}>
          <View style={{backgroundColor: '#022C17'}}>
            {this.state.jsonData.data.map(data => {
              return (
                <TouchableOpacity
                  key={data.userId}
                  onPress={() => {
                    this.props.navigation.navigate('postScreen', {data: data});
                  }}>
                  <Post
                    key={data.userId}
                    nickname={data.nickname}
                    content={data.content}
                    cash={data.cash}
                    navigateFunc={() => {
                      this.props.navigation.navigate('userPage', {
                        data: data,
                      });
                    }}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={{height: 110, backgroundColor: '#022C17'}} />
        </ScrollView>
        <TouchableOpacity
          style={styles.pencilIconContainer}
          onPress={() => {
            this.props.navigation.navigate('boardTextInput');
          }}>
          <SimpleLineIcons name="pencil" size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Tab1;
