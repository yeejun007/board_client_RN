import React from 'react';
import {
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {myPageBottomTabNavigator} from './bottom_tab_navigator';
import {initialNavigator} from './initial_navigator';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MyFriends from '../screens/my_friends';
import BookMark from '../screens/bookmark';
import Settings from '../screens/settings';
import ItemShop from '../screens/item_shop';
import Notice from '../screens/notice';
import {drawerBackgroundColor} from './css/navigator_css';

// drawer 상단부에 들어갈 프로필 컴포넌트를 포함하는 커스텀 drawer 컴포넌트
const customDrawerComponent = props => {
  // console.log('customDrawerComponent 실행', this.props);
  return (
    // SafeAreaView는 android에서 작동 안할 수 있음
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={{paddingTop: 25}}>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderColor: 'white',
              }}>
              <View>
                <Image
                  source={require('../profile-icon.png')}
                  style={{height: 120, width: 120}}
                />
              </View>
              <View style={{paddingTop: 20}}>
                <Text style={{color: 'white'}}>닉네임</Text>
                <Text style={{color: 'white'}}>성별 나이</Text>
                <Text style={{color: 'white'}}>현재 내 위치 정보</Text>
              </View>
            </View>
            <View>
              <DrawerItems {...props} />
              <TouchableOpacity
                onPress={() => {
                  console.log(props);
                }}>
                <View />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={{padding: 10, borderTopWidth: 1, borderColor: 'white'}}>
        <Text style={{color: 'white'}}>이 아래는 광고배너</Text>
      </View>
    </>
  );
};

// 마지막으로 drawerNavigator 안에 감싼다
export const drawerNavigator = createDrawerNavigator(
  {
    myPage: {
      screen: myPageBottomTabNavigator,
      navigationOptions: () => {
        return {
          title: '내 프로필',
          drawerIcon: <AntDesign name="contacts" size={25} color="white" />,
        };
      },
    },
    myFriends: {
      screen: MyFriends,
      navigationOptions: () => {
        return {
          title: '내 친구들',
          drawerIcon: <AntDesign name="team" size={25} color="white" />,
        };
      },
    },
    bookMark: {
      screen: BookMark,
      navigationOptions: () => {
        return {
          title: '북마크',
          drawerIcon: <Feather name="bookmark" size={25} color="white" />,
        };
      },
    },
    itemShop: {
      screen: ItemShop,
      navigationOptions: () => {
        return {
          title: '아이템 샵',
          drawerIcon: <AntDesign name="gift" size={25} color="white" />,
        };
      },
    },
    settings: {
      screen: Settings,
      navigationOptions: () => {
        return {
          title: '환경설정',
          drawerIcon: <AntDesign name="setting" size={25} color="white" />,
        };
      },
    },
    notice: {
      screen: Notice,
      navigationOptions: () => {
        return {
          title: '공지사항',
          drawerIcon: <AntDesign name="notification" size={25} color="white" />,
        };
      },
    },
    main: {
      screen: initialNavigator,
      navigationOptions: () => {
        return {
          title: '취소',
          drawerIcon: (
            <AntDesign name="closecircleo" size={25} color="#A5A7A5" />
          ),
        };
      },
    },
  },
  {
    drawerWidth: 300,
    initialRouteName: 'main',
    drawerBackgroundColor: drawerBackgroundColor,
    contentComponent: customDrawerComponent,
    contentOptions: {
      labelStyle: {
        color: 'white',
      },
      activeTintColor: null,
      activeBackgroundColor: null,
    },
  },
);
