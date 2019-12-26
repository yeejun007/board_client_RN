import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class MyPage extends Component {
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
    // 클릭해서 이 스크린으로 들어왔을때 내 프로필인지 타인의 프로필인지 구분
    // 내 프로필인 경우만 편집 이모티콘 렌더링
    // console.log('MyPage 렌더링', this.props);
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={{flex: 1}}>
          <View style={styles.myMainInfo}>
            <TouchableOpacity style={styles.myMainImageContainer}>
              <View>
                <Image
                  source={require('../profile-icon.png')}
                  resizeMode="contain"
                  style={{width: '100%', height: '100%'}}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.myMainProfileContainer}>
              <View>
                <Text>내 nickname(아이디)</Text>
              </View>
              <View>
                <Text>성별,나이</Text>
              </View>
              <View>
                <Text>사용자 위치</Text>
              </View>
              <View>
                <Text>인삿말(클릭해서 길게보기 가능)</Text>
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
                  <View>
                    <Text>좋아요 </Text>
                  </View>
                  <MaterialCommunityIcons
                    name={this.state.thumbUp}
                    color={this.state.thumbUpIconColor}
                    size={16}
                  />
                  <Text style={{color: this.state.thumbUpIconColor}}>
                    {' ' + this.state.thumbUpIconNum}
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
                  <View>
                    <Text> 싫어요 </Text>
                  </View>
                  <MaterialCommunityIcons
                    name={this.state.thumbDown}
                    color={this.state.thumbDownIconColor}
                    size={16}
                  />
                  <Text style={{color: this.state.thumbDownIconColor}}>
                    {' ' + this.state.thumbDownIconNum}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.mySubInfoContainer}>
            <View style={styles.mySubInfoView}>
              <View style={styles.visitContainer}>
                <View>
                  <Text>방문자 수</Text>
                </View>
                <View>
                  <Text> 8</Text>
                </View>
              </View>
              <View style={styles.signupDateContainer}>
                <View>
                  <Text>가입 날짜</Text>
                </View>
                <View>
                  <Text> 2019-12-03</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.followingContainer}>
                <View>
                  <Text>친구들</Text>
                </View>
                <View>
                  <Text> 10</Text>
                </View>
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.followerContainer}>
                <View>
                  <Text>팔로워</Text>
                </View>
                <View>
                  <Text> 2</Text>
                </View>
              </TouchableOpacity> */}
            </View>
          </View>
          <View style={styles.myImagesContainer}>
            <View style={styles.myImages}>
              <TouchableOpacity style={{flex: 1}}>
                <View style={styles.plusContainer}>
                  <Feather name="plus" size={30} color="gray" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1}}>
                <View style={styles.plusContainer}>
                  <Feather name="plus" size={30} color="gray" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1}}>
                <View style={styles.plusContainer}>
                  <Feather name="plus" size={30} color="gray" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1}}>
                <View style={styles.plusContainer}>
                  <Feather name="plus" size={30} color="gray" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.myPostHeader}>
            <View>
              <Text style={{color: 'white'}}> 게시글 (1) </Text>
            </View>
            <TouchableOpacity>
              <View>
                <Text style={{color: 'white'}}> editButton</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.myPostContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('myPostScreen');
              }}>
              <Text>작성한 게시글들(Posts) 나열</Text>
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
  myMainInfo: {
    flexDirection: 'row',
    backgroundColor: '#FAF9EB',
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    height: 150,
  },
  myMainImageContainer: {
    flex: 1,
    // width: '100%',
    // height: '80%',
  },
  myMainProfileContainer: {
    flex: 2,
  },
  iconContainer: {
    flexDirection: 'row',
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
  mySubInfoContainer: {
    alignItems: 'center',
    backgroundColor: '#FAF9EB',
    marginBottom: 10,
    padding: 5,
  },
  mySubInfoView: {flexDirection: 'row'},
  visitContainer: {
    flexDirection: 'row',
    paddingRight: 5,
    paddingLeft: 5,
  },
  signupDateContainer: {
    flexDirection: 'row',
    paddingRight: 5,
    paddingLeft: 10,
  },
  followingContainer: {
    flexDirection: 'row',
    paddingRight: 5,
    paddingLeft: 5,
  },
  followerContainer: {
    flexDirection: 'row',
    paddingRight: 5,
    paddingLeft: 5,
  },
  myImagesContainer: {
    backgroundColor: '#FAF9EB',
    marginTop: 5,
    marginBottom: 10,
  },
  myImages: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  plusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F2B4',
    margin: 5,
    height: 75,
  },
  myPostHeader: {
    flexDirection: 'row',
  },
  myPostContainer: {
    backgroundColor: '#FAF9EB',
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
  },
  myPost: {},
});

export default MyPage;
