import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {Button} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Post from '../components/post';
import {styles} from './css/board_tab2_css';
import {json} from '../fake_data/fake_data_posts';

class Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: json,
    };
  }

  render() {
    // console.log('board_ta2 렌더링', this.props);
    return (
      <View>
        <View style={styles.searchContainer}>
          <Fontisto name="search" size={20} style={styles.searchIcon} />
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
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={{height: 110, backgroundColor: '#022C17'}} />
        </ScrollView>
      </View>
    );
  }
}

export default Tab2;
