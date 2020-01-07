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

class UserPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // 클릭해서 이 스크린으로 들어왔을때 내 프로필인지 타인의 프로필인지 구분
    // 내 프로필인 경우만 편집 이모티콘 렌더링
    // console.log('MyPage 렌더링', this.props);
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={{flex: 1}}>
          <View style={styles.userMainInfo}>
            <TouchableOpacity style={styles.userMainImageContainer}>
              <View>
                <Image
                  source={require('../profile-icon.png')}
                  resizeMode="contain"
                  style={{width: '100%', height: '100%'}}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.userMainProfileContainer}>
              <View>
                <Text>User nickname(아이디)</Text>
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
              <View>
                <Text>좋아요, 싫어요 갯수</Text>
              </View>
            </View>
          </View>
          <View style={styles.userSubInfoContainer}>
            <View style={styles.userSubInfoView}>
              <View style={styles.visitContainer}>
                <View>
                  <Text>방문자 수</Text>
                </View>
                <View>
                  <Text> 11k</Text>
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
                  <Text>팔로잉</Text>
                </View>
                <View>
                  <Text> 10</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.followerContainer}>
                <View>
                  <Text>팔로워</Text>
                </View>
                <View>
                  <Text> 2</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.userImagesContainer}>
            <View style={styles.userImages}>
              <TouchableOpacity style={{flex: 1}}>
                <View style={styles.userImageContainer}>
                  <Image
                    source={require('../profile-icon.png')}
                    resizeMode="contain"
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1}}>
                <View style={styles.userImageContainer}>
                  <Image
                    source={require('../profile-icon.png')}
                    resizeMode="contain"
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1}}>
                <View style={styles.userImageContainer}>
                  <Image
                    source={require('../profile-icon.png')}
                    resizeMode="contain"
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1}}>
                <View style={styles.userImageContainer}>
                  <Image
                    source={require('../profile-icon.png')}
                    resizeMode="contain"
                    style={{width: '100%', height: '100%'}}
                  />
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
                this.props.navigation.navigate('userPostScreen');
              }}>
              <Text>작성한 게시글(Post)</Text>
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
  userMainInfo: {
    flexDirection: 'row',
    backgroundColor: '#FAF9EB',
    marginTop: 10,
    marginBottom: 5,
    height: 150,
  },
  userMainImageContainer: {
    flex: 1,
    // width: '100%',
    // height: '80%',
  },
  userMainProfileContainer: {
    flex: 2,
  },
  userSubInfoContainer: {
    alignItems: 'center',
    backgroundColor: '#FAF9EB',
    marginBottom: 10,
    padding: 5,
  },
  userSubInfoView: {flexDirection: 'row'},
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
  userImagesContainer: {
    backgroundColor: '#FAF9EB',
    marginTop: 5,
    marginBottom: 10,
  },
  userImages: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  userImageContainer: {
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

export default UserPage;
