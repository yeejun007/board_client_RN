import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import EachFriend from '../components/each_friend';
import {json} from '../fake_data/fake_data_myFriends';

export class MyFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: json.data,
    };
  }

  // this.state.data의 userId에 따라 userPage로 이동한 다음 해당 사용자의 정볼 데이터를 뿌려줌

  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <View>
          {this.state.data.map((objData, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => {}}>
                <EachFriend data={objData} />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{height: 50, backgroundColor: '#021b02'}} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#021b02'},
});

export default MyFriends;
